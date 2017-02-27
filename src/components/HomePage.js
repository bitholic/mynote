/**
 * Created by bitholic on 2017/2/23.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {
    Container, Header, Title, Item, Input, Content, Footer, FooterTab, Icon, Button, Text,
    Body, Left, Right, StyleProvider, ListItem,
} from 'native-base';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            watchID: undefined,
            initialPosition: 'unknown',
            lastPosition: 'unknown',
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let initialPosition = JSON.stringify(position);
                this.setState({initialPosition})
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        let watchID = navigator.geolocation.watchPosition((position) => {
            let lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
        this.setState({watchID});
    }

    componentWillUnMount() {
        navigator.geolocation.clearWatch(this.state.watchID);
    }

    render() {
        return (
            <Content>
                <Text>Initial position: </Text>
                <Text>{this.state.initialPosition}</Text>
                <Text>Current position: </Text>
                <Text>{this.state.lastPosition}</Text>
            </Content>
        )
    }
}