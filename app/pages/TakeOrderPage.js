'use strict'
import React, {Component} from 'react'
import {
    View,
    ScrollView,
    RefreshControl,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
    InteractionManager
} from 'react-native'
//引入标题支持包
// import SetPage from 'SetPage'
import Common from '../util/constants';
import NavigationBar from 'react-native-navigationbar'
import Toast from 'react-native-root-toast';
import {TakeOrder} from '../actions/orderActions'
export default class TakeOrderPage extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isError: false,
            isLoading: true,
            isSuccess: false,
            title: '申请确认'
            // typeList: {}
        })
    }

    _renderSubmit() {
        return (
            <View style={{flex: 1, marginTop: 15, paddingLeft: 20, paddingRight: 20}}>
                <Text style={{
                    paddingBottom: 10,
                    paddingTop: 10,
                    color: Common.colors.black,
                    fontSize: 18,
                    borderBottomColor: Common.colors.bottomlinecolor,
                    borderBottomWidth: 1
                }}>
                    借款详情
                </Text>
                <View style={{
                    flexDirection: 'row', paddingTop: 10,
                }}>
                    <Text style={{fontSize: 15, color: Common.colors.gray5}}>
                        借款产品
                    </Text>
                    <Text style={{fontSize: 15, color: Common.colors.gray1, marginLeft: 20}}>
                        iphone
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row', paddingTop: 10,
                }}>
                    <Text style={{fontSize: 15, color: Common.colors.gray5}}>
                        借款期限
                    </Text>
                    <Text style={{fontSize: 15, color: Common.colors.gray1, marginLeft: 20}}>
                        10周
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row', paddingTop: 10,
                }}>
                    <Text style={{fontSize: 15, color: Common.colors.gray5}}>
                        每月还款
                    </Text>
                    <Text style={{fontSize: 15, color: Common.colors.gray1, marginLeft: 20}}>
                        ￥560.00
                    </Text>
                    <Text style={{fontSize: 15, color: Common.colors.gray5}}>
                        (含￥60.00服务费)
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row', paddingTop: 10,
                }}>
                    <Text style={{fontSize: 15, color: Common.colors.gray5}}>
                        首还款日
                    </Text>
                    <Text style={{fontSize: 15, color: Common.colors.gray1, marginLeft: 20}}>
                        2017-11-11
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row', paddingTop: 10,
                }}>
                    <Text style={{fontSize: 15, color: Common.colors.gray5}}>
                        周还款日
                    </Text>
                    <Text style={{fontSize: 15, color: Common.colors.gray1, marginLeft: 20}}>
                        周日
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row', paddingTop: 10, borderBottomColor: Common.colors.bottomlinecolor,
                    borderBottomWidth: 1, paddingBottom: 5
                }}>
                    <Text style={{fontSize: 15, color: Common.colors.gray5}}>
                        还款说明
                    </Text>
                    <Text style={{fontSize: 15, color: Common.colors.gray1, marginLeft: 20}}>
                        您需要在还款日前进行还款，否则将产生逾期费；
                    </Text>
                </View>

                <Text style={{
                    paddingBottom: 10,
                    paddingTop: 10,
                    color: Common.colors.black,
                    fontSize: 18,
                    borderBottomColor: Common.colors.bottomlinecolor,
                    borderBottomWidth: 1
                }}>
                    借款人信息
                </Text>

                <View style={{
                    flexDirection: 'row', paddingTop: 10, marginTop: 10
                }}>
                    <Text style={{fontSize: 15, color: Common.colors.gray5}}>
                        姓名
                    </Text>
                    <Text style={{fontSize: 15, color: Common.colors.gray1, marginLeft: 20}}>
                        张三
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row', paddingTop: 10,
                }}>
                    <Text style={{fontSize: 15, color: Common.colors.gray5}}>
                        手机号
                    </Text>
                    <Text style={{fontSize: 15, color: Common.colors.gray1, marginLeft: 20}}>
                        16888888888
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row', paddingTop: 30, paddingBottom: 10, borderRadius: 5, alignItems: 'center',
                }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this._skipIntoAccountManage("同意")}>
                        <Image source={require('../images/other/icon_seclect.png')}
                               style={{
                                   padding: 10, width: 20,
                                   height: 20,
                               }}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 12, color: Common.colors.gray1, marginLeft: 5}}>
                        同意
                    </Text>
                    <Text style={{fontSize: 12, color: Common.colors.yellow1, marginLeft: 5}}>
                        《贷款协议》
                    </Text>
                    <Text style={{fontSize: 12, color: Common.colors.yellow1, marginLeft: 5}}>
                        《平台服务协议》
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this._takeOrder("确认借款")}>
                    <View style={{
                        flexDirection: 'row', paddingTop: 10, backgroundColor: Common.colors.yellow3, paddingBottom: 10,
                        justifyContent: 'center', alignItems: 'center', borderRadius: 5
                    }}>
                        <Text style={{fontSize: 18, color: Common.colors.white}}>
                            确认借款
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    _renderSuccess() {

        return (
            <View style={{backgroundColor: Common.colors.white, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../images/other/icon_deal.jpg')} style={{
                    height: 300,
                    width: 300,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}/>

                <View style={{flexDirection: 'row', backgroundColor: Common.colors.gray5, width: 150}}>
                    <Text style={{
                        flex: 1,
                        margin: 1,
                        backgroundColor: Common.colors.white,
                        paddingTop: 5,
                        paddingBottom: 5,
                        fontSize: 15,
                        color: Common.colors.gray1,
                        textAlign: 'center'
                    }}>
                        产品'
                    </Text>
                    <Text style={{
                        flex: 2,
                        marginTop: 1,
                        marginBottom: 1,
                        marginRight: 1,
                        backgroundColor: Common.colors.white,
                        paddingTop: 5,
                        paddingBottom: 5,
                        fontSize: 15,
                        color: Common.colors.gray1,
                        textAlign: 'center'
                    }}>
                        iphone8
                    </Text>
                </View>
                <View style={{flexDirection: 'row', backgroundColor: Common.colors.gray5, width: 150}}>
                    <Text style={{
                        flex: 1,
                        marginLeft: 1,
                        marginRight: 1,
                        backgroundColor: Common.colors.white,
                        paddingTop: 5,
                        paddingBottom: 5,
                        fontSize: 15,
                        color: Common.colors.gray1,
                        textAlign: 'center'
                    }}>
                        金额
                    </Text>
                    <Text style={{
                        flex: 2,
                        marginBottom: 1,
                        marginRight: 1,
                        backgroundColor: Common.colors.white,
                        paddingTop: 5,
                        paddingBottom: 5,
                        fontSize: 15,
                        color: Common.colors.yellow3,
                        textAlign: 'center'
                    }}>
                        5500元
                    </Text>
                </View>
            </View>
        )
    }

    render() {

        return (
            <View style={styles.container} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid>
                <NavigationBar
                    backIconHidden={false}
                    barTintColor={Common.colors.yellow3}
                    barStyle={styles.navbar}
                    title={this.state.title}
                    titleColor={Common.colors.white}
                    backColor={Common.colors.white}
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}
                />
                <ScrollView
                    style={styles.container}>
                    {this.state.isSuccess ? this._renderSuccess() : this._renderSubmit()}
                </ScrollView>
            </View>
        )
    }

    _takeOrder(content) {
        // Toast.show(content, {position: Toast.positions.CENTER});
        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            let data={'product_id':''};
            console.log('data===------------>'+JSON.stringify(data));
            dispatch(TakeOrder(data));
        });

        this.setState({
            isSuccess: true,
            title: '申请已受理'
        })
        // this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
        //     name:'SetContainer',
        //     component: SetContainer,
        //     // passProps: {contentData}// 传递的参数（可选）,{}里都是键值对  ps: test是关键字
        // })// push一个route对象到navigator中
    }
    _skipIntoAccountManage(content) {
        Toast.show(content, {position: Toast.positions.CENTER});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Common.colors.white,
    },
    account: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: Common.colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        top: 25,
    },
    drawerheadtext: {
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 8,
        color: Common.colors.black,
        fontSize: 18,
        textAlign: 'left'
    },
    drawertext: {
        marginLeft: 8,
        color: Common.colors.black,
        fontSize: 18,
        textAlign: 'left'
    },
    func: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: Common.colors.white,
    }
});