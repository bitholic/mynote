/**
 * Created by bitholic on 2017/2/20.
 */
'use strict';

import React, {Component} from 'react';
import {
    StyleProvider,
    Container,
    Content,
    Header,
    Title,
    Item,
    Icon,
    Text,
    Left,
    Body,
    Right,
    Button
} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";
import getTheme from '../themes/components';
import myTheme from '../themes/myTheme';
import globalStyles from '../themes/globalStyles';

import MyIcon from '../components/MyIcon';

const outTypes = [
    [
        {type: 'commodity', title: '日用品'},
        {type: 'food', title: '餐饮'},
        {type: 'snack', title: '零食'},
        {type: 'cosmetic', title: '化妆品'},
    ], [
        {type: 'fruit', title: '水果'},
        {type: 'car', title: '车费'},
        {type: 'cloth', title: '服装'},
        {type: 'ren', title: '交际'},
    ], [
        {type: 'movie', title: '电影'},
        {type: 'hair', title: '理发'},
        {type: 'phone', title: '话费'},
        {type: 'vegetable', title: '买菜'},
    ], [
        {type: 'rent', title: '房租'},
        {type: 'book', title: '书籍'},
        {type: 'medicine', title: '医药'},
        {type: 'laptop', title: '网费'},
    ], [
        {type: 'others', title: '旅游'},
        {type: 'mobile-phone', title: '电子设备'},
        {type: 'lose-money', title: '丢钱'},
        {type: 'others', title: '其它'},
    ]
];

export default class TagList extends Component {
    constructor(props, context) {
        super(props, context);

        this.renderIcons = this.renderIcons.bind(this);
    }

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
                        <Container style={styles.header.container}>
                            <Title style={globalStyles.headerText}>选择标签 </Title>
                            <Icon name='ios-pricetags-outline' style={styles.header.icon}/>
                        </Container>
                        </Body>
                        <Right></Right>
                    </Header>
                    <Content>
                        <Grid>
                            {this.renderIcons(outTypes)}
                        </Grid>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }

    renderIcons(types) {
        return types.map((row, id) => {
            return (
                <Row key={id} style={styles.padding}>
                    {row.map((item, id) => {
                        return (
                            <Col key={id} style={styles.layout}>
                                <MyIcon name={item.type} />
                                <Text style={styles.iconText}>{item.title}</Text>
                            </Col>
                        )
                    })}
                </Row>
            )
        })
    }
}

const styles = {
    header: {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        icon: {
            color: '#f4f442',
            paddingTop: 2,
            fontSize: 17,
        },
    },
    layout: {
        alignItems: 'center',
    },
    padding: {
        paddingVertical: 13,
    },
    iconText: {
        color: '#4e4d52',
        fontSize: 15,
        paddingVertical: 3,
    },
};
