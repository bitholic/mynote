/**
 * Created by bitholic on 2017/2/19.
 */

import * as types from '../actions/actionTypes';

export const tab = (key) => ({
    type: types.NAVIGATION_TAB,
    payload: key,
});