import React from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import MainCanvas from './../components/main_canvas'
import SideMenu from './../components/side_menu'
import * as sideMenuAction from './../actions/side_menu_action'
import * as canvasAction from './../actions/canvas_action'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row wrapper'>
          <div className='col-md-6'>
            <MainCanvas
              data={this.props.canvas}
              currentColor={this.props.currentColor}
              onClick={this.props.addPixel}
            />
          </div>
          <div className='col-md-6'>
            <SideMenu currentColor={this.props.currentColor} onChange={this.props.pickerChange} />
          </div>
        </div>
      </div>
    )
  }
}

// Connect to Redux
const mapStateToProps = (state) => {
  return {
    currentColor: state.SideMenuReducer.currentColor,
    canvas:       state.CanvasReducer.canvas,
    prevCanvas:   state.prevCanvas,
  }
}

const mapDispatchToProps = (dispatch) => {
  // TODO
  return {
    pickerChange(value) {
      dispatch(sideMenuAction.change(value));
    },
    addPixel(value) {
      dispatch(canvasAction.change(value));
    },
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;