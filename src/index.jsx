import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import SideMenuReducer       from './reducers/side_menu_reducer'
import AppContainer from './containers/container'

// 初期state
// TODO: マスは32 × 32固定
const initialState = {
  currentColor: '#000000',
  canvas: new Array(32, '#FFFFFF'),
  prevCanvas: new Array(32, '#FFFFFF'),
}

const store = createStore(SideMenuReducer, initialState);

ReactDom.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('main')
);
