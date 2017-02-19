/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import * as types from '../actions/actionTypes';
import {NavigationExperimental} from 'react-native';

const {StateUtils} = NavigationExperimental;

const routes = {
    home: {
        index: 0,
        key: 'home',
        routes: [
            {key: 'home'},
            {key: 'note'},
            {key: 'bill'},
        ]
    },
};

const initialState = {
    index: 0,
    routes: [
        routes.home
    ]
};

export default function appNavigatorReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.NAVIGATION_PUSH:
            return StateUtils.push(state, routes[action.payload]);
        case types.NAVIGATION_POP:
            return StateUtils.pop(state);
        case types.NAVIGATION_TAB:
            const homeState = StateUtils.get(state, 'home');
            const updatedState = StateUtils.jumpTo(homeState, action.payload);
            return StateUtils.replaceAt(state, 'home', updatedState);
        default:
            return state;
    }
}