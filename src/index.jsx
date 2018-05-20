import React from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import SideMenuReducer from './reducers/side_menu_reducer'
import CanvasReducer from './reducers/canvas_reducer'
import AppContainer from './containers/container'

const combinedReducer = combineReducers({
  SideMenuReducer,
  CanvasReducer
})

const store = createStore(combinedReducer);

ReactDom.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('main')
);
