import * as SideMenuConstant from './../constants/side_menu_constant'

const initialState = {
  currentColor: '#000000',
  status: {
    fillColor: false,
  }  
}

// reducerの定義
export default function ColorReducer(state=initialState, action) {
  switch (action.type) {
    // pickerで色を指定したとき
    case SideMenuConstant.CHANGE_COLOR:
      return Object.assign({}, state, {
        currentColor: action.value.hex,
      });
    // キャンバスからスポイトしたとき
    case SideMenuConstant.PICKUP_COLOR:
    return Object.assign({}, state, {
      currentColor: action.value,
    });
    case SideMenuConstant.CHANGE_FILL_COLOR:
    return Object.assign({}, state, {
      status: {
        fillColor: !state.status.fillColor,
      }
    });
    default:
      return state;
  }
}