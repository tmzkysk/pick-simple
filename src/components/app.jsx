import React from 'react'
import render from 'react-dom'
import CanvasContainer from './../containers/canvas_container'
import SideMenuContainer from './../containers/side_menu_container'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row wrapper'>
          <div className='col-md-6'>
            <CanvasContainer />
          </div>
          <div className='col-md-6'>
            <SideMenuContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default App;