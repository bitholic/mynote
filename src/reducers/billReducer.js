/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import * as types from '../actions/actionTypes';
import moment from 'moment';

const initialState = {
    fetchRecordsError: false,
    selectedDay: moment().format('YYYY-MM-DD'),
    selectedMonth: moment().format('YYYY-MM'),
    selectedDayRecorded: false,
    dayOut: 0,
    dayIn: 0,
    monthOut: 0,
    monthIn: 0,
    records: {},
};

export default function billReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.FETCH_RECORDS_FULFILLED:
            return {
                ...state,
                records: action.payload,
                fetchRecordsError: false,
                dayOut: getSelectedDayBill(action.payload, state.selectedDay, 'out'),
            };
        case types.FETCH_RECORDS_REJECTED:
            return {
                ...state,
                fetchRecordsError: true,
            };
        case types.DAY_CHANGED:
            return {
                ...state,
                selectedDay: action.payload,
                dayOut: getSelectedDayBill(state.records, action.payload, 'out'),
            };
        case types.MONTH_CHANGED:
            return {
                ...state,
                selectedMonth: action.payload,
            };
        default:
            return state;
    }
}

function getSelectedDayBill(records, selectedDay, type) {
    const numbers = selectedDay.split('-');
    let year = parseInt(numbers[0]);
    let month = parseInt(numbers[1]);
    let day = parseInt(numbers[2]);
    if (year in records && month in records[year] && day in records[year][month] && type in records[year][month][day]) {
        return addCount(records[year][month][day][type]);
    } else {
        return 0;
    }
}

function addCount(record) {
    let result = 0;
    record.map((item, index) => {
        result += item.amount;
    });
    return result;
}