import * as CanvasConstant from './../constants/canvas_constant'
import * as ColorConstant from './../constants/color_constant'

export function addPixel(value) {
  return {
    type: CanvasConstant.ADD_PIXEL,
    value,
  }
}

export function pickupColor(value) {
  return {
    type: ColorConstant.PICKUP_COLOR,
    value,
  }
}