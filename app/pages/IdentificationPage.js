'use strict'
import React, {Component} from 'react'
import {
    View,
    ListView,
    RefreshControl,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'
//引入标题支持包
import NavigationBar from 'react-native-navigationbar'
import Toast from 'react-native-root-toast';
import Common from '../util/constants';
import CheckNameContainer from '../containers/CheckNameContainer'
import CheckSchoolContainer from '../containers/CheckSchoolContainer'


export default class  IdentificationPage extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isError: false,
            isLoading: true,
        })
    }

    render() {
        return (
            <View style={styles.container} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid>
                <NavigationBar
                    backIconHidden={false}
                    barTintColor={Common.colors.yellow3}
                    barStyle={styles.navbar}
                    title='我的认证'
                    titleColor={Common.colors.white}
                    backColor={Common.colors.white}
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}
                />
                <ScrollView
                    style={styles.container}>
                <View style={{flexDirection: 'row',height:200,backgroundColor:Common.colors.yellow3,}}>
                    <View style={{justifyContent:'center',marginLeft:20
                        }}>
                        <Text style={{color:Common.colors.white,fontSize:20}}>
                            借款产品
                        </Text>
                        <Text style={{color:Common.colors.white,fontSize:25,marginBottom:10,marginTop:10}}>
                            iphone8 plus
                        </Text>
                    </View>
                    <Image source={require('../images/other/icon_iph8plus.png')} style={{
                        width:80,
                        height:160,
                        marginLeft:20,
                        marginTop:10,
                        alignItems:'center',
                        justifyContent:'center'
                    }}/>
                </View>

                <View style={{flexDirection: 'row',paddingTop:20,paddingLeft:20,paddingRight:10,paddingBottom:10,backgroundColor:Common.colors.white, borderBottomColor: Common.colors.bottomlinecolor,
                    borderBottomWidth: 1}}>
                    <Text style={{color:Common.colors.black,fontSize:15}}>
                        认证信息
                    </Text>
                </View>
                <View style={styles.secondLine}>
                <View style={{flex: 1}}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this._skipIntoAccountManage("实名认证")}>
                        <View style={styles.secondLineItem}>

                            <Image source={require('../images/set/icon_renzheng.png')} style={{
                                width: 40,
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}/>
                            <Text style={styles.PayTitle}>实名认证</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this._skipIntoAccountManage("学历认证")}>
                        <View style={styles.secondLineItem}>
                            <Image source={require('../images/set/icon_xueli.png')} style={{
                                width: 40,
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}/>
                            <Text style={styles.PayTitle}>学历认证</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1}}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this._skipIntoAccountManage("工作信息")}>
                        <View style={styles.secondLineItem}>

                            <Image source={require('../images/set/icon_work.png')} style={{
                                width: 40,
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}/>
                            <Text style={styles.PayTitle}>工作信息</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
                <View style={styles.secondLine}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("手机认证")}>
                            <View style={styles.secondLineItem}>

                                <Image source={require('../images/set/icon_phone.png')} style={{
                                    width: 40,
                                    height: 40,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}/>
                                <Text style={styles.PayTitle}>手机认证</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("联系人认证")}>
                            <View style={styles.secondLineItem}>
                                <Image source={require('../images/set/icon_contack.png')} style={{
                                    width: 40,
                                    height: 40,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}/>
                                <Text style={styles.PayTitle}>联系人认证</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1}}/>
                </View>
                </ScrollView>
            </View>
        )
    }

    _skipIntoAccountManage(content) {
        Toast.show(content, {position: Toast.positions.CENTER});
        if(content=="实名认证"){
            this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                name:'CheckNameContainer',
                component: CheckNameContainer,
                // passProps: {contentData}// 传递的参数（可选）,{}里都是键值对  ps: test是关键字
            })
        }else if(content=="学历认证"){
            this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                name:'CheckSchoolContainer',
                component: CheckSchoolContainer,
                // passProps: {contentData}// 传递的参数（可选）,{}里都是键值对  ps: test是关键字CheckSchoolContainer
            })
        }else if(content=="工作信息"){

        }else if(content=="手机认证"){

        }else if(content=="联系人认证"){

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Common.colors.white,
    },
    secondLine: {
        backgroundColor: Common.colors.white,
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
        paddingBottom: 10,
        // borderBottomColor: Common.colors.bottomlinecolor,
        // borderBottomWidth: 1
    },
    secondLineItem: {
        backgroundColor: Common.colors.white,
        alignItems: 'center',
        // borderBottomColor: Common.colors.bottomlinecolor,
        // borderBottomWidth: 1
    },
    PayTitle: {
        marginLeft: 8,
        fontSize: 15,
        color: Common.colors.black,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Pay: {
        marginLeft: 15,
        marginTop: 10,
        color: Common.colors.red,
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderState: {
        flexDirection: 'row',
        alignItems: 'center',

    },
});