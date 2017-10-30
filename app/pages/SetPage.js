'use strict'
import React, {Component} from 'react'
import {
    View,
    ScrollView,
    RefreshControl,
    Image,
    InteractionManager,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'
//引入标题支持包
// import SetPage from 'SetPage'
import Common from '../util/constants';
import NavigationBar from 'react-native-navigationbar'
import Toast from 'react-native-root-toast';
import IdentificationContainer from '../containers/IdentificationContainer'
import Storage from '../util/Storage'
import {LoginOut} from '../actions/myActions'

export default class SetPage extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isError: false,
            isLoading: true,
            token:'',
            refresh_token:'',
            // typeList: {}
        })
    }

    componentWillUpdate() {
        InteractionManager.runAfterInteractions(() => {
            const {myReducer} = this.props;
            console.log('loginReducer.isLoggedIn===------------>'+myReducer.isLoggedIn);
            if (myReducer.isLoginOut) {
                this.props.navigator.popToTop();
            }
        });

    }
    componentDidMount() {
        Storage.get("token").then((value) => {
            if(value){
                this.setState({
                    token: value
                })

            }else{
                this.setState({
                    token: ''
                })
            }
        });
        Storage.get("refresh_token").then((value) => {
            if(value){
                this.setState({
                    refresh_token: value
                })

            }else{
                this.setState({
                    refresh_token: ''
                })
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
                    title='设置'
                    titleColor={Common.colors.white}
                    backColor={Common.colors.white}
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}
                    // actionName='使用规则'
                    // actionTextColor={Common.colors.white}
                    // actionFunc={() => {
                    //     Toast.show('资金记录', {position: Toast.positions.CENTER});
                    //     // this.props.navigator.push({
                    //     //     component: AboutPage
                    //     // })
                    // }}
                />

                <TouchableOpacity activeOpacity={0.5} style={styles.loginBtn} onPress={this._loginOut.bind(this)}>
                    <Text style={styles.loginText}>退出登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _loginOut() {
        // Toast.show('退出登录', {position: Toast.positions.CENTER});
        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            // dispatch(GetOneKeyRegister(isLoading));
            //11010497   cks69t
            this.state.isLoading = true;
            // let data = {'accountNo': account, 'loginPwd': accountPWD};
            let data={'token ':this.state.token,'refresh_token':this.state.refresh_token};
            console.log('data===------------>'+JSON.stringify(data));
            dispatch(LoginOut(data, this.state.isLoading));
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Common.colors.gray6,
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