import * as ColorConstant from './../constants/color_constant'

const initialState = {
  currentColor: '#000000'
}

// reducerの定義
export default function ColorReducer(state=initialState, action) {
  switch (action.type) {
    // pickerで色を指定したとき
    case ColorConstant.CHANGE_COLOR:
      return Object.assign({}, state, {
        currentColor: action.value.hex,
      });
    // キャンバスからスポイトしたとき
    case ColorConstant.PICKUP_COLOR:
    return Object.assign({}, state, {
      currentColor: action.value,
    });
    default:
      return state;
  }
}