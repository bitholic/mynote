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
                            <CalendarWrapper/>
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
/**
 * 记账类型：ios-pricetags
 *      日用品：
 *      吃饭：ios-restaurant
 *      水果：
 *      饮料：ios-cafe
 *      零食：ios-pizza
 *      化妆品：md-color-palette
 *      理发:
 *      书籍：book
 *      服装：ios-shirt
 *      税务：ios-boat
 *      丢钱了：
 *      电子设备花费：ios-phone-portrait
 *      医药费：ios-medkit
 *      电影费用：ios-film
 *      车费： ios-car
 *      话费： ios-call
 *      网上费用：ios-laptop
 *      交际费用：ios-contacts
 *      房租： ios-home
 *      其它:
 *      <Icon name='ios-restaurant'/>
 <Text>吃饭</Text>
 <Icon name='ios-cafe'/>
 <Text>饮料</Text>
 <Icon name='ios-pizza'/>
 <Text>零食</Text>
 <Icon name='md-color-palette'/>
 <Text>化妆品</Text>
 <Text>理发</Text>
 <Icon name='book'/>
 <Text>书籍</Text>
 <Icon name='ios-shirt'/>
 <Text>服装</Text>
 <Icon name='ios-boat'/>
 <Text>税务</Text>
 <Text>丢钱</Text>
 <Icon name='ios-phone-portrait'/>
 <Text>电子设备</Text>
 <Icon name='ios-medkit'/>
 <Text>医药</Text>
 <Icon name='ios-film'/>
 <Text>电影</Text>
 <Icon name='ios-car'/>
 <Text>车费</Text>
 <Icon name='ios-call'/>
 <Text>话费</Text>
 <Icon name='ios-laptop'/>
 <Text>网费</Text>
 <Icon name='ios-contacts'/>
 <Text>交际</Text>
 <Icon name='ios-home'/>
 <Text>房租</Text>
 <Text>其它</Text>
 */