/**
 * Created by bitholic on 2017/2/19.
 */
import * as types from '../actions/actionTypes';
import {NavigationExperimental} from 'react-native';

const {StateUtils} = NavigationExperimental;

const routes = {
    home: {
        key: 'home',
        index: 0,
        routes: [
            {key: 'home', title: '首页'},
            {key: 'note', title: '纪事'},
            {key: 'bill', title: '记账'},
        ],
    }
};

const initialState = {
    index: 0,
    routes: [
        routes.home
    ]
};

export default function appNavigatorReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.NAVIGATION_TAB:
            const homeState = StateUtils.get(state, 'home');
            const updatedState = StateUtils.jumpTo(homeState, action.payload);
            return StateUtils.replaceAt(state, 'home', updatedState);
        default:
            return state;
    }
}
