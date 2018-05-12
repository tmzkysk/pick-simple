import * as type from './../constants/side_menu_constant'

export function change(value) {
  return {
    type: type.CHANGE_PICKER,
    value,
  }
}