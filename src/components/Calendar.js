/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import React, {Component} from 'react';
import {Container, Content, Card, CardItem, Text, Left, Body, Right, Button} from 'native-base';
import moment from 'moment';
import {Col, Row, Grid} from "react-native-easy-grid";
import Calendar from 'react-native-calendar';


export default class CalendarWrapper extends Component {
    render() {
        return (
            <Content>
                {console.log(moment().format())}
                <Calendar
                    scrollEnabled={true}
                    showControls={true}
                    showEventIndicators={true}
                    weekStart={0}
                    customStyle={calendarStyle}
                    dayHeadings={dayHeadings}
                    monthNames={monthNames}
                    prevButtonText={'<<'}
                    nextButtonText={'>>'}
                    onDateSelect={(date) => {
                        console.log(moment(date).format('YYYY-MM-DD'));
                    }}
                />
                <Card>
                    <CardItem header>
                        <Text>2017-02-19 日账单：</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Col >
                                <Text style={styles.out}> - 100.00 </Text>
                                <Text style={styles.note}> 支出 </Text>
                            </Col>
                            <Col>
                                <Text style={styles.in}> + 100.00 </Text>
                                <Text style={styles.note}> 收入 </Text>
                            </Col>
                        </Grid>
                    </CardItem>
                    <CardItem footer>
                        <Body>
                        <Button block light>
                            <Text>查 看</Text>
                        </Button>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header>
                        <Text>2017-02 月账单：</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Row>
                                <Col >
                                    <Text style={styles.out}> - 233.00 </Text>
                                    <Text style={styles.note}> 支出 </Text>
                                </Col>
                                <Col>
                                    <Text style={styles.in}> + 250.00 </Text>
                                    <Text style={styles.note}> 收入 </Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text style={styles.sum}>本月净收入：17.00</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </CardItem>
                    <CardItem footer>
                        <Body>
                        <Button block light>
                            <Text>查 看</Text>
                        </Button>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        )
    }
}

const dayHeadings = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月',
    '八月', '九月', '十月', '十一月', '十二月'];

const calendarStyle = {
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    controlButtonText: {
        color: '#007aff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    calendarHeading: {
        borderColor: '#6b6b6b',
        paddingVertical: 4,
    },
    weekendHeading: {
        color: 'black',
    },
    dayButton: {
        borderTopWidth: 0,
    },
};

const styles = {
    out: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    in: {
        color: 'green',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    note: {
        textAlign: 'center',
        color: 'grey',
        fontSize: 13,
    },
    sum: {
        paddingTop: 8,
        textAlign: 'center',
        fontWeight: 'bold',
    }
};