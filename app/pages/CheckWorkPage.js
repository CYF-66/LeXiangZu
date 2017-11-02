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

const  WORK_YEAR_OPTIONS = ['0~6个月', '6~12个月', '1~3年', '3~5年', '5~8年', '8年以上'];
const WORK_STATE_OPTIONS = ['在职', '自由职业', '其他'];
const CURRENT_YEAR_OPTIONS = ['0~6个月', '6~12个月', '1~3年', '3~5年', '5~8年', '8年以上'];
const COMPANY_SORT_OPTIONS = ['机关/事业单位', '国有企业', '上市公司', '民营/私营企业', '合资/外资'];
const JOB_OPTIONS = ['IT/互联网', '金融', '制造业', '教育/医疗等事业', '交通物流通讯','贸易类行业','服务类行业','其他'];
const INCOME_OPTIONS = ['2000以下', '2000-3000', '3000-5000', '5000-8000', '8000以上'];
export default class CheckWorkPage extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isError: false,
            isLoading: true,
            workYear_defaultValue: '请选择',
            workState_defaultValue: '请选择',
            companySort_defaultValue: '请选择',
            job_defaultValue: '请选择',
            income_defaultValue: '请选择',
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
                    <View style={{flexDirection:'row',paddingLeft:20,paddingTop:20,paddingBottom:20,paddingRight:20,
                        justifyContent:'center',
                        alignItems:'center',borderBottomWidth: 1,
                        borderBottomColor: Common.colors.bottomlinecolor,}}>
                        <Text
                            style={{flex:1,fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            参加工作年限
                        </Text>
                        <View style={{}}>
                            <ModalDropdown style={{
                                top: 0,
                                right: 10,}}
                                           options={WORK_YEAR_OPTIONS}
                                           defaultValue={this.state.workYear_defaultValue}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection:'row',paddingLeft:20,paddingTop:20,paddingBottom:20,paddingRight:20,
                        justifyContent:'center',
                        alignItems:'center',borderBottomWidth: 1,
                        borderBottomColor: Common.colors.bottomlinecolor,}}>
                        <Text
                            style={{flex:1,fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            工作状态
                        </Text>
                        <View style={{}}>
                            <ModalDropdown style={{
                                top: 0,
                                right: 10,}}
                                           options={WORK_STATE_OPTIONS}
                                           defaultValue={this.state.workState_defaultValue}
                            />
                        </View>
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
                    <View style={{flexDirection:'row',paddingLeft:20,paddingTop:20,paddingBottom:20,paddingRight:20,
                        justifyContent:'center',
                        alignItems:'center',borderBottomWidth: 1,
                        borderBottomColor: Common.colors.bottomlinecolor,}}>
                        <Text
                            style={{flex:1,fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            单位性质
                        </Text>
                        <View style={{}}>
                            <ModalDropdown style={{
                                top: 0,
                                right: 10,}}
                                           options={COMPANY_SORT_OPTIONS}
                                           defaultValue={this.state.companySort_defaultValue}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection:'row',paddingLeft:20,paddingTop:20,paddingBottom:20,paddingRight:20,
                        justifyContent:'center',
                        alignItems:'center',borderBottomWidth: 1,
                        borderBottomColor: Common.colors.bottomlinecolor,}}>
                        <Text
                            style={{flex:1,fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            当前职业
                        </Text>
                        <View style={{}}>
                            <ModalDropdown style={{
                                top: 0,
                                right: 10,}}
                                           options={JOB_OPTIONS}
                                           defaultValue={this.state.job_defaultValue}
                            />
                        </View>
                    </View>
                    <View style={{flexDirection:'row',paddingLeft:20,paddingTop:20,paddingBottom:20,paddingRight:20,
                        justifyContent:'center',
                        alignItems:'center',borderBottomWidth: 1,
                        borderBottomColor: Common.colors.bottomlinecolor,}}>
                        <Text
                            style={{flex:1,fontSize:16,color:Common.colors.gray1,
                                alignItems:'center',justifyContent:'center'}}>
                            当前月收入
                        </Text>
                        <View style={{}}>
                            <ModalDropdown style={{
                                top: 0,
                                right: 10,}}
                                           options={INCOME_OPTIONS}
                                           defaultValue={this.state.income_defaultValue}
                            />
                        </View>
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