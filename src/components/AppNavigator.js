/**
 * Created by bitholic on 2017/2/19.
 */
import React, {Component} from 'react';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Text,
    Body, Left, Right, StyleProvider,
} from 'native-base';
import getTheme from '../themes/components';
import myTheme from '../themes/myTheme';

/**
 * 记账类型：ios-pricetags
 *      日用品：
 *      吃饭：ios-restaurant
 *      水果：
 *      饮料：ios-cafe
 *      零食：ios-pizza
 *      化妆品：md-color-palette
 *      理发:
 *      书籍：book
 *      服装：ios-shirt
 *      税务：ios-boat
 *      丢钱了：
 *      电子设备花费：ios-phone-portrait
 *      医药费：ios-medkit
 *      电影费用：ios-film
 *      车费： ios-car
 *      话费： ios-call
 *      网上费用：ios-laptop
 *      交际费用：ios-contacts
 *      房租： ios-home
 *      其它:
 */

export default class AppNavigator extends Component {
    render() {
        const {selectedTab, tab} = this.props;
        return (
            <StyleProvider style={getTheme(myTheme)}>
                <Container>
                    {this._renderTabContent(selectedTab)}
                    <Content>
                        <Icon name='ios-restaurant'/>
                        <Text>吃饭</Text>
                        <Icon name='ios-cafe'/>
                        <Text>饮料</Text>
                        <Icon name='ios-pizza'/>
                        <Text>零食</Text>
                        <Icon name='md-color-palette'/>
                        <Text>化妆品</Text>
                        <Text>理发</Text>
                        <Icon name='book'/>
                        <Text>书籍</Text>
                        <Icon name='ios-shirt'/>
                        <Text>服装</Text>
                        <Icon name='ios-boat'/>
                        <Text>税务</Text>
                        <Text>丢钱</Text>
                        <Icon name='ios-phone-portrait'/>
                        <Text>电子设备</Text>
                        <Icon name='ios-medkit'/>
                        <Text>医药</Text>
                        <Icon name='ios-film'/>
                        <Text>电影</Text>
                        <Icon name='ios-car'/>
                        <Text>车费</Text>
                        <Icon name='ios-call'/>
                        <Text>话费</Text>
                        <Icon name='ios-laptop'/>
                        <Text>网费</Text>
                        <Icon name='ios-contacts'/>
                        <Text>交际</Text>
                        <Icon name='ios-home'/>
                        <Text>房租</Text>
                        <Text>其它</Text>
                    </Content>

                    <Footer >
                        <FooterTab>
                            <Button active={selectedTab === 'home'} onPress={() => tab('home')}>
                                <Icon name='ios-apps'/>
                                <Text>首页</Text>
                            </Button>
                            <Button active={selectedTab === 'note'} onPress={() => tab('note')}>
                                <Icon name='ios-paper'/>
                                <Text>纪事</Text>
                            </Button>
                            <Button active={selectedTab === 'bill'} onPress={() => tab('bill')}>
                                <Icon name='logo-yen'/>
                                <Text>记账</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        );
    }

    _renderTabContent(selectedTab) {
        switch (selectedTab) {
            case 'home':
                return (
                    <Header>
                        <Body>
                        <Title>首页</Title>
                        </Body>
                    </Header>
                );
            case 'note':
                return (
                    <Header>
                        <Body>
                        <Title>纪事</Title>
                        </Body>
                    </Header>
                );
            case 'bill':
                return (
                    <Header>
                        <Body>
                        <Title>记账</Title>
                        </Body>
                    </Header>
                );
        }
    }
};