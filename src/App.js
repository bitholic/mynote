/**
 * Created by bitholic on 2017/2/19.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import createStore from './createStore';
import AppNavigatorContainer from './containers/AppNavigatorContainer';

const store = createStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigatorContainer/>
            </Provider>
        )
    }
}