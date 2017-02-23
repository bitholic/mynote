/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import * as types from '../actions/actionTypes';
import {NavigationExperimental} from 'react-native';

const {StateUtils} = NavigationExperimental;

const initialState = {
    index: 0,
    routes: [{
        index: 2,
        key: 'homePage',
        routes: [
            {key: 'home'},
            {key: 'note'},
            {key: 'bill'},
        ],
    }],
};

export default function appNavigatorReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.NAVIGATION_PUSH:
            return StateUtils.push(state, action.payload);
        case types.NAVIGATION_POP:
            return StateUtils.pop(state);
        case types.NAVIGATION_TAB:
            const homeState = StateUtils.get(state, 'homePage');
            const updatedState = StateUtils.jumpTo(homeState, action.payload);
            return StateUtils.replaceAt(state, 'homePage', updatedState);
        default:
            return state;
    }
}