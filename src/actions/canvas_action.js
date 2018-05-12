import * as type from './../constants/canvas_constant'

export function change(value) {
  return {
    type: type.CLICK_PIXEL,
    value,
  }
}