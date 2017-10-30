/**
 * 交易主框架界面
 */
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    DrawerLayoutAndroid,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import HomeContainer from './HomeContainer';
import OrderContainer from './OrderContainer';
import MyContainer from './MyContainer';

const TAB_NORMAL_MARKET = require('../images/tab/index-gray.png');
const TAB_NORMAL_CHART = require('../images/tab/order-gray.png');
const TAB_NORMAL_MY = require('../images/tab/my-gray.png');

const TAB_PRESS_MARKET = require('../images/tab/index-red.png');
const TAB_PRESS_CHART = require('../images/tab/order-red.png');
const TAB_PRESS_MY = require('../images/tab/my-red.png');
import Common from '../util/constants';
class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
    render() {
        return (
                <TabNavigator
                    tabBarStyle={styles.tab}>
                    <TabNavigator.Item
                        title="乐享租"
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={styles.selectedTextStyle}
                        titleStyle={styles.textStyle}
                        renderIcon={() => <Image source={TAB_NORMAL_MARKET} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image source={TAB_PRESS_MARKET} style={styles.tabIcon}/>}
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <HomeContainer {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="订单"
                        selected={this.state.selectedTab === 'order'}
                        selectedTitleStyle={styles.selectedTextStyle}
                        titleStyle={styles.textStyle}
                        renderIcon={() => <Image source={TAB_NORMAL_CHART} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image source={TAB_PRESS_CHART} style={styles.tabIcon}/>}
                        onPress={() => this.setState({selectedTab: 'order'})}>
                        <OrderContainer {...this.props}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        title="我的"
                        selected={this.state.selectedTab === 'my'}
                        selectedTitleStyle={styles.selectedTextStyle}
                        titleStyle={styles.textStyle}
                        renderIcon={() => <Image source={TAB_NORMAL_MY} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image source={TAB_PRESS_MY} style={styles.tabIcon}/>}
                        onPress={() => this.setState({selectedTab: 'my'})}>
                        <MyContainer {...this.props}/>
                    </TabNavigator.Item>
                </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: Common.colors.gray1,
    },
    selectedTextStyle: {
        color: Common.colors.red,
    },
    tab: {
        height: 52,
        alignItems: 'center',
        backgroundColor: Common.colors.white,
    },
    tabIcon: {
        width: 25,
        height: 25,
    }
});

export default AppMain;

