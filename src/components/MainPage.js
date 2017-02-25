/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import {
    StyleProvider, Container, Header, Title, Content, Footer, FooterTab, Icon, Button, Text,
    Body, Left, Right, ListItem, Drawer,
} from 'native-base';
import getTheme from '../themes/components';
import myTheme from '../themes/myTheme';
import HomePage from '../components/HomePage';
import NotePage from '../components/NotePage';
import BillPageContainer from '../containers/BillPageContainer';

const headerTitle = {
    home: '首页',
    note: '笔记',
    bill: '账簿',
};

export default class MainPage extends Component {
    static propTypes = {
        selectedTab: PropTypes.string,
        tab: PropTypes.func.isRequired,
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {selectedTab, tab, openDrawer} = this.props;
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => openDrawer()}>
                                <Icon name='ios-menu' style={{color: '#fff'}}/>
                            </Button>
                        </Left>
                        <Body>
                        <Title style={styles.headerText}>{headerTitle[selectedTab]}</Title>
                        </Body>
                        <Right></Right>
                    </Header>
                    <Container>
                        <View key='home'
                              style={[styles.sceneContainer, (selectedTab === 'home' ? {} : styles.hidden)]}
                              pointerEvents={selectedTab === 'home' ? 'auto' : 'none'}
                              removeClippedSubviews={!(selectedTab === 'home')}>
                            <HomePage push={this.props.push} pop={this.props.pop}/>
                        </View>
                        <View key='note'
                              style={[styles.sceneContainer, (selectedTab === 'note' ? {} : styles.hidden)]}
                              pointerEvents={selectedTab === 'note' ? 'auto' : 'none'}
                              removeClippedSubviews={!(selectedTab === 'note')}>
                            <NotePage push={this.props.push} pop={this.props.pop}/>
                        </View>
                        <View key='bill'
                              style={[styles.sceneContainer, (selectedTab === 'bill' ? {} : styles.hidden)]}
                              pointerEvents={selectedTab === 'bill' ? 'auto' : 'none'}
                              removeClippedSubviews={!(selectedTab === 'bill')}>
                            <BillPageContainer push={this.props.push} pop={this.props.pop}/>
                        </View>
                    </Container>
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
/*
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
 <NotePage/>
 </View>
 <View key='bill'
 style={[styles.sceneContainer, (selectedTab === 'bill' ? {} : styles.hidden)]}
 pointerEvents={selectedTab === 'bill' ? 'auto' : 'none'}
 removeClippedSubviews={!(selectedTab === 'bill')}>
 <Content>
 <CalendarContainer push={this.props.push} pop={this.props.pop}/>
 </Content>
 </View>
 </SceneContainer>

 class SceneContainer extends Component {
 constructor(props) {
 super(props);
 this.state = {
 fuck: 0,
 }
 }

 isExisted(scenes, key) {
 scenes.map((item, index) => {
 if (item === null)
 return false;
 })
 }

 render() {
 const {selectedTab} = this.props;
 let scene1 =
 <View key='home'
 style={[styles.sceneContainer, (selectedTab === 'home' ? {} : styles.hidden)]}
 pointerEvents={selectedTab === 'home' ? 'auto' : 'none'}
 removeClippedSubviews={!(selectedTab === 'home')}>
 <Content>
 <Title>TodoList:</Title>
 <Text>weather</Text>
 </Content>
 </View>;
 let scene2 =
 <View key='note'
 style={[styles.sceneContainer, (selectedTab === 'note' ? {} : styles.hidden)]}
 pointerEvents={selectedTab === 'note' ? 'auto' : 'none'}
 removeClippedSubviews={!(selectedTab === 'note')}>
 <NotePage/>
 </View>;

 let scene3 =
 <View key='bill'
 style={[styles.sceneContainer, (selectedTab === 'bill' ? {} : styles.hidden)]}
 pointerEvents={selectedTab === 'bill' ? 'auto' : 'none'}
 removeClippedSubviews={!(selectedTab === 'bill')}>
 <CalendarContainer push={this.props.push} pop={this.props.pop}/>
 </View>;

 let scenes = [];
 if (selectedTab === 'home' && !('home' in scenes))
 scenes.push(scene1);
 if (selectedTab === 'note' && !('note' in scenes))
 scenes.push(scene2);
 if (selectedTab === 'bill' && !('bill' in scenes))
 scenes.push(scene3);
 console.log(scenes);
 return (
 <Container>
 {scenes}
 </Container>
 )
 }
 }
 */

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