/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab, Icon, Button, Text,
    Body, Left, Right, StyleProvider, ListItem,
} from 'native-base';
import getTheme from '../themes/components';
import myTheme from '../themes/myTheme';
import CalendarWrapper from './Calendar';
import NavigatorContainer from '../containers/NavigatorContainer';

const headerTitle = {
    home: '首页',
    note: '笔记',
    bill: '账簿',
};

export default class HomeScreen extends Component {
    static propTypes = {
        selectedTab: PropTypes.string,
        tab: PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {selectedTab, tab} = this.props;
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <Container>
                    <Header>
                        <Body>
                        <Title style={styles.headerText}>{headerTitle[selectedTab]}</Title>
                        </Body>
                    </Header>
                    <SceneContainer {...this.props}>
                        <View key='home'
                              style={[styles.sceneContainer, (selectedTab === 'home' ? {} : styles.hidden)]}
                              pointerEvents={selectedTab === 'home' ? 'auto' : 'none'}
                              removeClippedSubviews={!(selectedTab === 'home')}>
                            <Content>
                                <Title>TodoList:</Title>
                                <Text>weather</Text>
                            </Content>
                        </View>
                        <View key='note'
                              style={[styles.sceneContainer, (selectedTab === 'note' ? {} : styles.hidden)]}
                              pointerEvents={selectedTab === 'note' ? 'auto' : 'none'}
                              removeClippedSubviews={!(selectedTab === 'note')}>
                            <Content>
                                <Text>笔记本📒</Text>
                            </Content>
                        </View>
                        <View key='bill'
                              style={[styles.sceneContainer, (selectedTab === 'bill' ? {} : styles.hidden)]}
                              pointerEvents={selectedTab === 'bill' ? 'auto' : 'none'}
                              removeClippedSubviews={!(selectedTab === 'bill')}>
                            <Content>
                                <CalendarWrapper push={this.props.push} pop={this.props.pop}/>
                            </Content>
                        </View>
                    </SceneContainer>
                    <Footer >
                        <FooterTab>
                            <Button active={selectedTab === 'home'} onPress={() => tab('home')}>
                                <Icon name='ios-apps'/>
                                <Text>{headerTitle.home}</Text>
                            </Button>
                            <Button active={selectedTab === 'note'} onPress={() => tab('note')}>
                                <Icon name='ios-paper'/>
                                <Text>{headerTitle.note}</Text>
                            </Button>
                            <Button active={selectedTab === 'bill'} onPress={() => tab('bill')}>
                                <Icon name='logo-yen'/>
                                <Text>{headerTitle.bill}</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        );
    }
};

//TODO: make it like a true footer tab
class SceneContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

const styles = {
    hidden: {
        overflow: 'hidden',
        opacity: 0,
    },
    sceneContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    headerText: {
        color: '#fff',
    }
};