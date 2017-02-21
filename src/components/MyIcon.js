/**
 * Created by bitholic on 2017/2/21.
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import myTheme from '../themes/myTheme';
import mapper from '../utils/myFontMapper';

export default class MyIcon extends Component {
    render() {
        return (
            <Text style={styles.myIcon}>{mapper(this.props.name)}</Text>
        )
    };
}

const styles = StyleSheet.create({
    myIcon: {
        color: '#000',
        fontFamily: 'iconfont',
        fontSize: myTheme.iconFontSize,
    }
});