import * as ConditionConstant from './../constants/condition_constant'

const initialState = {
  condition: {
    currentColor: '#000000',
    fillColor: false,
  }
};

// reducerの定義
export default function ConditionReducer(state=initialState, action) {
  switch (action.type) {
    // pickerで色を指定したとき
    case ConditionConstant.CHANGE_COLOR:
      return Object.assign({}, state, {
        condition: {
          currentColor: action.value.hex,
          fillColor: state.condition.fillColor,
        }
      });
    // キャンバスからスポイトしたとき
    case ConditionConstant.PICKUP_COLOR:
      return Object.assign({}, state, {
        condition: {
          currentColor: action.value,
          fillColor: state.condition.fillColor,
        }
      });
    case ConditionConstant.CHANGE_FILL_COLOR:
      return Object.assign({}, state, {
          condition: {
            currentColor: state.condition.currentColor,
            fillColor: !state.condition.fillColor,
          }
        });
    default:
      return state;
  }
}