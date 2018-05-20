import * as canvasType from './../constants/canvas_constant'

// TODO: ピクセル数は可変にしたい
var dataTable = new Array(32);
for(let i = 0; i < 32; i++) {
  dataTable[i] = new Array(32).fill('#FFFFFF');
}

const initialState = {
  canvas: dataTable
}

// reducerの定義
export default function SideMenuReducer(state=initialState, action) {
  switch (action.type) {
    case canvasType.CLICK_PIXEL:
      return Object.assign({}, state, {
        canvas: action.value,
      });
    default:
      return state;
  }
}