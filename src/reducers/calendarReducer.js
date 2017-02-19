/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import * as types from '../actions/actionTypes';
import moment from 'moment';

const initialState = {
    today: moment().format(),
    selectedDay: moment().format(),
};

export default function calendarReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.DAY_CHANGED:
            return {
                ...state,
                selectedDay: action.payload,
            };
        default:
            return state;
    }
}