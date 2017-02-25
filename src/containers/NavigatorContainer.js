/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push, pop, closeDrawer} from '../actions/navigatorActions';
import Navigator from '../components/Navigator';

export default connect(
    (state) => ({
        navigator: state.navigator,
        drawerEnabled: state.drawerEnabled,
    }),
    (dispatch) => (bindActionCreators({
        push,
        pop,
        closeDrawer,
    }, dispatch))
)(Navigator);