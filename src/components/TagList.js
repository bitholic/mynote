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

export default class TagList extends Component {
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
                        <Container style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Title style={globalStyles.headerText}>选择标签 </Title>
                            <Icon name='ios-pricetags-outline' style={{color: '#fff', fontSize: 16}}/>
                        </Container>
                        </Body>
                        <Right></Right>
                    </Header>
                    <Content>
                        <Grid>
                            <Row style={styles.padding}>
                                <Col style={styles.layout}>
                                    <Icon name='ios-restaurant'/>
                                    <Text>吃饭</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-pizza'/>
                                    <Text>零食</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-pint'/>
                                    <Text>饮料</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='md-color-palette'/>
                                    <Text>化妆品</Text>
                                </Col>
                            </Row>
                            <Row style={styles.padding}>
                                <Col style={styles.layout}>
                                    <Icon name='ios-nutrition'/>
                                    <Text>水果</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-car'/>
                                    <Text>车费</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-film'/>
                                    <Text>电影</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-shirt'/>
                                    <Text>服装</Text>
                                </Col>
                            </Row>
                            <Row style={styles.padding}>
                                <Col style={styles.layout}>
                                    <Icon name='ios-call'/>
                                    <Text>话费</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-boat'/>
                                    <Text>税务</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-phone-portrait'/>
                                    <Text>电子设备</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-medkit'/>
                                    <Text>医药</Text>
                                </Col>
                            </Row>
                            <Row style={styles.padding}>
                                <Col style={styles.layout}>
                                    <Icon name='ios-home'/>
                                    <Text>房租</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-person'/>
                                    <Text>理发</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='book'/>
                                    <Text>书籍</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-laptop'/>
                                    <Text>网费</Text>
                                </Col>
                            </Row>
                            <Row style={styles.padding}>
                                <Col style={styles.layout}>
                                    <Icon name='ios-contacts'/>
                                    <Text>交际</Text>
                                </Col>
                                <Col style={styles.layout}>
                                    <Icon name='ios-more'/>
                                    <Text>其它</Text>
                                </Col>
                                <Col>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Grid>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}

const styles = {
    layout: {
        alignItems: 'center',
    },
    padding: {
        paddingVertical: 10,
    }
};
