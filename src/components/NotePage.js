/**
 * Created by bitholic on 2017/2/22.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {
    Container, Header, Title, Item, Input, Content, Footer, FooterTab, Icon, Button, Text,
    Body, Left, Right, StyleProvider, ListItem,
} from 'native-base';

export default class NotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localText: '',
            text: 'nothing at all.',
        }
    }

    render() {
        return (
            <Content>
                <Text>{this.state.text}</Text>
                <Item>
                    <Input onChangeText={(text) => this.setState({text: text})}/>
                </Item>
                <Button light onPress={() => {
                    storage.save({
                        key: 'devtest',
                        rawData: {
                            text: this.state.text,
                        }
                    })
                }}>
                    <Text>save to local</Text>
                </Button>
                <Button light onPress={() => {
                    storage.load({
                        key: 'devtest'
                    }).then(ret => {
                        this.setState({localText: ret.text});
                    }).catch(err => {
                        this.setState({localText: err.message});
                    })
                }}>
                    <Text>load from local</Text>
                </Button>
                <Button light onPress={() => {
                    storage.remove({key: 'devtest'});
                    storage.load({
                        key: 'devtest'
                    }).then(ret => {
                        this.setState({localText: ret.text});
                    }).catch(err => {
                        this.setState({localText: err.message});
                    })
                }}>
                    <Text>delete all local data</Text>
                </Button>
                <Text>{this.state.localText}</Text>
            </Content>
        )
    }
}