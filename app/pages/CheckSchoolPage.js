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
import ImagePicker from 'react-native-image-crop-picker';
import IdentificationContainer from '../containers/IdentificationContainer'
import Storage from '../util/Storage'
import DialogSelected from '../components/alertSelected';

const selectedArr = ["拍照", "相册"];
export default class CheckSchoolPage extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isError: false,
            isLoading: true,
            avatarSource: require('../images/set/icon_xueshengz.jpg'),
            isEducation: false,

            // typeList: {}
        })
        this.showAlertSelected = this.showAlertSelected.bind(this);
        this.callbackSelected = this.callbackSelected.bind(this);
    }

    _renderBeforeEdu() {
        return (
            <ScrollView
                style={styles.container}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginLeft: 100,
                    marginRight: 100,
                    marginTop: 10
                }}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("在校")}>
                            <View
                                style={{
                                    backgroundColor: Common.colors.red,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>

                                <Text style={{
                                    color: Common.colors.white,
                                    fontSize: 20,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    alignItems: 'center'
                                }}>
                                    在校
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("毕业")}>

                            <View style={{
                                flex: 1,
                                backgroundColor: Common.colors.gray3,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    color: Common.colors.red,
                                    fontSize: 20,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    alignItems: 'center'
                                }}>
                                    毕业
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Text
                        style={{
                            fontSize: 16, color: Common.colors.gray1,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                        学校名称
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
                        style={{
                            fontSize: 16, color: Common.colors.gray1,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                        入学年份
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
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Text
                        style={{
                            fontSize: 16, color: Common.colors.gray1,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                        专业/班级
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
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Text
                        style={{
                            fontSize: 16, color: Common.colors.gray1,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                        宿舍号
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

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{
                        fontSize: 16, color: Common.colors.gray1,
                    }}>
                        上传图片(学生证)
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this.showAlertSelected()}>
                        <Image source={this.state.avatarSource} style={{
                            width: 300,
                            height: 200,
                            borderRadius: 5,
                            marginTop: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.loginBtn} onPress={this._next.bind(this)}>
                    <Text style={styles.loginText}>下一步</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    _renderAfterEdu() {
        return (
            <ScrollView
                style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginLeft: 100,
                    marginRight: 100,
                    marginTop: 10
                }}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("在校")}>
                            <View
                                style={{
                                    backgroundColor: Common.colors.gray3,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>

                                <Text style={{
                                    color: Common.colors.red,
                                    fontSize: 20,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    alignItems: 'center'
                                }}>
                                    在校
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("毕业")}>

                            <View style={{
                                flex: 1,
                                backgroundColor: Common.colors.red,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    color: Common.colors.gray3,
                                    fontSize: 20,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    alignItems: 'center'
                                }}>
                                    毕业
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center',marginTop:10,marginLeft:5,marginRight:5,marginBottom:30}}>
                    <View style={{backgroundColor:Common.colors.yellow3,justifyContent:'center',alignItems: 'center',}}>
                        <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                            paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                        <Text style={{
                            justifyContent:'center',
                            alignItems: 'center',
                            color: Common.colors.yellow3,
                            fontSize: 18
                        }}>本科及本科以上</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:Common.colors.gray5,marginLeft:5}}>
                        <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                            paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                        <Text style={{
                            justifyContent:'center',
                            alignItems: 'center',
                            color: Common.colors.gray5,
                            fontSize: 18
                        }}>大专</Text>
                        </View>
                    </View>
                        <View style={{backgroundColor:Common.colors.gray5,marginLeft:5}}>
                            <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                                paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                        <Text style={{
                            justifyContent:'center',
                            alignItems: 'center',
                            color: Common.colors.gray5,
                            fontSize: 18
                        }}>高中</Text>
                            </View>
                        </View>
                            <View style={{backgroundColor:Common.colors.gray5,marginLeft:5}}>
                                <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                                    paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                        <Text style={{
                            justifyContent:'center',
                            alignItems: 'center',
                            color: Common.colors.gray5,
                            fontSize: 18
                        }}>初中及初中以下</Text>
                                </View>
                            </View>
                </View>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Text
                        style={{
                            fontSize: 16, color: Common.colors.gray1,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                        学信网账号
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
                        style={{
                            fontSize: 16, color: Common.colors.gray1,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                        学信网密码
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
                    <Text style={styles.loginText}>下一步</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    render() {
        return (
            <View style={styles.container} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid>
                <NavigationBar
                    backIconHidden={false}
                    barTintColor={Common.colors.yellow3}
                    barStyle={styles.navbar}
                    title='学历认证'
                    titleColor={Common.colors.white}
                    backColor={Common.colors.white}
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}
                />
                {this.state.isEducation ? this._renderAfterEdu() : this._renderBeforeEdu()}

                <DialogSelected ref={(dialog) => {
                    this.dialog = dialog;
                }}/>
            </View>
        )
    }

    _skipIntoAccountManage(content) {
        Toast.show(content, {position: Toast.positions.CENTER});
        if (content == '在校') {
            this.setState({
                isEducation: false
            })
        } else {
            this.setState({
                isEducation: true
            })
        }
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

    showAlertSelected() {
        this.dialog.show("请选择照片", selectedArr, '#333333', this.callbackSelected);
    }

    // 回调
    callbackSelected(i) {
        switch (i) {
            case 0: // 拍照
                this.takePhoto();
                break;
            case 1: // 图库
                this.pickMultiple();
                break;
        }
    }

    takePhoto() {
        ImagePicker.openCamera({
            width: 60,
            height: 60,
            cropping: true,
            cropperCircleOverlay: true
        }).then(image => {
            // let source = { uri: image.uri };
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
                avatarSource: {uri: image.path}
            });
            console.log(image);
        });

    }

    pickMultiple() {
        ImagePicker.openPicker({
            width: 60,
            height: 60,
            cropping: true,
            cropperCircleOverlay: true
        }).then(image => {
            this.setState({
                avatarSource: {uri: image.path}
            });
            console.log('图片信息=' + JSON.stringify(image));
            console.log('takePhoto--image.path=' + image.path);
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
        justifyContent: 'center',
        alignItems: 'center'
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
        alignItems: 'center',
        justifyContent: 'center',
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