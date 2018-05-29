import React from 'react'
import { render } from 'react-dom'

// TODO: ココらへんの大きさは可変にしたい
const canvasWidth = 512
const canvasHeight = 512
const pixelSize = 16
const numOfPixel = 32

export default class MainCanvas extends React.Component {
  constructor() {
    super();
    this.data = null;

    this.onMouseDown  = this.onMouseDown.bind(this);
    this.add          = this.add.bind(this);
    this.fill         = this.fill.bind(this);
    this.pickup       = this.pickup.bind(this);
    this.onMouseMove  = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {
    // deep copyしてstateとしておいておく
    this.data = JSON.parse(JSON.stringify(this.props.data));
  }

  componentWillReceiveProps(nextProps) {
    // deep copyしてstateとしておいておく
    this.data = JSON.parse(JSON.stringify(nextProps.data));
  }

  // canvasクリック時の処理
  onMouseDown(e) {
    this.mouseClick = true;
    var canvas = this.refs.canvas;
    var rect   = canvas.getBoundingClientRect();

    // クリックされた位置を取得(2は枠線のサイズ)
    var x = parseInt((e.pageX - rect.left - 2) / pixelSize);
    var y = parseInt((e.pageY - rect.top - 2) / pixelSize);
    var ctx = canvas.getContext('2d');

    // シフト同時押しの場合は現在の色を変える
    if(e.nativeEvent.shiftKey){
      this.pickup(x, y);
      return;
    }

    if (this.props.condition.fillColor) {
     ctx.beginPath();
     this.fill(ctx, x, y, this.data[y][x]);
     ctx.fill();
    } else {
      this.add(x, y);
    }

    this.props.onClick(this.data);
  }

  // ドラッグしたとき
  onMouseMove(e) {
    if (!this.mouseClick) {
      return false;
    }
    var canvas = this.refs.canvas;
    var rect   = canvas.getBoundingClientRect();

    // クリックされた位置を取得(2は枠線のサイズ)
    var x = parseInt((e.pageX - rect.left - 2) / pixelSize);
    var y = parseInt((e.pageY - rect.top - 2) / pixelSize);
    var ctx = canvas.getContext('2d');

    this.add(x, y);
    this.props.onClick(this.data);
  }

  // ドラッグをやめたとき
  onMouseLeave(e) {
    if (this.mouseClick) {
      this.mouseClick = false
      this.props.onClick(this.data);
    }
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
    ctx.fillStyle = this.props.condition.currentColor
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
    this.data[y][x] = this.props.condition.currentColor
  }

  // 塗りつぶし
  fill(ctx, x, y, originalColor) {
    // クリックしたピクセルと違う色に当たるまで再帰的に行う
    if (x < 0 || x >= numOfPixel) { return }
    if (y < 0 || y >= numOfPixel) { return }
    if (this.data[y][x] != originalColor) { return }

    ctx.beginPath()
    ctx.fillStyle = this.props.condition.currentColor
    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)

    this.data[y][x] = this.props.condition.currentColor
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