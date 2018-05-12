import * as sidemenuType from './../constants/side_menu_constant'

// reducerの定義
export default function SideMenuReducer(state, action) {
  switch (action.type) {
    case sidemenuType.CHANGE_PICKER:
      return Object.assign({}, state, {
        currentColor: action.value.rgb,
      });
    default:
      return state;
  }
}