/**
 * Created by bitholic on 2017/2/22.
 */
'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeDay, changeMonth, fetchRecords,} from '../actions/calendarActions';
import CalendarWrapper from '../components/Calendar';

export default connect(
    (state) => ({
        calendar: state.calendar,
    }),
    (dispatch) => ({
        changeDay: (day) => dispatch(changeDay(day)),
        changeMonth: (month) => dispatch(changeMonth(month)),
        fetchRecords: () => dispatch(fetchRecords()).catch(err => {}),
    }),
)(CalendarWrapper);
