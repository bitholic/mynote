/**
 * Created by bitholic on 2017/2/20.
 */
'use strict';

import React, {Component} from 'react';
import {Animated, Easing, View, TextInput, Dimensions} from 'react-native';
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
    Button,
} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";
import Swipeout from 'react-native-swipe-out';
import getTheme from '../themes/components';
import myTheme from '../themes/myTheme';
import TimerMixin from 'react-timer-mixin';
import MyIcon from '../components/MyIcon';
import globalStyles from '../themes/globalStyles';

const {width, height} = Dimensions.get('window');

export default class AddBillPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            inText: '选择标签',
            defaultTag: 'arrow-forward',
            amount: 0,
            inRecords: [],
            fadeOutOpacity: new Animated.Value(0),
            translateXValue: new Animated.Value(0),
            recording: false,
        };
        this.renderContent = this.renderContent.bind(this);
        this.renderItems = this.renderItems.bind(this);
        this.addBill = this.addBill.bind(this);
    }

    startAnimation() {
        this.state.translateXValue.setValue(width);
        Animated.timing(this.state.translateXValue, {
            toValue: 0,
            duration: 500,
        }).start();
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
                        <Title style={globalStyles.headerText}>{bill.selectedDay}</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => this.props.pop()}>
                                <Text style={globalStyles.headerButtonText}>确定</Text>
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        {this.renderContent(bill)}
                    </Content>
                </Container>
            </StyleProvider>
        );
    }

    renderContent(bill) {
        if (bill.selectedDayRecorded) {
            if (!this.state.recording) {
                return (
                    <Card>
                        <CardItem bordered header>
                            <Text style={{color: 'red'}}>支 出</Text>
                        </CardItem>
                        {this.renderRecords(bill.selectedDayRecords['out'])}
                        <CardItem style={{padding: 0, height: 40, backgroundColor: '#fff'}} bordered footer>
                            <Grid>
                                <Row>
                                    <Col>
                                        <Button full transparent style={{height: 40}} onPress={
                                            () => {
                                                this.setState({recording: true});
                                            }
                                        }>
                                            <Text style={{color: '#007aff'}}>修 改</Text>
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </CardItem>
                    </Card>
                );
            }else{
                return (
                    <Card>
                        <CardItem bordered header style={{paddingTop: 0, paddingBottom: 0}}>
                            <Left>
                                <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold', marginLeft: 0}}>支 出</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Button transparent style={{height: 50}}>
                                    <Text style={{fontSize: 15}}>保存</Text>
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem style={styles.cardBody}>
                            <Grid>
                                <Row>
                                    <Col>
                                        <View style={styles.listItemHeader}>
                                            <View style={styles.contentView}>
                                                <Text style={styles.listBoldText}>项目</Text>
                                            </View>
                                            <View style={styles.contentView}>
                                                <Text style={styles.listBoldText}>金额</Text>
                                            </View>
                                        </View>
                                    </Col>
                                </Row>
                                {this.renderItems(bill.selectedDayRecords['out'])}
                                <Row>
                                    <Col>
                                        <View style={styles.listItemFooter}>
                                            <View style={styles.contentView}>
                                                <Text style={styles.listBoldText}>总计</Text>
                                            </View>
                                            <View style={styles.contentView}>
                                                <Text style={styles.listBoldText}>{this.addBill()}</Text>
                                            </View>
                                        </View>
                                    </Col>
                                </Row>
                            </Grid>
                        </CardItem>
                        <CardItem style={{padding: 0, height: 40}}>
                            <Grid>
                                <Row>
                                    <Col size={2}>
                                        <Button transparent full
                                                style={{height: 40, borderRightColor: '#a7a7ab', borderRightWidth: 0.5,}}
                                                disabled={this.state.disabled}
                                                onPress={() => {
                                                    this.props.push({key: 'chooseTag'});
                                                    this.setState({disabled: true});
                                                    TimerMixin.setTimeout(() => this.setState({disabled: false}), 300)
                                                }}>
                                            <Text style={{color: '#007aff'}}>{this.state.inText}</Text>
                                            <Icon name={this.state.defaultTag} style={{color: '#007aff'}}/>
                                        </Button>
                                    </Col>
                                    <Col size={2} style={{borderWidth: 1, borderColor: '#f4f4f4'}}>
                                        <TextInput style={{height: 40}} keyboardType='numeric' placeholder='输入金额'
                                                   onChangeText={ (amount) => {
                                                       this.setState({amount: amount});
                                                   }}/>
                                    </Col>
                                    <Col size={1}>
                                        <Button transparent full style={{height: 40}} onPress={() => {
                                            let tmp = this.state.inRecords;
                                            tmp.push({
                                                type: '待定',
                                                amount: this.state.amount
                                            });
                                            this.setState({inRecords: tmp});
                                        }}>
                                            <Text style={{color: '#007aff'}}>添 加</Text>
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </CardItem>
                    </Card>
                )
            }
        } else {

        }
        /*
         if (!this.state.recording) {
         return (
         <Card>
         <CardItem bordered header>
         <Text style={{color: 'red'}}>支 出</Text>
         </CardItem>
         <CardItem style={styles.cardBody}>
         </CardItem>
         <CardItem style={{padding: 0, height: 40, backgroundColor: '#fff'}} bordered footer>
         <Grid>
         <Row>
         <Col>
         <Button full style={{
         height: 40,
         borderRightColor: '#a7a7ab',
         borderRightWidth: 0.5,
         }} light>
         <Text style={{color: '#007aff'}}>无支出 一键记录</Text>
         </Button>
         </Col>
         <Col>
         <Button full style={{height: 40}} light onPress={
         () => {
         this.setState({recording: true});
         //this.startAnimation();
         }
         }>
         <Text style={{color: '#007aff'}}>开始记录</Text>
         </Button>
         </Col>
         </Row>
         </Grid>
         </CardItem>
         </Card>
         )
         } else {
         return (
         <Card>
         <CardItem bordered header style={{paddingTop: 0, paddingBottom: 0}}>
         <Left>
         <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold', marginLeft: 0}}>支 出</Text>
         </Left>
         <Body/>
         <Right>
         <Button transparent style={{height: 50}}>
         <Text style={{fontSize: 15}}>保存</Text>
         </Button>
         </Right>
         </CardItem>
         <CardItem style={styles.cardBody}>
         <Grid>
         <Row>
         <Col>
         <View style={styles.listItemHeader}>
         <View style={styles.contentView}>
         <Text style={styles.listBoldText}>项目</Text>
         </View>
         <View style={styles.contentView}>
         <Text style={styles.listBoldText}>金额</Text>
         </View>
         </View>
         </Col>
         </Row>
         {this.renderItems(this.state.inRecords)}
         <Row>
         <Col>
         <View style={styles.listItemFooter}>
         <View style={styles.contentView}>
         <Text style={styles.listBoldText}>总计</Text>
         </View>
         <View style={styles.contentView}>
         <Text style={styles.listBoldText}>{this.addBill()}</Text>
         </View>
         </View>
         </Col>
         </Row>
         </Grid>
         </CardItem>
         <CardItem style={{padding: 0, height: 40}}>
         <Grid>
         <Row>
         <Col size={2}>
         <Button light full
         style={{height: 40, borderRightColor: '#a7a7ab', borderRightWidth: 0.5,}}
         disabled={this.state.disabled}
         onPress={() => {
         this.props.push({key: 'chooseTag'});
         this.setState({disabled: true});
         TimerMixin.setTimeout(() => this.setState({disabled: false}), 300)
         }}>
         <Text style={{color: '#007aff'}}>{this.state.inText}</Text>
         <Icon name={this.state.defaultTag} style={{color: '#007aff'}}/>
         </Button>
         </Col>
         <Col size={2} style={{borderWidth: 1, borderColor: '#f4f4f4'}}>
         <TextInput style={{height: 40}} keyboardType='numeric' placeholder='输入金额'
         onChangeText={ (amount) => {
         this.setState({amount: amount});
         }}/>
         </Col>
         <Col size={1}>
         <Button light full style={{height: 40}} onPress={() => {
         let tmp = this.state.inRecords;
         tmp.push({
         type: '待定',
         amount: this.state.amount
         });
         this.setState({inRecords: tmp});
         }}>
         <Text style={{color: '#007aff'}}>添 加</Text>
         </Button>
         </Col>
         </Row>
         </Grid>
         </CardItem>
         </Card>
         )
         }
         */
    }

    renderRecords(records) {
        if (records.length === 0) {
            return (
                <CardItem
                    style={{
                        alignItems: 'center',
                        padding: 0,
                        height: 120,
                        width: width,
                        justifyContent: 'center',
                        backgroundColor: '#f4f4f4',
                        opacity: 0.7,
                    }}>
                    <Text>无 支 出</Text>
                </CardItem>
            )
        } else {
            let items = records.map((item, index) => {
                return (
                    <Row key={index}>
                        <Col>
                            <View style={styles.listItem}>
                                <View style={styles.contentView}>
                                    <Text>{item.type}</Text>
                                </View>
                                <View style={styles.contentView}>
                                    <Text>{item.amount}</Text>
                                </View>
                            </View>
                        </Col>
                    </Row>
                )
            });
            return (
                <CardItem style={styles.cardBody}>
                    <Grid>
                        <Row>
                            <Col>
                                <View style={styles.listItemHeader}>
                                    <View style={styles.contentView}>
                                        <Text style={styles.listBoldText}>项目</Text>
                                    </View>
                                    <View style={styles.contentView}>
                                        <Text style={styles.listBoldText}>金额</Text>
                                    </View>
                                </View>
                            </Col>
                        </Row>
                        {items}
                        <Row>
                            <Col>
                                <View style={styles.listItemFooter}>
                                    <View style={styles.contentView}>
                                        <Text style={styles.listBoldText}>总计</Text>
                                    </View>
                                    <View style={styles.contentView}>
                                        <Text style={styles.listBoldText}>{this.addBill()}</Text>
                                    </View>
                                </View>
                            </Col>
                        </Row>
                    </Grid>
                </CardItem>
            )
        }
    }

    renderItems(records) {
        if (records.length === 0) {
            return (
                <Row>
                    <Col>
                        <View style={{height: 40, backgroundColor: '#f4f4f4'}}>
                        </View>
                    </Col>
                </Row>
            )
        } else {
            return records.map((item, index) => {
                return (
                    <Row key={index}>
                        <Col>
                            <Swipeout
                                autoClose={true}
                                backgroundColor='#f4f4f4'
                                right={[
                                    {text: '修 改', backgroundColor: '#616BF2', underlayColor: '#616BF2'},
                                    {
                                        text: '删 除',
                                        backgroundColor: '#F23D3D',
                                        underlayColor: '#F23D3D',
                                        onPress: () => {
                                            this.props.removeRecord({type: 'out', index: index})
                                        }
                                    }
                                ]}
                            >
                                <View style={styles.listItem}>
                                    <View style={styles.contentView}>
                                        <Text>{item.type}</Text>
                                    </View>
                                    <View style={styles.contentView}>
                                        <Text>{item.amount}</Text>
                                    </View>
                                </View>
                            </Swipeout>
                        </Col>
                    </Row>
                )
            })
        }
    }

    addBill() {
        let sum = 0;
        this.state.inRecords.map((item, index) => {
            sum += parseFloat(item.amount);
        });
        return sum.toFixed(2);
    }
};

