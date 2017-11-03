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
import {CheckPhone} from '../actions/myActions'
import CheckContactContainer from '../containers/CheckContactContainer'
import TakeOrderContainer from '../containers/TakeOrderContainer'
import Storage from '../util/Storage'
export default class CheckPhonePage extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isError: false,
            isLoading: true,
            phone: '',
            // typeList: {}
        })
    }

    // componentWillUpdate() {
    //     InteractionManager.runAfterInteractions(() => {
    //         const {checkReducer} = this.props;
    //         console.log('checkReducer.isCheckPhone===------------>'+checkReducer.isCheckPhone);
    //         if (checkReducer.isCheckPhone) {
    //             this.props.navigator.popToTop();
    //             checkReducer.isCheckPhone=false;
    //         }
    //     });
    //
    // }
    render() {
        return (
            <View style={styles.container} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid>
                <NavigationBar
                    backIconHidden={false}
                    barTintColor={Common.colors.yellow3}
                    barStyle={styles.navbar}
                    title='手机号认证'
                    titleColor={Common.colors.white}
                    backColor={Common.colors.white}
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}
                    actionName='下一步'
                    actionTextColor={Common.colors.white}
                    actionFunc={() => {

                        this._check();
                    }}
                />
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Text
                           style={{fontSize:16,color:Common.colors.gray1,
                               alignItems:'center',justifyContent:'center'}}>
                        手机号
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
                        onChangeText={this.onChangePhone.bind(this)}/>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.loginBtn} onPress={this._submit.bind(this)}>
                    <Text style={styles.loginText}>提交</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _submit() {
        // Toast.show('提交', {position: Toast.positions.CENTER});
        let {phone} = this.state;

        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            // dispatch(GetOneKeyRegister(isLoading));
            //11010497   cks69t
            this.state.isLoading = true;
            let data = {'phone': phone};
            console.log('data===------------>'+JSON.stringify(data));
            // let data={'name':'13788957291','identity':'000000'};
            dispatch(CheckPhone(data, this.state.isLoading));
        });
    }
    onChangePhone(text) {
        this.state.phone = text;
    }

    _check(){
                Storage.get('contact').then((value) => {
                    if(value){
                        this.props.navigator.pop()
                    }else{
                        this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                            name:'CheckContactContainer',
                            component: CheckContactContainer,
                            // passProps: {contentData}// 传递的参数（可选）,{}里都是键值对  ps: test是关键字CheckSchoolContainer
                        })
                        return;
                    }
                });
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
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
    },
    loginText: {
        color: Common.colors.white,
        fontSize: 17,
    },

});