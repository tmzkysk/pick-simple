import * as CanvasConstant from './../constants/canvas_constant'
import * as SideMenuConstant from './../constants/side_menu_constant'

export function addPixel(value) {
  return {
    type: CanvasConstant.ADD_PIXEL,
    value,
  }
}

export function pickupColor(value) {
  return {
    type: SideMenuConstant.PICKUP_COLOR,
    value,
  }
}