/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import createStore from './createStore';
import NavigatorContainer from './containers/NavigatorContainer';
import HomeScreenContainer from './containers/HomeScreenContainer'

const store = createStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HomeScreenContainer/>
            </Provider>
        )
    }
}