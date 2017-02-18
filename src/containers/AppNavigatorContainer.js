/**
 * Created by bitholic on 2017/2/19.
 */
import React, { Component } from 'react';
import {NavigationExperimental} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tab } from '../actions/appNavigatorActions';
import AppNavigator from '../components/AppNavigator';

const { StateUtils } = NavigationExperimental;

export default connect(
    (state) => {
        const homeState = StateUtils.get(state.navigation, 'home');
        return {
            selectedTab: homeState ? homeState.routes[homeState.index].key : 'home',
        };
    },
    (dispatch) => (bindActionCreators({
        tab,
        }, dispatch))
)(AppNavigator);
