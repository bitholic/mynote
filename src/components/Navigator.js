/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {NavigationExperimental} from 'react-native';
import HomeScreenContainer from '../containers/HomeScreenContainer';

const { CardStack } = NavigationExperimental;

export default class Navigator extends Component {
    static propTypes = {
        push: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        navigation: PropTypes.objectOf(PropTypes.any)
    };

    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
    }

    render() {
        return (
            <CardStack
                onNavigateBack={this.props.pop}
                navigationState={this.props.navigator}
                renderScene={this.renderScene}
            />
        )
    }

    renderScene(sceneProps) {
        return (
            <HomeScreenContainer
                push={this.props.push}
                pop={this.props.pop}
            />
        );
    }
}