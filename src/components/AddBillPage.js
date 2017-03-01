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
import TimerMixin from 'react-timer-mixin';
import MyIcon from '../components/MyIcon';
import globalStyles from '../themes/globalStyles';

export default class AddBillPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        }
    }

    render() {
        const {bill} = this.props;
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
                        <Title style={globalStyles.headerText}>{this.props.day}</Title>
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
                                                    <View style={styles.contentView}>
                                                        <Text style={styles.listBoldText}>项目</Text>
                                                    </View>
                                                    <View style={styles.contentView}>
                                                        <Text style={styles.listBoldText}>金额</Text>
                                                    </View>
                                                </View>
                                            </Swipeout>
                                        </Col>
                                    </Row>
                                    {this.renderContent(bill)}
                                    <Row>
                                        <Col>
                                            <Swipeout backgroundColor='#f4f4f4'>
                                                <View style={styles.listItemFooter}>
                                                    <View style={styles.contentView}>
                                                        <Text style={styles.listBoldText}>总计</Text>
                                                    </View>
                                                    <View style={styles.contentView}>
                                                        <Text style={styles.listBoldText}>0.00</Text>
                                                    </View>
                                                </View>
                                            </Swipeout>
                                        </Col>
                                    </Row>
                                </Grid>
                            </CardItem>
                            <CardItem style={{padding: 0, height: 45}}>
                                <Grid>
                                    <Row>
                                        <Col size={2}>
                                            <Button info full
                                                    disabled={this.state.disabled}
                                                    onPress={() => {
                                                        this.props.push({key: 'chooseTag'});
                                                        this.setState({disabled: true});
                                                        TimerMixin.setTimeout(() => this.setState({disabled: false}), 300)
                                                    }}>
                                                <Text>选择标签</Text>
                                                <Icon name='arrow-forward'/>
                                            </Button>
                                        </Col>
                                        <Col size={2} style={{borderWidth: 1, borderColor: '#62B1F6'}}>
                                            <TextInput style={{height: 45}} keyboardType='numeric' placeholder='输入金额'
                                                       onChangeText={() => {
                                                       }}/>
                                        </Col>
                                        <Col size={1}>
                                            <Button info full>
                                                <Text>保存</Text>
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

    renderContent(bill) {
        if (!bill.selectedDayRecorded) {
            return (
                <Row>
                    <Col>
                        <View style={{flex: 1, alignItems: 'center', height: 100, backgroundColor: '#f4f4f4'}}>
                            <Title>暂未记录</Title>
                        </View>
                    </Col>
                </Row>
            )
        } else {
            return (
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
                                <View style={styles.contentView}>
                                    <MyIcon name='food' style={{fontSize: 22}}/>
                                    <Text style={{paddingLeft: 4}}>日用品</Text>
                                </View>
                                <View style={styles.contentView}>
                                    <Text>222.222</Text>
                                </View>
                            </View>
                        </Swipeout>
                    </Col>
                </Row>
            )
        }
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
        padding: 0,
    },
    listItemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        borderWidth: 1,
        borderColor: '#f4f4f4',
        borderBottomColor: 'grey',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 42,
        borderWidth: 0.5,
        borderColor: '#f4f4f4',
        borderBottomColor: '#6b6b6b',
    },
    listItemFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 44,
    },
    listBoldText: {
        fontWeight: 'bold',
    },
    contentView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
};