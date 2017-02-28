/**
 * Created by bitholic on 2017/2/20.
 */
'use strict';

import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {
    StyleProvider,
    Container,
    Content,
    Header,
    Title,
    ListItem,
    Item,
    Input,
    Icon,
    Card,
    CardItem,
    Text,
    Left,
    Body,
    Right,
    Button
} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";
import Swipeout from 'react-native-swipe-out';
import getTheme from '../themes/components';
import myTheme from '../themes/myTheme';
import moment from 'moment';
import globalStyles from '../themes/globalStyles';

export default class AddBillPage extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.pop()}>
                                <Text style={globalStyles.headerButtonText}>取消</Text>
                            </Button>
                        </Left>
                        <Body>
                        <Title style={globalStyles.headerText}>添加</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => this.props.pop()}>
                                <Text style={globalStyles.headerButtonText}>确定</Text>
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <Card>
                            <CardItem bordered header>
                                <Text style={{color: 'red'}}>支出</Text>
                            </CardItem>
                            <CardItem style={styles.cardBody}>
                                <Grid>
                                    <Row>
                                        <Col>
                                            <Swipeout backgroundColor='#f4f4f4'>
                                                <View style={styles.listItemHeader}>
                                                    <View style={{flex: 1}}>
                                                        <Text style={styles.listText}>项目</Text>
                                                    </View>
                                                    <View style={{flex: 1}}>
                                                        <Text style={styles.listText}>金额</Text>
                                                    </View>
                                                </View>
                                            </Swipeout>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Swipeout
                                                autoClose={true}
                                                backgroundColor='#f4f4f4'
                                                right={[
                                                    {text: '修改', backgroundColor: '#0000ff', underlayColor: '#0000ff'},
                                                    {text: '删除', backgroundColor: '#ff0000', underlayColor: '#ff0000'},
                                                ]}
                                            >
                                                <View style={styles.listItem}>
                                                    <Icon name="ios-more"/>
                                                    <Text>日用品</Text>
                                                    <Text>222.222</Text>
                                                </View>
                                            </Swipeout>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Swipeout
                                                autoClose={true}
                                                backgroundColor='#f4f4f4'
                                                right={[
                                                    {text: '修改', backgroundColor: '#0000ff', underlayColor: '#0000ff'},
                                                    {text: '删除', backgroundColor: '#ff0000', underlayColor: '#ff0000'},
                                                ]}
                                            >
                                                <View style={styles.listItem}>
                                                    <Text>test</Text>
                                                </View>
                                            </Swipeout>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Swipeout backgroundColor='#f4f4f4'>
                                                <View style={styles.listItemHeader}>
                                                    <View style={{flex: 1}}>
                                                        <Text style={styles.listText}>总计</Text>
                                                    </View>
                                                    <View style={{flex: 1}}>
                                                        <Text style={styles.listText}>0.00</Text>
                                                    </View>
                                                </View>
                                            </Swipeout>
                                        </Col>
                                    </Row>
                                </Grid>
                            </CardItem>
                            <CardItem>
                                <Grid>
                                    <Row>
                                        <Col>
                                            <Button transparent>
                                                <Text>项目标签</Text>
                                                <Icon name='arrow-forward'/>
                                            </Button>
                                        </Col>
                                        <Col>
                                            <TextInput style={{padding: 0, keyboardType: 'numeric'}} placeholder='金额'/>
                                        </Col>
                                        <Col>
                                            <Button transparent>
                                                <Text>添加</Text>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Grid>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem bordered header>
                                <Text style={{color: 'green'}}>收入</Text>
                            </CardItem>
                        </Card>
                        <Button transparent onPress={() => this.props.addBill('test')}>
                            <Text>Test</Text>
                        </Button>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
};

const styles = {
    addList: {
        padding: 0,
        margin: 0,
    },
    addButton: {
        height: 48,
    },
    cardBody: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    listItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        borderWidth: 1,
        borderColor: '#f4f4f4',
        borderBottomColor: 'grey'
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    listItemFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        borderWidth: 1,
        borderColor: '#f4f4f4',
        borderBottomColor: 'grey'
    },
    listText: {
        paddingLeft: 5,
        fontWeight: 'bold',
    }
};