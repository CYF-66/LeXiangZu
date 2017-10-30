'use strict'
import React, {Component} from 'react'
import {
    View,
    ScrollView,
    RefreshControl,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native'
//引入标题支持包
// import SetPage from 'SetPage'
import Common from '../util/constants';
import NavigationBar from 'react-native-navigationbar'
import Toast from 'react-native-root-toast';
import IdentificationContainer from '../containers/IdentificationContainer'

export default class CheckNamePage extends Component {

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

    render() {
        return (
            <View style={styles.container} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid>
                <NavigationBar
                    backIconHidden={false}
                    barTintColor={Common.colors.yellow3}
                    barStyle={styles.navbar}
                    title='实名认证'
                    titleColor={Common.colors.white}
                    backColor={Common.colors.white}
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}
                    actionName='提交'
                    actionTextColor={Common.colors.white}
                    actionFunc={() => {
                        Toast.show('提交', {position: Toast.positions.CENTER});
                        // this.props.navigator.push({
                        //     component: AboutPage
                        // })
                    }}
                />
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Text
                           style={{fontSize:16,color:Common.colors.gray1,
                               alignItems:'center',justifyContent:'center'}}>
                        真实姓名
                    </Text>
                    <TextInput
                        ref="login_name"
                        placeholder='姓名'
                        restrict="^."
                        maxLength={11}
                        editable={true}
                        keyboardType='default'
                        multiline={false}
                        // defaultValue={this.state.account.substring(1,this.state.account.length-1)}
                        underlineColorAndroid={'transparent'}
                        // field.restrict = "0-9"
                        style={styles.loginInput}
                        onChangeText={this.onChangeMobile.bind(this)}/>
                </View>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Text
                        style={{fontSize:16,color:Common.colors.gray1,
                            alignItems:'center',justifyContent:'center'}}>
                        身份证号
                    </Text>
                    <TextInput
                        ref="login_psw"
                        style={styles.loginInput}
                        // field.restrict = "0-9"
                        restrict="0-9"
                        multiline={false}
                        // defaultValue={this.state.accountPWD.substring(1,this.state.accountPWD.length-1)}
                        keyboardType={'numeric'}
                        secureTextEntry={false}
                        placeholder='密码'
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onChangePassword.bind(this)}/>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.loginBtn} onPress={this._next.bind(this)}>
                    <Text style={styles.loginText}>下一步</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _next() {
        Toast.show('下一步', {position: Toast.positions.CENTER});
    }
    onChangeMobile(text) {
        // this.state.account = text;
    }

    onChangePassword(text) {
        // this.state.accountPWD = text;
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
    },
    formInput: {
        flexDirection: 'row',
        height: 60,
        padding: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    formInputSplit: {
        // borderBottomWidth: 1,
        // borderBottomColor: Common.colors.bottomlinecolor,
    },
    loginInput: {
        height: 40,
        paddingLeft: 10,
        flex: 1,
        fontSize: 16,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth: 1,
        borderBottomColor: Common.colors.bottomlinecolor,
    },

    loginBtn: {
        backgroundColor: Common.colors.yellow3,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
    },
    loginText: {
        color: Common.colors.white,
        fontSize: 17,
    },

});