import React from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import MainCanvas from './../components/main_canvas'
import * as canvasAction from './../actions/canvas_action'

class Canvas extends React.Component {
  render() {
    return (
      <MainCanvas
        data={this.props.canvas}
        currentColor={this.props.currentColor}
        onClick={this.props.addPixel}
        onShiftClick={this.props.pickupColor}
        status={this.props.status}
      />
    )
  }
}

// Connect to Redux
const mapStateToProps = (state) => {
  return {
    canvas:       state.CanvasReducer.canvas,
    currentColor: state.SideMenuReducer.currentColor,
    status:       state.SideMenuReducer.status,
  }
}

const mapDispatchToProps = (dispatch) => {
  // TODO
  return {
    addPixel(value) {
      dispatch(canvasAction.addPixel(value));
    },
    pickupColor(value) {
      dispatch(canvasAction.pickupColor(value));
    },
  }
}

const CanvasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);

export default CanvasContainer;