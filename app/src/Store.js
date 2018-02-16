'use strict'

import { createStore, applyMiddleware, compose } 	from 'redux'
import reducers 									from './reducers'
import {createLogger} 								from 'redux-logger'
import thunk 										from 'redux-thunk'

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, compose(middleware));
//const store = createStore(reducers, compose(middleware, window.devToolsExtension && window.devToolsExtension()));


export default store;