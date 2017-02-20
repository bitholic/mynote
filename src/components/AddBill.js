/**
 * Created by bitholic on 2017/2/20.
 */
'use strict';

import React, {Component} from 'react';
import {StyleProvider, Container, Content, Header, Title, ListItem, Item, Input, Icon, Card, CardItem, Text, Left, Body, Right, Button} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";
import getTheme from '../themes/components';
import myTheme from '../themes/myTheme';
import moment from 'moment';
import globalStyles from '../themes/globalStyles';

export default class AddBill extends Component {
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
                        <ListItem itemDivider>
                            <Text>支出</Text>
                        </ListItem>
                        <ListItem style={styles.addList}>
                            <Grid>
                                <Col>
                                    <Button iconRight light full style={styles.addButton}
                                            onPress={() => this.props.push({key: 'addTag'})}
                                    >
                                        <Text>添加标签</Text>
                                        <Icon name='arrow-forward' />
                                    </Button>
                                </Col>
                                <Col>
                                    <Item>
                                        <Input placeholder='金额'/>
                                    </Item>
                                </Col>
                            </Grid>
                        </ListItem>
                        <ListItem itemDivider style={{backgroundColor: 'red'}}>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>收入</Text>
                        </ListItem>
                        <ListItem>
                            <Text>类型</Text>
                            <Text>金额</Text>
                        </ListItem>
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
    }
};