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
}

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