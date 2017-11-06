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
    InteractionManager
} from 'react-native'
//引入标题支持包
// import SetPage from 'SetPage'
import Common from '../util/constants';
import NavigationBar from 'react-native-navigationbar'
import Toast from 'react-native-root-toast';
import {CheckContact} from '../actions/myActions'
import ModalDropdown from '../components/ModalDropdown'
import Storage from '../util/Storage'
const  ONE_RELATIVE_OPTIONS = ['父亲', '母亲', '配偶', '儿子', '女儿', '朋友'];
const  TWO_RELATIVE_OPTIONS = ['父亲', '母亲', '配偶', '儿子', '女儿', '朋友'];
export default class CheckContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isError: false,
            isLoading: true,
            defaultValue:'请选择',
            onelinkman : '',
            onelinkrealation: '',
            onelinkphone:'',
            twolinkman : '',
            twolinkrealation: '',
            twolinkphone:'',
            // typeList: {}
        })
    }

    componentWillUpdate() {
        InteractionManager.runAfterInteractions(() => {
            const {checkReducer} = this.props;
            console.log('checkReducer.isCheckContact===------------>'+checkReducer.isCheckContact);
            if (checkReducer.isCheckContact) {
                this.props.navigator.popToTop();
                checkReducer.isCheckContact=false;
            }
        });

    }
    render() {
        return (
            <View style={styles.container} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid>
                <NavigationBar
                    backIconHidden={false}
                    barTintColor={Common.colors.yellow3}
                    barStyle={styles.navbar}
                    title='联系人信息'
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
                <Text style={{marginLeft:20,color:Common.colors.gray1,fontSize:15,marginTop:20, borderBottomWidth: 1,
                    borderBottomColor: Common.colors.bottomlinecolor,paddingBottom:10}}>
                    联系人1
                </Text>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Image source={require('../images/set/icon_contact.png')}
                           style={{width: 25, height: 25, resizeMode: 'contain',
                               alignItems:'center'}}/>
                    <Text
                        style={{fontSize:16,color:Common.colors.red,
                            alignItems:'center',justifyContent:'center',marginLeft:5}}>
                        *
                    </Text>
                    <Text
                        style={{flex:1,fontSize:16,color:Common.colors.gray1,
                            alignItems:'center',justifyContent:'center'}}>
                        直系亲属姓名
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
                        onChangeText={this.onChangeOneName.bind(this)}/>
                </View>
                <View style={[styles.formInput1, styles.formInputSplit]}>
                    <Text
                        style={{fontSize:16,color:Common.colors.red,
                            alignItems:'center',justifyContent:'center'}}>
                        *
                    </Text>
                    <Text
                           style={{flex:1,fontSize:16,color:Common.colors.gray1,
                               alignItems:'center',justifyContent:'center'}}>
                        与您的关系
                    </Text>
                    <View style={{}}>
                        <ModalDropdown style={{
                            alignSelf: 'flex-end', backgroundColor: Common.colors.white}}
                                       textStyle={{
                                           fontSize: 12,
                                           color: Common.colors.black,
                                           textAlign: 'center',
                                           textAlignVertical: 'center',}}
                                       dropdownStyle={{ marginTop:0,borderColor: Common.colors.gray1,
                                           borderWidth: 1,
                                           borderRadius: 3,}}
                                       dropdownTextStyle={{fontSize: 12,color:Common.colors.black}}
                                       dropdownTextHighlightStyle={{fontSize: 12,color:Common.colors.red}}
                                       onSelect={(idx, value) => this._dropdown_1_onSelect(idx, value)}
                                       options={ONE_RELATIVE_OPTIONS}
                                       defaultValue={this.state.defaultValue}
                        />
                    </View>
                </View>
                <View style={[styles.formInput1, styles.formInputSplit]}>
                    <Text
                        style={{fontSize:16,color:Common.colors.red,
                            alignItems:'center',justifyContent:'center'}}>
                        *
                    </Text>
                    <Text
                        style={{flex:1,fontSize:16,color:Common.colors.gray1,
                            alignItems:'center',justifyContent:'center'}}>
                        手机号
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
                        placeholder=''
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onChangeOnePhone.bind(this)}/>
                </View>
                <Text style={{marginLeft:20,color:Common.colors.gray1,fontSize:15,marginTop:30,paddingBottom:10, borderBottomWidth: 1,
                    borderBottomColor: Common.colors.bottomlinecolor,}}>
                    联系人2
                </Text>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Image source={require('../images/set/icon_contact.png')}
                           style={{width: 25, height: 25, resizeMode: 'contain',
                               alignItems:'center'}}/>

                    <Text
                        style={{fontSize:16,color:Common.colors.red,
                            alignItems:'center',justifyContent:'center',marginLeft:5}}>
                        *
                    </Text>
                    <Text
                        style={{flex:1,fontSize:16,color:Common.colors.gray1,
                            alignItems:'center',justifyContent:'center',marginLeft:5}}>
                        直系亲属姓名
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
                        onChangeText={this.onChangeTwoName.bind(this)}/>
                </View>
                <View style={[styles.formInput1, styles.formInputSplit]}>
                    <Text
                        style={{fontSize:16,color:Common.colors.red,
                            alignItems:'center',justifyContent:'center'}}>
                        *
                    </Text>
                    <Text
                           style={{flex:1,fontSize:16,color:Common.colors.gray1,
                               alignItems:'center',justifyContent:'center'}}>
                        与您的关系
                    </Text>
                    <View style={{}}>
                        <ModalDropdown style={{
                            alignSelf: 'flex-end', backgroundColor: Common.colors.white}}
                                       textStyle={{
                                           fontSize: 12,
                                           color: Common.colors.black,
                                           textAlign: 'center',
                                           textAlignVertical: 'center',}}
                                       dropdownStyle={{ marginTop:0,borderColor: Common.colors.gray1,
                                           borderWidth: 1,
                                           borderRadius: 3,}}
                                       dropdownTextStyle={{fontSize: 12,color:Common.colors.black}}
                                       dropdownTextHighlightStyle={{fontSize: 12,color:Common.colors.red}}
                                       onSelect={(idx, value) => this._dropdown_2_onSelect(idx, value)}
                                       options={TWO_RELATIVE_OPTIONS}
                                       defaultValue={this.state.defaultValue}
                        />
                    </View>
                </View>
                <View style={[styles.formInput1, styles.formInputSplit]}>
                    <Text
                        style={{fontSize:16,color:Common.colors.red,
                            alignItems:'center',justifyContent:'center'}}>
                        *
                    </Text>
                    <Text
                        style={{flex:1,fontSize:16,color:Common.colors.gray1,
                            alignItems:'center',justifyContent:'center'}}>
                        手机号
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
                        placeholder=''
                        underlineColorAndroid={'transparent'}
                        onChangeText={this.onChangeTwoPhone.bind(this)}/>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.loginBtn} onPress={this._submit.bind(this)}>
                    <Text style={styles.loginText}>提交</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }

    _submit() {
        // Toast.show('提交', {position: Toast.positions.CENTER});
        let {onelinkman, onelinkrealation,onelinkphone,twolinkman,twolinkrealation,twolinkphone} = this.state;
        if(onelinkman!=''&&onelinkphone!=''&&twolinkman!=''&&twolinkphone!=''&&onelinkrealation!=''&&twolinkrealation!=''){
            var onerelative=parseInt(onelinkrealation)+1;
            var tworelative=parseInt(twolinkrealation)+1;
        }else{
            Toast.show('请填写完整联系人信息', {position: Toast.positions.CENTER});
            return;
        }
        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            // dispatch(GetOneKeyRegister(isLoading));
            //11010497   cks69t
            this.state.isLoading = true;
            let data = {'onelinkman ': onelinkman , 'onelinkrealation': onerelative,'onelinkcell':onelinkphone,
                'twolinkman ':twolinkman ,'twolinkrealation':tworelative,'twolinkcell':twolinkphone};
            console.log('data===------------>'+JSON.stringify(data));
            // let data={'name':'13788957291','identity':'000000'};
            dispatch(CheckContact(data, this.state.isLoading));
        });
    }

    _dropdown_1_onSelect(idx, value) {
        // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
        console.log('idx===------------>'+idx);
        console.log('value===------------>'+value);
        this.setState({
            onelinkrealation:idx
        })
    }
    _dropdown_2_onSelect(idx, value) {
        // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
        console.log('idx===------------>'+idx);
        console.log('value===------------>'+value);
        this.setState({
            twolinkrealation:idx
        })
    }
    onChangeOneName(text) {
        this.state.onelinkman  = text;
    }
    onChangeOnePhone(text) {
        this.state.onelinkphone  = text;
    }
    onChangeTwoName(text) {
        this.state.twolinkman  = text;
    }
    onChangeTwoPhone(text) {
        this.state.twolinkphone  = text;
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
    formInput1: {
        flexDirection: 'row',
        height: 60,
        padding: 20,
        marginLeft:30,
        justifyContent:'center',
        alignItems:'center'
    },
    formInputSplit1: {
        borderBottomWidth: 1,
        borderBottomColor: Common.colors.bottomlinecolor,
    },
    loginInput: {
        height: 40,
        paddingLeft: 10,
        flex: 1,
        fontSize: 16,
        textAlign: 'right',
        // borderBottomWidth: 1,
        // borderBottomColor: Common.colors.bottomlinecolor,
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