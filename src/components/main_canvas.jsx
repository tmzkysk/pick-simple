import React from 'react'
import { render } from 'react-dom'

// TODO: ココらへんの大きさは可変にしたい
const canvasWidth = 512
const canvasHeight = 512
const pixelSize = 16
const numOfPixel = 32

export default class MainCanvas extends React.Component {
  constructor() {
    super()
    this.onMouseDown  = this.onMouseDown.bind(this)
    this.add          = this.add.bind(this)
    this.fill         = this.fill.bind(this)
    this.pickup       = this.pickup.bind(this)
    this.onMouseMove  = this.onMouseMove.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  componentDidMount() {
    this.color = this.props.currentColor
    this.data  = this.props.data
    this.fillColor  = this.props.status.fillColor
  }

  componentWillReceiveProps(nextProps) {
    this.color = nextProps.currentColor
    this.data  = nextProps.data
    this.fillColor  = nextProps.status.fillColor
  }

  // canvasクリック時の処理
  onMouseDown(e) {
    this.mouseClick = true
    var canvas = this.refs.canvas
    var rect   = canvas.getBoundingClientRect()

    // クリックされた位置を取得(2は枠線のサイズ)
    var x = parseInt((e.pageX - rect.left - 2) / pixelSize)
    var y = parseInt((e.pageY - rect.top - 2) / pixelSize)
    var ctx = canvas.getContext('2d')

    // シフト同時押しの場合は現在の色を変える
    if(e.nativeEvent.shiftKey){
      this.pickup(x, y)
      return
    }

    if (this.fillColor) {
     ctx.beginPath()
     this.fill(ctx, x, y, this.data[y][x])
     ctx.fill();
    } else {
      this.add(x, y)
    }

    this.props.onClick(this.data)
  }

  // ドラッグしたとき
  onMouseMove(e) {
    if (!this.mouseClick) {
      return false
    }
    var canvas = this.refs.canvas
    var rect   = canvas.getBoundingClientRect()

    // クリックされた位置を取得(2は枠線のサイズ)
    var x = parseInt((e.pageX - rect.left - 2) / pixelSize)
    var y = parseInt((e.pageY - rect.top - 2) / pixelSize)
    var ctx = canvas.getContext('2d')

    this.add(x, y)
  }

  // ドラッグをやめたとき
  onMouseLeave(e) {
    this.mouseClick = false
  }

  // 選択したピクセルの色を現在の色にする
  pickup(x, y) {
    this.props.onShiftClick(this.data[y][x])
  }

  // 1ピクセル書き込む
  add(x, y) {
    var canvas = this.refs.canvas
    var ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)

    this.data[y][x] = this.color
  }

  // 塗りつぶし
  fill(ctx, x, y, originalColor) {
    // クリックしたピクセルと違う色に当たるまで再帰的に行う
    if (x < 0 || x >= numOfPixel) { return }
    if (y < 0 || y >= numOfPixel) { return }
    if (this.data[y][x] != originalColor) { return }

    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)

    this.data[y][x] = this.color
    this.fill(ctx, x,   y-1, originalColor)
    this.fill(ctx, x-1, y,   originalColor)
    this.fill(ctx, x,   y+1, originalColor)
    this.fill(ctx, x+1, y,   originalColor)
  }

  render() {
    return (
      <canvas id='canvas1' className='mx-auto'
        ref='canvas' width={canvasWidth} height={canvasHeight}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
        onMouseUp={this.onMouseLeave}
      />
    )
  }
}