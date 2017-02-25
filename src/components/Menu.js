/**
 * Created by bitholic on 2017/2/25.
 */
'use strict';

import React, {Component} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {Container, Content, Card, CardItem, Text,} from 'native-base';

const {height, width} = Dimensions.get('window');

export default class Menu extends Component {
    render() {
        return (
            <Content>
                <Container style={styles.container}>
                    <Image source={require('../resources/logo.png')} style={styles.backgroundImage}>
                        <Text>USERNAME: Bitholic</Text>
                    </Image>
                </Container>
            </Content>
        )
    }
}

let styles = {
    container: {
        width: width * 0.75,
        height: height * 0.25,
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover', // or 'stretch'
    }
};