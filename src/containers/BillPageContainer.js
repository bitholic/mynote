/**
 * Created by bitholic on 2017/2/22.
 */
'use strict';

import {connect} from 'react-redux';
import {changeDay, changeMonth, fetchRecords,} from '../actions/billActions';
import BillPage from '../components/BillPage';

export default connect(
    (state) => ({
        bill: state.bill,
    }),
    (dispatch) => ({
        changeDay: (day) => dispatch(changeDay(day)),
        changeMonth: (month) => dispatch(changeMonth(month)),
        fetchRecords: () => dispatch(fetchRecords()).catch(err => {}),
    }),
)(BillPage);
