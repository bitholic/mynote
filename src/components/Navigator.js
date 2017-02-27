/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {NavigationExperimental} from 'react-native';
import {Drawer, Button, Text} from 'native-base';
import Menu from '../components/Menu';
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

    componentDidUpdate() {
        if (this.props.navigator.drawerEnabled === true) {
            this._drawer._root.open();
        }
    }

    render() {
        return (
            <Drawer
                type="displace"
                ref={(ref) => this._drawer = ref}
                tweenDuration={150}
                content={<Menu/>}
                tapToClose={true}
                acceptPan={false}
                negotiatePan={true}
                captureGestures={'open'}
                onClose={() => this.props.closeDrawer()}
                openDrawerOffset={0.25}
                panCloseMask={0.2}
                styles={{
                    drawer: {
                        shadowColor: '#000000',
                        shadowOpacity: 0.8,
                        shadowRadius: 3,
                    },
                }}
                tweenHandler={(ratio) => {
                    return {
                        drawer: {shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5},
                        main: {
                            opacity: (2 - ratio) / 2,
                        },
                    };
                }}
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