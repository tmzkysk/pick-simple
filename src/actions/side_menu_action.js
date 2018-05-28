import * as SideMenuConstant from './../constants/side_menu_constant'

export function changeColor(value) {
  return {
    type: SideMenuConstant.CHANGE_COLOR,
    value,
  }
}

export function changeFillColor(value) {
  return {
    type: SideMenuConstant.CHANGE_FILL_COLOR,
    value,
  }
}