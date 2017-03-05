/**
 * Created by bitholic on 2017/2/28.
 */
'use strict';

import {connect} from 'react-redux';
import {addBill, removeRecord} from '../actions/billActions';
import AddBillPage from '../components/AddBillPage';

export default connect(
    (state) => ({
        bill: state.bill,
    }),
    (dispatch) => ({
        addBill: (record) => dispatch(addBill(record)),
        removeRecord: (record) => dispatch(removeRecord(record)),
    })
)(AddBillPage);