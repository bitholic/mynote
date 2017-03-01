/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import * as types from '../actions/actionTypes';

export const changeDay = (day) => ({
    type: types.DAY_CHANGED,
    payload: day,
});

export const changeMonth = (month) => ({
    type: types.MONTH_CHANGED,
    payload: month,
});

export const fetchRecords = () => ({
    type: types.FETCH_RECORDS,
    payload: storage.load({key: 'billRecords'}).then(ret => ret),
});

export const addBill = (record) => ({
    type: types.ADD_BILL,
    payload: record,
});

export const chooseTag = (tag) => ({
    type: types.CHOOSE_TAG,
    payload: tag,
});