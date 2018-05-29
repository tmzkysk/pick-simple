import React from 'react'
import ReactDom from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ConditionReducer from './reducers/condition_reducer'
import CanvasReducer from './reducers/canvas_reducer'
import App from './components/app'

const combinedReducer = combineReducers({
  ConditionReducer,
  CanvasReducer
})

const store = createStore(
  combinedReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
