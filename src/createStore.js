/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import storage from './utils/localAsyncStoreConf';
import createLogger from 'redux-logger';
import navigatorReducer from './reducers/navigatorReducer';
import calendarRenducer from './reducers/calendarReducer';

global.storage = storage;

const logger = createLogger();

const initialState = {};

const store = createStore(
    combineReducers({
        navigator: navigatorReducer,
        calendar: calendarRenducer,
    }),
    initialState,
    applyMiddleware(thunk, promiseMiddleware(), logger),
);

export default store;
