import CHANGE_PICKER from '../constants/side_menu_constant'

// reducerの定義
export default function SideMenuReducer(state, action) {
  switch (action.type) {
    case CHANGE_PICKER:
      return Object.assign({}, state, {
        currentColor: action.value,
      });
    default:
      return state;
  }
}