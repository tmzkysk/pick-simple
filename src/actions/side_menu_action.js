import * as ColorConstant from './../constants/color_constant'

export function changeColor(value) {
  return {
    type: ColorConstant.CHANGE_COLOR,
    value,
  }
}