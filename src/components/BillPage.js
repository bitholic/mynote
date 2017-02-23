/**
 * Created by bitholic on 2017/2/19.
 */
'use strict';

import React, {Component} from 'react';
import {Content, Card, CardItem, Text, Left, Body, Right, Button} from 'native-base';
import moment from 'moment';
import {Col, Row, Grid} from "react-native-easy-grid";
import Calendar from 'react-native-calendar';

const recordDays = ['2017-02-02'];
const dayHeadings = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const records = {
    2017: {
            2: {
                1: {
                    out: [
                        { type: 'vegetable', amount: 10.00 },
                        { type: 'fruit', amount: 20.00 },
                        { type: 'rent', amount: 30.00 },
                        { type: 'car', amount: 40.00 },
                        ],
                    in: [],
                },
                2: {
                    out: [
                        { type: 'vegetable', amount: 10.00 },
                        { type: 'fruit', amount: 20.00 },
                        ],
                    in: [],
                },
                3: {
                    out: [
                        { type: 'rent', amount: 30.00 },
                        { type: 'car', amount: 40.00 },
                    ],
                    in: [],
                },
                22: {
                    out: [
                        { type: 'rent', amount: 30.01 },
                        { type: 'car', amount: 40.00 },
                    ],
                    in: [],
                },
            },
        },
};
export default class BillPage extends Component {
    constructor(props) {
        super(props);

        this.onChangeMonth = this.onChangeMonth.bind(this);
    }

    componentWillMount() {
        /*
        storage.save({
            key: 'billRecords',
            rawData: records,
        });
        */
        //this.props.fetchRecords();
    }

    render() {
        const {pop, push, changeDay, fetchRecords, bill} = this.props;
        return (
            <Content>
                <Button light onPress={() => fetchRecords()}>
                    <Text>FETCH</Text>
                </Button>
                <Calendar
                    scrollEnabled={false}
                    showControls={true}
                    showEventIndicators={true}
                    weekStart={0}
                    customStyle={calendarStyle}
                    eventDates={recordDays}
                    dayHeadings={dayHeadings}
                    monthNames={monthNames}
                    prevButtonText={'<<'}
                    nextButtonText={'>>'}
                    onSwipeNext={() => this.onChangeMonth('NEXT')}
                    onSwipePrev={() => this.onChangeMonth('PREV')}
                    onTouchNext={() => this.onChangeMonth('NEXT')}
                    onTouchPrev={() => this.onChangeMonth('PREV')}
                    selectedDate={bill.selectedDay}
                    startDate={bill.selectedMonth}
                    onDateSelect={(date) => changeDay(moment(date).format('YYYY-MM-DD'))}
                />
                <Card>
                    <CardItem header>
                        <Text>{bill.selectedDay} 日账单：</Text>
                    </CardItem>
                    <CardItem>
                        <Grid>
                            <Col >
                                <Text style={styles.out}> - {bill.dayOut} </Text>
                                <Text style={styles.note}> 支出 </Text>
                            </Col>
                            <Col>
                                <Text style={styles.in}> + {bill.dayIn} </Text>
                                <Text style={styles.note}> 收入 </Text>
                            </Col>
                        </Grid>
                    </CardItem>
                    <CardItem footer>
                        <Body>
                        <Button block light onPress={() => push({key: 'addBill', day: moment().format('YYYY-MM-DD')})}>
                            <Text>查 看</Text>
                        </Button>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem header>
                        <Text>{bill.selectedMonth} 月账单：</Text>
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
                        <Button block light onPress={() => push({key: 'addBill', day: moment().format('YYYY-MM-DD')})}>
                            <Text>查 看</Text>
                        </Button>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        )
    }

    renderDayBill(){
        console.log('day');
    }

    renderMonthBill(){
        console.log('month');
    }

    onChangeMonth (type) {
        const numbers = this.props.bill.selectedMonth.split('-');
        let year = parseInt(numbers[0]);
        let month = parseInt(numbers[1]);
        let nextMonth = '';

        if(type === 'NEXT') {
            if(month < 12) {
                month += 1;
            }else{
                year += 1;
                month = 1;
            }
        }
        if(type === 'PREV'){
            if(month > 1) {
                month -= 1;
            }else{
                year -= 1;
                month = 12;
            }
        }
        if(month < 10) {
            nextMonth = year + '-0' + month;
        }else{
            nextMonth = year + '-' + month;
        }
        this.props.changeMonth(nextMonth);
    };
}

const calendarStyle = {
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    controlButtonText: {
        color: '#4e4d52',
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
    eventIndicator: {
        backgroundColor: '#48e9d9',
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