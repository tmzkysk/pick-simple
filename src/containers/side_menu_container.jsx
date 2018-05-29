import React from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import SideMenu from './../components/side_menu'
import * as conditionAction from './../actions/condition_action'

class SideMenuWrapper extends React.Component {
  render() {
    return (
      <SideMenu
        condition={this.props.condition}
        onChange={this.props.pickerChange}
        onFillClick={this.props.changeFillColor}
      />
    )
  }
}

// Connect to Redux
const mapStateToProps = (state) => {
  return {
    condition: state.ConditionReducer.condition,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pickerChange(value) {
      dispatch(conditionAction.changeColor(value));
    },
    changeFillColor(value) {
      dispatch(conditionAction.changeFillColor(value));
    },
  }
}

const SideMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenuWrapper);

export default SideMenuContainer;