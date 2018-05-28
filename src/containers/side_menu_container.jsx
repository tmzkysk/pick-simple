import React from 'react'
import render from 'react-dom'
import { connect } from 'react-redux'
import SideMenu from './../components/side_menu'
import * as sideMenuAction from './../actions/side_menu_action'

class SideMenuWrapper extends React.Component {
  render() {
    return (
      <SideMenu
        currentColor={this.props.currentColor}
        onChange={this.props.pickerChange}
        onFillClick={this.props.changeFillColor}
        status={this.props.status}
      />
    )
  }
}

// Connect to Redux
const mapStateToProps = (state) => {
  return {
    currentColor: state.SideMenuReducer.currentColor,
    status:       state.SideMenuReducer.status,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pickerChange(value) {
      dispatch(sideMenuAction.changeColor(value));
    },
    changeFillColor(value) {
      dispatch(sideMenuAction.changeFillColor(value));
    },
  }
}

const SideMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenuWrapper);

export default SideMenuContainer;