import React from 'react'
import { render } from 'react-dom'
import { ChromePicker } from 'react-color'

export default class SideMenu extends React.Component {
  constructor() {
    super()
    this.onClick  = this.onClick.bind(this)
  }

  componentDidMount() {
    this.fillColor = this.props.condition.fillColor
  }

  componentWillReceiveProps(nextProps) {
    this.fillColor = nextProps.condition.fillColor
  }

  onClick() {
    this.props.onFillClick()
  }

  render() {
    return (
      <div className='card'>
      <div className='card-body'>
        <h4 className='card-title'>Pallet</h4>
        <div id='pallet'>
          <ChromePicker color={ this.props.condition.currentColor } onChange={ this.props.onChange } disableAlpha />
        </div>
        <h4 className='card-title'>Tools</h4>
        {/* TODO */}
        <button onClick={this.onClick} className='btn btn-primary'>{this.props.condition.fillColor ? '塗りつぶし解除' : '塗りつぶし'}</button>
        <button className='btn btn-primary'>回転</button>
        <button className='btn btn-primary'>undo</button>
        <button className='btn btn-primary'>上下反転</button>
        <button className='btn btn-primary'>クリア</button>
      </div>
    </div>
    )
  }
}