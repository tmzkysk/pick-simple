import * as sidemenuType from './../constants/side_menu_constant'

const initialState = {
  currentColor: '#000000',
}

// reducerの定義
export default function SideMenuReducer(state=initialState, action) {
  switch (action.type) {
    case sidemenuType.CHANGE_PICKER:
      return Object.assign({}, state, {
        currentColor: action.value.hex,
      });
    default:
      return state;
  }
}