/**
 * Created by bitholic on 2017/2/19.
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import createLogger from 'redux-logger';
import appNavigatorReducer from './reducers/appNavigatorReducer';

const logger = createLogger();

export default (initialState= {}) => (
    createStore(
        combineReducers({
            navigation: appNavigatorReducer,
        }),
        initialState,
        applyMiddleware(thunk, promiseMiddleware(), logger)
    )
);
