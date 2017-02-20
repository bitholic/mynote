/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {NavigationExperimental} from 'react-native';
import HomeScreenContainer from '../containers/HomeScreenContainer';
import AddBill from '../components/AddBill';
import TagList from '../components/TagList';

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
                direction='vertical'
                onNavigateBack={this.props.pop}
                navigationState={this.props.navigator}
                renderScene={this.renderScene}
            />
        )
    }

    renderScene(sceneProps) {
        const route = sceneProps.scene.route;
        switch (route.key) {
            case 'home':
                return (
                    <HomeScreenContainer
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
            case 'addBill':
                return (
                    <AddBill
                        {...route.props}
                        {...route}
                        push={this.props.push}
                        pop={this.props.pop}
                        />
                );
            case 'addTag':
                return (
                    <TagList
                        {...route.props}
                        {...route}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );

        }
    }
}