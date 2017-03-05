/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import * as types from '../actions/actionTypes';
import moment from 'moment';

const initialState = {
    selectedDay: moment().format('YYYY-MM-DD'),
    selectedMonth: moment().format('YYYY-MM'),
    selectedDayRecorded: false,
    dayOut: 0,
    dayIn: 0,
    monthOut: 0,
    monthIn: 0,
    records: {},
    fetchRecordsError: false,
    selectedInTag: undefined,
    selectedOutTag: undefined,
    selectedDayRecords: {},
};

export default function billReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.FETCH_RECORDS_FULFILLED:
            return {
                ...state,
                records: action.payload,
                fetchRecordsError: false,
                selectedDayRecorded: isRecorded(action.payload.days, state.selectedDay),
                dayOut: getSelectedDayBill(action.payload, state.selectedDay, 'out'),
                dayIn: getSelectedDayBill(action.payload, state.selectedDay, 'in'),
                monthOut: getSelectedMonthBill(action.payload, state.selectedMonth, 'out'),
                monthIn: getSelectedMonthBill(action.payload, state.selectedMonth, 'in'),
                selectedDayRecords: getSelectedDayRecords(action.payload, state.selectedDay),
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
                selectedDayRecorded: isRecorded(state.records.days, action.payload),
                dayOut: getSelectedDayBill(state.records, action.payload, 'out'),
                dayIn: getSelectedDayBill(state.records, action.payload, 'in'),
                selectedDayRecords: getSelectedDayRecords(state.records, action.payload),
            };
        case types.MONTH_CHANGED:
            return {
                ...state,
                selectedMonth: action.payload,
                monthOut: getSelectedMonthBill(state.records, action.payload, 'out'),
                monthIn: getSelectedMonthBill(state.records, action.payload, 'in'),
            };
        case types.ADD_BILL:
            return state;
        case types.REMOVE_RECORD:
            const numbers = state.selectedDay.split('-');
            let year = parseInt(numbers[0]);
            let month = parseInt(numbers[1]);
            let day = parseInt(numbers[2]);
            let tmp = state.records;
            tmp.detail[year][month][day][action.payload.type].remove(action.payload.index);
            return {
                ...state,
                records: tmp,
            };
        case types.CHOOSE_TAG:
            return {
                ...state,
                selectedOutTag: action.payload,
            };
        default:
            return state;
    }
}

Array.prototype.remove = function (from, to) {
    let rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

function getSelectedDayBill(records, selectedDay, type) {
    if(isRecorded(records.days, selectedDay)){
        const numbers = selectedDay.split('-');
        let year = parseInt(numbers[0]);
        let month = parseInt(numbers[1]);
        let day = parseInt(numbers[2]);
        return addCount(records.detail[year][month][day][type]);
    }else{
        return 0;
    }
}

function getSelectedDayRecords(records, selectedDay){
    if(isRecorded(records.days, selectedDay)){
        const numbers = selectedDay.split('-');
        let year = parseInt(numbers[0]);
        let month = parseInt(numbers[1]);
        let day = parseInt(numbers[2]);
        return records.detail[year][month][day];
    }else{
        return {};
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

function isRecorded(a, obj) {
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