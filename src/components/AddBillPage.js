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
            fadeOutOpacity: new Animated.Value(0),
            translateXValue: new Animated.Value(0),
            recording: false,
        };
        this.renderContent = this.renderContent.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.bill.selectedInTag !== undefined) {
        }
    }

    startAnimation() {
        this.state.translateXValue.setValue(width);
        Animated.timing(this.state.translateXValue, {
            toValue: 0,
            duration: 500,
        }).start();
    }

    componentDidMount() {
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
                                <Text style={{color: 'red'}}>支 出</Text>
                            </CardItem>
                            {this.renderContent(this.state.recording)}
                        </Card>
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
                    </Content>
                </Container>
            </StyleProvider>
        );
    }


    renderContent(recording) {
        if (!recording) {
            return (
                <View>
                    <CardItem
                        style={{
                            alignItems: 'center',
                            padding: 0,
                            height: 100,
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
                                        <Text style={{color: '#007aff'}}>无支出 一键记录</Text>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button full style={{height: 40}} light onPress={
                                        () => {
                                            this.setState({recording: true});
                                            this.startAnimation();
                                        }
                                    }>
                                        <Text style={{color: '#007aff'}}>开始记录</Text>
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </CardItem>
                </View>
            )
        } else {
            return (
                <Animated.View style={{transform: [{translateX: this.state.translateXValue}]}}>
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
                            <Row>
                                <Col>
                                    <View style={{height: 20, backgroundColor: '#f4f4f4'}}>
                                    </View>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <View style={styles.listItemFooter}>
                                        <View style={styles.contentView}>
                                            <Text style={styles.listBoldText}>总计</Text>
                                        </View>
                                        <View style={styles.contentView}>
                                            <Text style={styles.listBoldText}>0.00</Text>
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
                                            style={{height: 40,borderRightColor: '#a7a7ab', borderRightWidth: 0.5,}}
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
                                               onChangeText={() => {
                                               }}/>
                                </Col>
                                <Col size={1}>
                                    <Button light full style={{height: 40}} onPress={() => {
                                    }}>
                                        <Text style={{color: '#007aff'}}>保 存</Text>
                                    </Button>
                                </Col>
                            </Row>
                        </Grid>
                    </CardItem>
                </Animated.View>
            )
        }
    }

    renderItems(items) {

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
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        backgroundColor: '#f4f4f4',
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderWidth: 0.5,
        borderColor: '#f4f4f4',
        borderBottomColor: '#6b6b6b',
    },
    listItemFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#f4f4f4',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
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