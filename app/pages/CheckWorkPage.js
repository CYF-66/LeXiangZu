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
import ModalDropdown from '../components/ModalDropdown'

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];
const DEMO_OPTIONS_2 = [
    {"name": "Rex", "age": 30},
    {"name": "Mary", "age": 25},
    {"name": "John", "age": 41},
    {"name": "Jim", "age": 22},
    {"name": "Susan", "age": 52},
    {"name": "Brent", "age": 33},
    {"name": "Alex", "age": 16},
    {"name": "Ian", "age": 20},
    {"name": "Phil", "age": 24},
];
export default class CheckWorkPage extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isError: false,
            isLoading: true,
            dropdown_4_options: null,
            dropdown_4_defaultValue: 'loading...',
            dropdown_6_icon_heart: true,
        })
    }

    render() {
        return (
            <View style={styles.container} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid>
                <NavigationBar
                    backIconHidden={false}
                    barTintColor={Common.colors.yellow3}
                    barStyle={styles.navbar}
                    title='工作信息'
                    titleColor={Common.colors.white}
                    backColor={Common.colors.white}
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}
                    // actionName='提交'
                    // actionTextColor={Common.colors.white}
                    // actionFunc={() => {
                    //     Toast.show('提交', {position: Toast.positions.CENTER});
                    //     // this.props.navigator.push({
                    //     //     component: AboutPage
                    //     // })
                    // }}
                />
                <ScrollView
                    style={styles.container}>
                <View style={{flex:1}}>
                    <View style={[styles.formInput, styles.formInputSplit]}>
                        <Text
                            style={{fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            参加工作年限
                        </Text>
                        <TextInput
                            ref="login_name"
                            placeholder=''
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
                            单位名称(全称)
                        </Text>
                        <TextInput
                            ref="login_psw"
                            style={styles.loginInput}
                            // field.restrict = "0-9"
                            restrict="0-9"
                            multiline={false}
                            // defaultValue={this.state.accountPWD.substring(1,this.state.accountPWD.length-1)}
                            keyboardType={'default'}
                            secureTextEntry={false}
                            placeholder=''
                            underlineColorAndroid={'transparent'}
                            onChangeText={this.onChangePassword.bind(this)}/>
                    </View>
                    <View style={[styles.formInput, styles.formInputSplit]}>
                        <Text
                            style={{fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            单位固定电话
                        </Text>
                        <TextInput
                            ref="login_psw"
                            style={styles.loginInput}
                            // field.restrict = "0-9"
                            restrict="0-9"
                            multiline={false}
                            // defaultValue={this.state.accountPWD.substring(1,this.state.accountPWD.length-1)}
                            keyboardType={'default'}
                            secureTextEntry={false}
                            placeholder=''
                            underlineColorAndroid={'transparent'}
                            onChangeText={this.onChangePassword.bind(this)}/>
                    </View>
                    <View style={[styles.formInput, styles.formInputSplit]}>
                        <Text
                            style={{fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            公司详细地址
                        </Text>
                        <TextInput
                            ref="login_psw"
                            style={styles.loginInput}
                            // field.restrict = "0-9"
                            restrict="0-9"
                            multiline={false}
                            // defaultValue={this.state.accountPWD.substring(1,this.state.accountPWD.length-1)}
                            secureTextEntry={false}
                            keyboardType={'default'}
                            placeholder=''
                            underlineColorAndroid={'transparent'}
                            onChangeText={this.onChangePassword.bind(this)}/>
                    </View>
                    <View style={[styles.formInput, styles.formInputSplit]}>
                        <Text
                            style={{fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            单位性质
                        </Text>
                        <TextInput
                            ref="login_psw"
                            style={styles.loginInput}
                            // field.restrict = "0-9"
                            restrict="0-9"
                            multiline={false}
                            // defaultValue={this.state.accountPWD.substring(1,this.state.accountPWD.length-1)}
                            secureTextEntry={false}
                            keyboardType={'default'}
                            placeholder=''
                            underlineColorAndroid={'transparent'}
                            onChangeText={this.onChangePassword.bind(this)}/>
                    </View>
                    <View style={[styles.formInput, styles.formInputSplit]}>
                        <Text
                            style={{fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            当前职位
                        </Text>
                        <TextInput
                            ref="login_psw"
                            style={styles.loginInput}
                            // field.restrict = "0-9"
                            restrict="0-9"
                            multiline={false}
                            // defaultValue={this.state.accountPWD.substring(1,this.state.accountPWD.length-1)}
                            secureTextEntry={false}
                            keyboardType={'default'}
                            placeholder=''
                            underlineColorAndroid={'transparent'}
                            onChangeText={this.onChangePassword.bind(this)}/>
                    </View>
                    <View style={[styles.formInput, styles.formInputSplit]}>
                        <Text
                            style={{fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            个人月收入
                        </Text>
                        <TextInput
                            ref="login_psw"
                            style={styles.loginInput}
                            // field.restrict = "0-9"
                            restrict="0-9"
                            multiline={false}
                            keyboardType={'default'}
                            // defaultValue={this.state.accountPWD.substring(1,this.state.accountPWD.length-1)}
                            secureTextEntry={false}
                            placeholder=''
                            underlineColorAndroid={'transparent'}
                            onChangeText={this.onChangePassword.bind(this)}/>
                    </View>
                    <View style={[styles.formInput, styles.formInputSplit]}>
                        <Text
                            style={{fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            现居住详细地址
                        </Text>
                        <TextInput
                            ref="login_psw"
                            style={styles.loginInput}
                            // field.restrict = "0-9"
                            restrict="0-9"
                            multiline={false}
                            // defaultValue={this.state.accountPWD.substring(1,this.state.accountPWD.length-1)}
                            keyboardType={'default'}
                            secureTextEntry={false}
                            placeholder=''
                            underlineColorAndroid={'transparent'}
                            onChangeText={this.onChangePassword.bind(this)}/>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.loginBtn} onPress={this._next.bind(this)}>
                        <Text style={styles.loginText}>提交</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }

    _next() {
        Toast.show('提交', {position: Toast.positions.CENTER});
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
        borderBottomWidth: 1,
        borderBottomColor: Common.colors.bottomlinecolor,
    },
    loginInput: {
        height: 40,
        paddingLeft: 10,
        flex: 1,
        fontSize: 16,
        alignItems:'center',
        justifyContent:'center',
        // borderBottomWidth: 1,
        // borderBottomColor: Common.colors.bottomlinecolor,
    },

    loginBtn: {
        backgroundColor: Common.colors.yellow3,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        marginBottom:20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
    },
    loginText: {
        color: Common.colors.white,
        fontSize: 17,
    },

});