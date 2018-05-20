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
    this.onMouseDown = this.onMouseDown.bind(this)
    this.add         = this.add.bind(this)
    this.fill        = this.fill.bind(this)
  }

  componentDidMount() {
    this.color = this.props.currentColor
    this.data  = this.props.data
  }

  componentWillReceiveProps(nextProps) {
    this.color = nextProps.currentColor
    this.data  = nextProps.data
  }

  // canvasクリック時の処理
  onMouseDown(e) {
    var canvas = this.refs.canvas
    var rect   = canvas.getBoundingClientRect()

    // クリックされた位置を取得(2は枠線のサイズ)
    var x = parseInt((e.pageX - rect.left - 2) / pixelSize)
    var y = parseInt((e.pageY - rect.top - 2) / pixelSize)
    var ctx = canvas.getContext('2d')

    this.add(ctx, x, y)

    // if fill? {
    //  ctx.beginPath()
    //  this.fill(ctx, x, y, this.data[y][x])
    //  ctx.fill();
    // }
    this.props.onClick(this.data)
  }

  // 1ピクセル書き込む
  add(ctx, x, y) {
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
      <canvas id='canvas1' className='mx-auto' onClick={this.onMouseDown} ref='canvas' width={canvasWidth} height={canvasHeight} />
    )
  }
}