/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import * as types from '../actions/actionTypes';

export const tab = (key) => ({
    type: types.NAVIGATION_TAB,
    payload: key,
});

export const push = (key) => ({
    type: types.NAVIGATION_PUSH,
    payload: key,
});

export const pop= () => ({
    type: types.NAVIGATION_POP,
});