/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
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
        this._renderTabContent = this._renderTabContent.bind(this);
        this.renderTabContent = this.renderTabContent.bind(this);
    }

    render() {
        const {selectedTab, tab} = this.props;
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <Container>
                    {this.renderTabContent(selectedTab)}
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

    renderTabContent(selectedTab) {
        return (
                <Container>
                    <Header>
                        <Body>
                        <Title style={styles.headerText}>{headerTitle[selectedTab]}</Title>
                        </Body>
                    </Header>
                    <Content>
                        <Content style={selectedTab === 'home' ? {} : styles.hidden}>
                            <Title>TodoList:</Title>
                            <Text>weather</Text>
                        </Content>
                        <Content style={selectedTab === 'note' ? {} : styles.hidden}>
                            <Text>笔记本📒</Text>
                        </Content>
                        <Content style={selectedTab === 'bill' ? {} : styles.hidden}>
                            <CalendarWrapper push={this.props.push} pop={this.props.pop} />
                        </Content>
                    </Content>
                </Container>
        )
    }

    /*
     <TabBarIOS>
     <TabBarIOS.Item
     title='test' onPress={ () => tab('home') }
     selected={selectedTab === 'home'}>
     <NavigatorContainer />
     </TabBarIOS.Item>
     <TabBarIOS.Item
     title='test' onPress={ () => tab('note') }
     selected={selectedTab === 'note'}>
     <Text>test</Text>
     </TabBarIOS.Item>
     <TabBarIOS.Item
     title='test' onPress={ () => tab('bill') }
     selected={selectedTab === 'bill'}>
     <CalendarWrapper/>
     </TabBarIOS.Item>
     </TabBarIOS>

     </<TabNavigator>
     <TabNavigator.Item
     selected={selectedTab === 'home'}
     title="home"
     onPress={() => tab('home')}>
     <NavigatorContainer/>
     </TabNavigator.Item>
     <TabNavigator.Item
     selected={selectedTab === 'note'}
     title="note"
     onPress={() => tab('note')}>
     <Title>React Native JS code runs inside this Chrome tab. Press to open
     Developer Tools. Enable Pause On Caught Exceptions for a better debugging experience.
     Status: Debugger session #13265 active.</Title>
     </TabNavigator.Item>
     <TabNavigator.Item
     selected={selectedTab === 'bill'}
     title="bill"
     onPress={() => tab('bill')}>
     <CalendarWrapper/>
     </TabNavigator.Item>
     </TabNavigator>StyleProvider>
     * */

    _renderTabContent(selectedTab) {
        switch (selectedTab) {
            case 'home':
                return (
                    <Container>
                        <Header>
                            <Body>
                            <Title>首页</Title>
                            </Body>
                        </Header>
                        <Text>fuck</Text>
                    </Container>
                );
            case 'note':
                return (
                    <Container>
                        <Header>
                            <Body>
                            <Title>纪事</Title>
                            </Body>
                        </Header>
                        <Content>
                            <Text style={{fontSize: 50}}>React Native JS code runs inside this Chrome tab. Press to open
                                Developer Tools. Enable Pause On Caught Exceptions for a better debugging experience.
                                Status: Debugger session #13265 active.</Text>
                        </Content>
                    </Container>
                );
            case 'bill':
                return (
                    <Container>
                        <Header>
                            <Body>
                            <Title>纪帐</Title>
                            </Body>
                        </Header>
                        <Content>
                            <CalendarWrapper/>
                        </Content>
                    </Container>
                );
        }
    }
};

const styles = {
    hidden: {
        padding: 0,
        width: 0,
        height: 0,
    },
    headerText: {
        color: '#fff',
    }
};