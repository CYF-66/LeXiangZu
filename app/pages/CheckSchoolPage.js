'use strict'
import React, {Component} from 'react'
import {
    View,
    ScrollView,
    RefreshControl,
    InteractionManager,
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
import {CheckSchool} from '../actions/myActions';
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
            isZhuanAndBen:true,
            isBen:true,
            isZhuan:false,
            isGao:false,
            isChu:false,
            base64Source:'',
            college:'',
            start_date:'',
            specialty:'',
            dorm:'',
            school:'',
            loginoutdate :'',
            chsi_name:'',
            chsi_password:'',

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
                    <View style={{flex: 1, justifyContent: 'center',backgroundColor:Common.colors.red}}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => this._skipIntoAccountManage("在校")}>
                            <View
                                style={{
                                    backgroundColor: Common.colors.red,
                                    margin:1,
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
                    <View style={{flex: 1, justifyContent: 'center',backgroundColor:Common.colors.red}}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => this._skipIntoAccountManage("毕业")}>

                            <View style={{
                                backgroundColor: Common.colors.white,
                                margin:1,
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
                        onChangeText={this.onChangeCollege.bind(this)}/>
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
                        onChangeText={this.onChangeStartTime.bind(this)}/>
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
                        onChangeText={this.onChangeClassRoom.bind(this)}/>
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
                        onChangeText={this.onChangeDorm.bind(this)}/>
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
                    <Text style={styles.loginText}>提交</Text>
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
                    <View style={{flex: 1, justifyContent: 'center',backgroundColor:Common.colors.red}}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => this._skipIntoAccountManage("在校")}>
                            <View
                                style={{
                                    backgroundColor: Common.colors.white,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin:1,
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
                    <View style={{flex: 1, justifyContent: 'center',backgroundColor:Common.colors.red}}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => this._skipIntoAccountManage("毕业")}>

                            <View style={{
                                backgroundColor: Common.colors.red,
                                margin:1,
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
                                    毕业
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center',marginTop:20,marginLeft:5,marginRight:5,marginBottom:30}}>
                    {this.state.isBen ? <View>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("本科及本科以上")}>
                            <View style={{backgroundColor:Common.colors.yellow3,justifyContent:'center',alignItems: 'center',}}>
                                <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                                    paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                                    <Text style={{
                                        justifyContent:'center',
                                        alignItems: 'center',
                                        color: Common.colors.yellow3,
                                        fontSize: 12
                                    }}>本科及本科以上</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>:<View>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("本科及本科以上")}>
                            <View style={{backgroundColor:Common.colors.gray5,justifyContent:'center',alignItems: 'center',}}>
                                <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                                    paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                                    <Text style={{
                                        justifyContent:'center',
                                        alignItems: 'center',
                                        color: Common.colors.gray5,
                                        fontSize: 12
                                    }}>本科及本科以上</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>}

                    {this.state.isZhuan ?<View><TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this._skipIntoAccountManage("大专")}>
                        <View style={{backgroundColor:Common.colors.yellow3,marginLeft:5}}>
                            <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                                paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                                <Text style={{
                                    justifyContent:'center',
                                    alignItems: 'center',
                                    color: Common.colors.yellow3,
                                    fontSize: 12
                                }}>大专</Text>
                            </View>
                        </View>
                    </TouchableOpacity></View>:<View><TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this._skipIntoAccountManage("大专")}>
                        <View style={{backgroundColor:Common.colors.gray5,marginLeft:5}}>
                            <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                                paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                                <Text style={{
                                    justifyContent:'center',
                                    alignItems: 'center',
                                    color: Common.colors.gray5,
                                    fontSize: 12
                                }}>大专</Text>
                            </View>
                        </View>
                    </TouchableOpacity></View>}

                    {this.state.isGao ?<View>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("高中")}>
                            <View style={{backgroundColor:Common.colors.yellow3,marginLeft:5}}>
                                <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                                    paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                                    <Text style={{
                                        justifyContent:'center',
                                        alignItems: 'center',
                                        color: Common.colors.yellow3,
                                        fontSize: 12
                                    }}>高中</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    </View>:<View>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("高中")}>
                            <View style={{backgroundColor:Common.colors.gray5,marginLeft:5}}>
                                <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                                    paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                                    <Text style={{
                                        justifyContent:'center',
                                        alignItems: 'center',
                                        color: Common.colors.gray5,
                                        fontSize: 12
                                    }}>高中</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    </View>}

                    {this.state.isChu ?<View><TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this._skipIntoAccountManage("初中及初中以下")}>
                        <View style={{backgroundColor:Common.colors.yellow3,marginLeft:5}}>
                            <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                                paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                                <Text style={{
                                    justifyContent:'center',
                                    alignItems: 'center',
                                    color: Common.colors.yellow3,
                                    fontSize: 12
                                }}>初中及初中以下</Text>
                            </View>
                        </View>
                    </TouchableOpacity></View>:<View><TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this._skipIntoAccountManage("初中及初中以下")}>
                        <View style={{backgroundColor:Common.colors.gray5,marginLeft:5}}>
                            <View style={{backgroundColor:Common.colors.white,margin:1,paddingTop: 5,
                                paddingBottom: 5,paddingLeft:5,paddingRight:5}}>
                                <Text style={{
                                    justifyContent:'center',
                                    alignItems: 'center',
                                    color: Common.colors.gray5,
                                    fontSize: 12
                                }}>初中及初中以下</Text>
                            </View>
                        </View>
                    </TouchableOpacity></View>}

                </View>

                {this.state.isZhuanAndBen ? this._renderHighLever() : this._renderLowLever()}

                <TouchableOpacity activeOpacity={0.5} style={styles.loginBtn} onPress={this._next.bind(this)}>
                    <Text style={styles.loginText}>提交</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    _renderHighLever(){
        return(
            <View>
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
                        onChangeText={this.onChangeChrisName.bind(this)}/>
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
                        onChangeText={this.onChangeChrisPassword.bind(this)}/>
                </View>
            </View>
        )
    }
    _renderLowLever(){
        return(
            <View>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Text
                        style={{
                            fontSize: 16, color: Common.colors.gray1,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                        毕业院校
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
                        onChangeText={this.onChangeSchool.bind(this)}/>
                </View>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Text
                        style={{
                            fontSize: 16, color: Common.colors.gray1,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                        毕业时间
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
                        onChangeText={this.onChangeLoginOutDate.bind(this)}/>
                </View>
            </View>
        )
    }
    render() {
        // console.log('this.state.base64Source==========='+JSON.stringify(this.state.base64Source));
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
        // Toast.show(content, {position: Toast.positions.CENTER});
        if (content == '在校') {
            this.setState({
                isEducation: false
            })
        } else if(content == '毕业') {
            this.setState({
                isEducation: true,
            })
        }else if(content == '本科及本科以上'){
            this.setState({
                isZhuanAndBen: true,
                isBen:true,
                isZhuan:false,
                isGao:false,
                isChu:false
            })
        }else if(content == '大专'){
            this.setState({
                isZhuanAndBen: true,
                isBen:false,
                isZhuan:true,
                isGao:false,
                isChu:false
            })
        }else if(content == '高中'){
            this.setState({
                isZhuanAndBen: false,
                isBen:false,
                isZhuan:false,
                isGao:true,
                isChu:false
            })
        }else if(content == '初中及初中以下'){
            this.setState({
                isZhuanAndBen: false,
                isBen:false,
                isZhuan:false,
                isGao:false,
                isChu:true
            })
        }
    }

    _next() {
        // Toast.show('下一步', {position: Toast.positions.CENTER});

        let {school,start_date,specialty,dorm,isEducation,base64Source,
            avatarSource,isZhuanAndBen,chsi_name,
            chsi_password,loginoutdate,isBen,isZhuan,isGao,isChu,college} = this.state;
        let data;
        let purpose;
        if(isBen){
            purpose=5;
        }
        if(isZhuan){
            purpose=4;
        }
        if(isGao){
            purpose=2;
        }
        if(isChu){
            purpose=3;
        }
        if(isEducation){//毕业

            if(isZhuanAndBen){//专科、本科及其以上
                data={'purpose':purpose,'chsi_name':chsi_name,'chsi_password':chsi_password};
            }else{//高中 初中及其以下
                data={'purpose':purpose,'school':school,'loginoutdate':loginoutdate};
            }
        }else{//在校
            data={'purpose':1,'college':college,'start_date':start_date,'specialty':specialty,'dorm':dorm,'picture':base64Source};

        }

        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            // dispatch(GetOneKeyRegister(isLoading));
            //11010497   cks69t
            this.state.isLoading = true;
            // let data = {'phone': phone};
            console.log('data===------------>'+JSON.stringify(data));
            // let data={'name':'13788957291','identity':'000000'};
            dispatch(CheckSchool(data, this.state.isLoading));
        });
    }

    onChangeCollege(text) {
        this.state.college = text;
    }

    onChangeStartTime(text) {
        this.state.start_date = text;
    }
    onChangeClassRoom(text) {
        this.state.specialty = text;
    }
    onChangeDorm(text) {
        this.state.dorm = text;
    }
    onChangeSchool(text) {
        this.state.school = text;
    }
    onChangeLoginOutDate(text) {
        this.state.loginoutdate = text;
    }
    onChangeChrisName(text) {
        this.state.chsi_name = text;
    }
    onChangeChrisPassword(text) {
        this.state.chsi_password = text;
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
            cropperCircleOverlay: true,
            includeBase64:true
        }).then(image => {
            // let source = { uri: image.uri };
            // You can also display the image using data:
            // let base64Path=new Buffer(image.path).toString('base64');

            let url=`data:${image.mime};base64,`+ image.data;
            console.log('received base64 image==========='+url);
            // console.log('received base64 image');
            let source={uri: image.path};
            this.setState({
                avatarSource: source,
                base64Source:url
            });

        });

    }

    pickMultiple() {
        ImagePicker.openPicker({
            width: 60,
            height: 60,
            cropping: true,
            cropperCircleOverlay: true,
            includeBase64:true
        }).then(image => {
            let url=`data:${image.mime};base64,`+ image.data;
            console.log('received base64 image==========='+url);
            this.setState({
                avatarSource: {uri: image.path},
                base64Source:url
            });
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
        borderBottomWidth: 1,
        borderBottomColor: Common.colors.bottomlinecolor,
    },
    loginInput: {
        height: 40,
        paddingLeft: 10,
        flex: 1,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
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