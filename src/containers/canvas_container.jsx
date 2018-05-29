import React from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import MainCanvas from './../components/main_canvas'
import * as canvasAction from './../actions/canvas_action'
import * as conditionAction from './../actions/condition_action'

class Canvas extends React.Component {
  render() {
    return (
      <MainCanvas
        data={this.props.canvas}
        condition={this.props.condition}
        onClick={this.props.addPixel}
        onShiftClick={this.props.pickupColor}
      />
    )
  }
}

// Connect to Redux
const mapStateToProps = (state) => {
  return {
    canvas:    state.CanvasReducer.canvas,
    condition: state.ConditionReducer.condition,
  }
}

const mapDispatchToProps = (dispatch) => {
  // TODO
  return {
    addPixel(value) {
      dispatch(canvasAction.addPixel(value));
    },
    pickupColor(value) {
      dispatch(conditionAction.pickupColor(value));
    },
  }
}

const CanvasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);

export default CanvasContainer;