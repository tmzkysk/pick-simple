import React from 'react'
import { render } from 'react-dom'

// TODO: ココらへんの大きさは可変にしたい
const canvasWidth = 512
const canvasHeight = 512
const picSize = 16

export default class MainCanvas extends React.Component {
  constructor() {
    super();
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  componentDidMount() {
    this.color = this.props.currentColor
    this.data  = this.props.data
  }

  componentWillReceiveProps(nextProps) {
    this.color = nextProps.currentColor
    this.data  = nextProps.data
  }

  // 1ピクセルずつ書き込む
  onMouseDown(e) {
    var canvas   = this.refs.canvas
    var position = this.getPointPosition(canvas, e)
    var ctx      = canvas.getContext('2d')
    ctx.fillStyle = this.color
    ctx.fillRect(position.x * picSize, position.y * picSize, picSize, picSize);
    this.data[position.y][position.x] = this.color
    this.props.onClick(this.data)
  }

  // 現在位置を取得
  getPointPosition(canvas, e) {
    var rect = canvas.getBoundingClientRect()

    // 16はマスの大きさ
    // 2は枠線
    return {
      x: parseInt((e.pageX - rect.left - 2) / picSize),
      y: parseInt((e.pageY - rect.top - 2) / picSize)
    };
  };

  render() {
    return (
      <canvas id='canvas1' className='mx-auto' onClick={this.onMouseDown} ref="canvas" width={canvasWidth} height={canvasHeight} />
    )
  }
}