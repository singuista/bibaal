'use strict';

//import React     from 'react';
//import ReactDOM  from 'react-dom';
//import Routes    from './Routes';
//import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
//import promise from 'redux-promise';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//import axios from 'axios';
//import APIUtils	from './utils/APIUtils';
//import UserListings from './stores/UserListingsStore'

const middleware = applyMiddleware(thunk, logger());
const store = createStore(reducers, compose(middleware));
//const store = createStore(reducers, compose(middleware, window.devToolsExtension && window.devToolsExtension()));


export default store;