/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push, pop} from '../actions/navigatorActions';
import Navigator from '../components/Navigator';

export default connect(
    (state) => ({
        navigator: state.navigator,
    }),
    (dispatch) => (bindActionCreators({
        push,
        pop,
    }, dispatch))
)(Navigator);