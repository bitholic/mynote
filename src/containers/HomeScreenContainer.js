/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import { NavigationExperimental } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { tab } from '../actions/navigatorActions';
import HomeScreen from '../components/HomeScreen';

const { StateUtils } = NavigationExperimental;

export default connect(
    (state) => {
        const homeState = StateUtils.get(state.navigator, 'homePage');
        return {
            selectedTab: homeState ? homeState.routes[homeState.index].key : 'home'
        };
    },
    (dispatch) => (bindActionCreators({
        tab,
    }, dispatch))
)(HomeScreen);