Array.prototype.remove = function (from, to) {
    let rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
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
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        backgroundColor: '#f4f4f4',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#f4f4f4',
    },
    listItemFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#f4f4f4',
        height: 40,
        borderTopWidth: 1,
        borderTopColor: 'grey',
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

/*
 <Card>
 <CardItem bordered header>
 <Text style={{color: 'green'}}>收 入</Text>
 </CardItem>
 <CardItem
 style={{
 alignItems: 'center',
 padding: 0,
 height: 60,
 justifyContent: 'center',
 backgroundColor: '#f4f4f4'
 }}>
 <Text>暂 未 记 录</Text>
 </CardItem>
 <CardItem style={{padding: 0, height: 40, backgroundColor: '#fff'}} bordered footer>
 <Grid>
 <Row>
 <Col>
 <Button full style={{
 height: 40,
 borderRightColor: '#a7a7ab',
 borderRightWidth: 0.5,
 }} light>
 <Text style={{color: '#007aff'}}>无收入 一键记录</Text>
 </Button>
 </Col>
 <Col>
 <Button full style={{height: 40}} light>
 <Text style={{color: '#007aff'}}>开始记录</Text>
 </Button>
 </Col>
 </Row>
 </Grid>
 </CardItem>
 </Card>
 <Card>
 <CardItem bordered header>
 <Text style={{color: '#48e9d9'}}>备 注</Text>
 </CardItem>
 <CardItem>
 <View>
 <TextInput style={{height: 40}}/>
 </View>
 </CardItem>
 </Card>
 */