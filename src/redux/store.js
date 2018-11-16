'use strict'

import {createStore, combineReducers} from 'redux'

import visitor from './reducers/visitor'
import vars from './reducers/vars'
import objs from './reducers/objs'
import lists from './reducers/lists'
import banners from './reducers/banners'
import map from './reducers/map'

var mainReducer = combineReducers({
  visitor,
  vars,
  banners,
  lists,
  objs,
  map
})

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const {dispatch, getState, subscribe} = store

export {
  store as default,
  dispatch,
  getState,
  subscribe
}
