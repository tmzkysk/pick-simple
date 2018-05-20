import React from 'react'
import { render } from 'react-dom'
import { ChromePicker } from 'react-color'

export default class SideMenu extends React.Component {
  render() {
    return (
      <div className='card'>
      <div className='card-body'>
        <h4 className='card-title'>Pallet</h4>
        <div id='pallet'>
          <ChromePicker color={ this.props.currentColor } onChange={ this.props.onChange } disableAlpha />
        </div>
        <h4 className='card-title'>Tools</h4>
        {/* TODO */}
        <button className='btn btn-primary'>塗りつぶし</button>
        <button className='btn btn-primary'>回転</button>
        <button className='btn btn-primary'>undo</button>
        <button className='btn btn-primary'>上下反転</button>
        <button className='btn btn-primary'>クリア</button>
      </div>
    </div>
    )
  }
}