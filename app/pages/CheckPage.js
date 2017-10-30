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
import CheckNameContainer from '../containers/CheckNameContainer'
import Toast from 'react-native-root-toast';
import {CheckCenter} from '../actions/orderActions'
export default class CheckPage extends Component {

    constructor(props) {
        super(props);
        // this.state = ({
        //     isError: false,
        //     isLoading: true,
        //     tabChange:'Android',
        //     dataSource: new ListView.DataSource({
        //         rowHasChanged: (row1, row2) => row1 !== row2
        //     }),
        //     // typeList: {}
        // })
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            let data={'pageNum':1,'pageSize':10};
            console.log('data===------------>'+JSON.stringify(data));
            dispatch(CheckCenter(data));
        });
    }
    render() {
        return (
            <View style={styles.container} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid>
                <NavigationBar
                    backIconHidden={false}
                    barTintColor={Common.colors.yellow3}
                    barStyle={styles.navbar}
                    title='订单受理'
                    titleColor={Common.colors.white}
                    backColor={Common.colors.white}
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}
                />

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => this._skipIntoAccountManage("订单")}>
                    <View style={{
                        backgroundColor: Common.colors.gray5,
                        borderRadius: 5,
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10
                    }}>

                        <View style={{
                            backgroundColor: Common.colors.white,
                            borderRadius: 5,
                            margin: 1,
                            paddingLeft: 10,
                            paddingRight: 10
                        }}>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                            }}>

                                <Image source={require('../images/other/icon_iphone8.png')} style={{
                                    width: 30,
                                    height: 60,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}/>
                                <View style={{flex:1}}>

                                    <Text style={{color:Common.colors.black,fontSize:20,marginLeft:10}}>IPhone8</Text>
                                    <View style={{flexDirection: 'row',alignItems:'center'}}>
                                        <Text style={{color:Common.colors.gray5,fontSize:12,marginLeft:10,marginTop:5}}>申请期限:</Text>
                                        <Text style={{backgroundColor:Common.colors.yellow2,paddingTop:3,paddingBottom:3,
                                            paddingLeft:5,paddingRight:5,color:Common.colors.white,fontSize:12,
                                            marginLeft:10,marginTop:5,borderRadius:5}}>14周</Text>
                                    </View>

                                </View>
                                <Text style={{fontSize: 12, color: Common.colors.red}}>
                                    认证中
                                </Text>
                            </View>

                            <View style={{backgroundColor: Common.colors.gray6, height: 1,marginTop:10}}/>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 15,
                                marginBottom: 10
                            }}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                                    <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                                        每期服务费率
                                    </Text>
                                    <Text style={{color: Common.colors.yellow3, fontSize: 12, marginTop: 5}}>
                                        0.66%
                                    </Text>
                                </View>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                                    <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                                        到期总还款(元)
                                    </Text>
                                    <Text style={{color: Common.colors.yellow3, fontSize: 12, marginTop: 5}}>
                                        555.00
                                    </Text>
                                </View>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                                    <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                                        每期总费用(元)
                                    </Text>
                                    <Text style={{color: Common.colors.yellow3, fontSize: 12, marginTop: 5}}>
                                        555.00
                                    </Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: Common.colors.gray6, height: 1, marginTop: 10}}/>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 15,
                            }}>
                                <Image source={require('../images/other/icon_seclect.png')}
                                       style={{padding:10,width: 25,
                                           height: 25,}}/>
                                <View style={{
                                    width:80,
                                    height: 1,
                                    backgroundColor: Common.colors.yellow2,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}/>
                                <Image source={require('../images/other/icon_going.png')}
                                       style={{padding:10,width: 25,
                                           height: 25,}}/>
                                <View style={{
                                    width:80,
                                    height: 1,
                                    backgroundColor: Common.colors.yellow2,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}/>
                                <Image source={require('../images/other/icon_seclect.png')}
                                       style={{padding:10,width: 25,
                                           height: 25,}}/>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 20
                            }}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                                    <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                                        提交申请
                                    </Text>
                                    <Text style={{color: Common.colors.yellow3, fontSize: 12, marginTop: 5}}>
                                        2017-10-23
                                    </Text>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                                    <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                                        信息认证中
                                    </Text>
                                    <Text style={{color: Common.colors.yellow3, fontSize: 12, marginTop: 5}}>
                                        2017-10-23
                                    </Text>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                                    <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                                        完成审核
                                    </Text>
                                    <Text style={{color: Common.colors.yellow3, fontSize: 12, marginTop: 5}}>
                                        2017-10-23
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    _skipIntoAccountManage(content) {
        Toast.show(content, {position: Toast.positions.CENTER});
        // this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
        //     name: 'RepaymentContainer',
        //     component: RepaymentContainer,
        //     passProps: {Title: content}// 传递的参数（可选）,{}里都是键值对  ps: test是关键字
        // })// push一个route对象到navigator中
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