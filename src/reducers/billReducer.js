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
                dayIn: getSelectedDayBill(action.payload, state.selectedDay, 'in'),
                monthOut: getSelectedMonthBill(action.payload, state.selectedMonth, 'out'),
                monthIn: getSelectedMonthBill(action.payload, state.selectedMonth, 'in'),
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
                dayIn: getSelectedDayBill(state.records, action.payload, 'in'),
            };
        case types.MONTH_CHANGED:
            return {
                ...state,
                selectedMonth: action.payload,
                monthOut: getSelectedMonthBill(state.records, action.payload, 'out'),
                monthIn: getSelectedMonthBill(state.records, action.payload, 'in'),
            };
        default:
            return state;
    }
}

function getSelectedDayBill(records, selectedDay, type) {
    if(contains(records.days, selectedDay)){
        const numbers = selectedDay.split('-');
        let year = parseInt(numbers[0]);
        let month = parseInt(numbers[1]);
        let day = parseInt(numbers[2]);
        return addCount(records.detail[year][month][day][type]);
    }else{
        return 0;
    }
}

function getSelectedMonthBill(records, selectedMonth, type) {
    const numbers = selectedMonth.split('-');
    let year = parseInt(numbers[0]);
    let month = parseInt(numbers[1]);
    let sum = 0;
    if(year in records.detail && month in records.detail[year]){
        const monthObj = records.detail[year][month];
        for(let day in monthObj) {
            monthObj[day][type].map((item, key) => {
                sum += item.amount;
            })
        }
        return sum;
    }else{
        return sum;
    }
}

function addCount(record) {
    let result = 0;
    record.map((item, index) => {
        result += item.amount;
    });
    return result;
}

function contains(a, obj) {
    if(a === undefined){
        return false;
    }else {
        let i = a.length;
        while (i--) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }
}