import * as CanvasConstant from './../constants/canvas_constant'

export function addPixel(value) {
  return {
    type: CanvasConstant.ADD_PIXEL,
    value,
  }
}