/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import { NavigationExperimental } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { tab, openDrawer} from '../actions/navigatorActions';
import MainPage from '../components/MainPage';

const { StateUtils } = NavigationExperimental;

export default connect(
    (state) => {
        const mainState = StateUtils.get(state.navigator, 'mainPage');
        return {
            selectedTab: mainState ? mainState.routes[mainState.index].key : 'home'
        };
    },
    (dispatch) => (bindActionCreators({
        tab,
        openDrawer,
    }, dispatch))
)(MainPage);
