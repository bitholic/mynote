/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {NavigationExperimental} from 'react-native';
import {Drawer, Button, Text} from 'native-base';
import MainPageContainer from '../containers/MainPageContainer';
import AddBill from '../components/AddBill';
import TagList from '../components/TagList';

const {CardStack} = NavigationExperimental;

export default class Navigator extends Component {
    static propTypes = {
        push: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        navigator: PropTypes.objectOf(PropTypes.any).isRequired,
    };

    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
    }

    componentDidUpdate () {
        console.log(this);
        if (this.props.drawerDisabled) {
            this.closeControlPanel();
        }else{
            this.openControlPanel();
        }
    }

    openControlPanel(){
        this._drawer._root.open();
    }

    closeControlPanel(){
        this._drawer._root.close()
    }


    render() {
        return (
            <Drawer
                type="overlay"
                ref={(ref) => this._drawer = ref}
                tapToClose
                acceptPan={false}
                content={<Text>Card Content</Text>}
                captureGestures={true}
                openDrawerOffset={100}
            >
                 <CardStack
                 direction='vertical'
                 onNavigateBack={this.props.pop}
                 navigationState={this.props.navigator}
                 renderScene={this.renderScene}
                 />
            </Drawer>
        )
    }

    renderScene(sceneProps) {
        const route = sceneProps.scene.route;
        switch (route.key) {
            case 'mainPage':
                return (
                    <MainPageContainer
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
            case 'addBill':
                return (
                    <AddBill
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
            case 'addTag':
                return (
                    <TagList
                        {...route.props}
                        push={this.props.push}
                        pop={this.props.pop}
                    />
                );
        }
    }
}