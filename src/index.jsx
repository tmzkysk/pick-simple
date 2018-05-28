import React from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import SideMenuReducer from './reducers/side_menu_reducer'
import CanvasReducer from './reducers/canvas_reducer'
import App from './components/app'

const combinedReducer = combineReducers({
  SideMenuReducer,
  CanvasReducer
})

const store = createStore(combinedReducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
