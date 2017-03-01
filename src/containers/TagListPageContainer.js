/**
 * Created by bitholic on 2017/2/28.
 */
'use strict';

import {connect} from 'react-redux';
import {chooseTag} from '../actions/billActions';
import TagListPage from '../components/TagListPage';

export default connect(
    (state) => ({
        bill: state.bill,
    }),
    (dispatch) => ({
        chooseTag: (tag) => dispatch(chooseTag(tag)),
    }),
)(TagListPage);