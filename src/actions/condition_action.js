import * as ConditionConstant from './../constants/condition_constant'

export function changeColor(value) {
  return {
    type: ConditionConstant.CHANGE_COLOR,
    value,
  }
}

export function changeFillColor(value) {
  return {
    type: ConditionConstant.CHANGE_FILL_COLOR,
    value,
  }
}

export function pickupColor(value) {
  return {
    type: ConditionConstant.PICKUP_COLOR,
    value,
  }
}