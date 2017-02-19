/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import navigatorReducer from './reducers/navigatorReducer';

const logger = createLogger();

export default (initialState= {}) => (
    createStore(
        combineReducers({
            navigator: navigatorReducer,
        }),
        initialState,
        applyMiddleware(thunk, promiseMiddleware(), logger)
    )
);
