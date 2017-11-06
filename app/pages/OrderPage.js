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
    InteractionManager
} from 'react-native'
//引入标题支持包
import NavigationBar from 'react-native-navigationbar'
import Toast from 'react-native-root-toast';
import Common from '../util/constants';
import RepaymentContainer from '../containers/RepaymentContainer'
import LoginContainer from '../containers/LoginContainer'
import {GetOrderList} from '../actions/orderActions'
import Storage from '../util/Storage'
import Load from '../components/Load';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var isRefreshing=false;
var isLoadMore=false;
export default class OrderPage extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            isError: false,
            isLoading: true,
            currentPage:'1',
            isLogin:false,
            dataSource:ds.cloneWithRows([])
        })

    }
    componentWillMount() {
        Storage.get("isLogin").then((value) => {
            if(value){
                // console.log('value===------------>'+value);
            }else{
                this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
                    name:'LoginContainer',
                    component: LoginContainer,
                    // passProps: {contentData}// 传递的参数（可选）,{}里都是键值对  ps: test是关键字
                });
                // console.log('value===------------>'+value);
            }
            this.setState({
                isLogin: value
            })
        });

    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            let data={'pageNum':this.state.currentPage,'pageSize':'10'};
            console.log('data===------------>'+JSON.stringify(data));
            dispatch(GetOrderList(data,this.state.isLoading,isRefreshing,isLoadMore));
        });
    }
    render() {


        const {orderReducer} = this.props;
        // let Data=homeReducer.Data;
        let data = orderReducer.orderData;
        let isLoading = orderReducer.isLoading;
        let content;
        content = (
            <View style={styles.container}>
                {isLoading ?
                    null :
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <ListView
                            dataSource={this.state.dataSource.cloneWithRows(data)}
                            renderRow={this._renderItem.bind(this)}
                            // initialListSize={1}
                            enableEmptySections={true}
                            // onScroll={this._onScroll}
                            // onEndReached={this._onEndReach.bind(this)}
                            // onEndReachedThreshold={30}
                            // renderFooter={this._renderFooter.bind(this)}
                            // style={{height: Common.window.height - 64}}
                            refreshControl={
                                <RefreshControl
                                    refreshing={orderReducer.isRefreshing}
                                    onRefresh={this._onRefresh.bind(this)}
                                    title="正在加载中……"
                                    color={Common.colors.red}
                                />
                            }
                        />
                    </View>
                }
            </View>
        )

        // let isLoading = orderReducer.isLoading;

        return (
            <View style={styles.container} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid>
                <NavigationBar
                    backIconHidden={true}
                    barTintColor={Common.colors.yellow3}
                    barStyle={styles.navbar}
                    title='订单'
                    titleColor={Common.colors.white}
                    // actionName='订单受理'
                    // actionTextColor={Common.colors.white}
                    // actionFunc={() => {
                    //     Toast.show('资金记录', {position: Toast.positions.CENTER});
                    //     // this.props.navigator.push({
                    //     //     component: AboutPage
                    //     // })
                    // }}
                />
                {content}
                <Load
                    transparent={true}
                    visible={isLoading}
                    color={Common.colors.loadblue}
                    overlayColor={Common.colors.transparent}
                    size={'large'}
                />
            </View>
        )
    }

    _renderItem(contentData) {

        let pic;
        if(contentData.book_state=='3'){//还款中
            pic=require('../images/order/icon_zhengc.png');
        }else if(contentData.book_state=='2'){//审核中
            pic=require('../images/order/icon_yihuan.png');
        }else if(contentData.book_state=='1'){//已完成
            pic=require('../images/order/icon_jieqing.png');
        }else{//已逾期
            pic=require('../images/order/icon_yuqi.png');
        }
        return (
        <View style={styles.container}>
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this._skipIntoAccountManage(contentData.book_id)}>
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
                        borderBottomColor: Common.colors.bottomlinecolor,
                        borderBottomWidth: 1
                    }}>

                        <Image source={require('../images/other/icon_iphone8.png')} style={{
                            width: 30,
                            height: 60,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}/>
                        <View style={{flex: 1, justifyContent: 'center'}}>

                            <Text style={{
                                color: Common.colors.black,
                                fontSize: 20,
                                marginLeft: 10
                            }}>{contentData.product_name}</Text>
                        </View>
                        <Text style={{fontSize: 12, color: Common.colors.gray1}}>
                            {contentData.start_date}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 20}}>
                        <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                            总计还款:
                        </Text>
                        <Text style={{flex: 1, color: Common.colors.gray1, fontSize: 12, marginLeft: 5}}>
                            ￥{contentData.price}元
                        </Text>
                        <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                            剩余待还:
                        </Text>
                        <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                            ￥{contentData.remainfee}元
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 20}}>
                        <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                            当前应还:
                        </Text>
                        <Text style={{flex: 1, color: Common.colors.gray1, fontSize: 12, marginLeft: 5}}>
                            ￥{contentData.currrepay}元
                        </Text>
                        <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                            逾期费:
                        </Text>
                        <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                            ￥{contentData.expiryfee}元
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 20}}>
                        <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                            服务费:
                        </Text>
                        <Text style={{color: Common.colors.gray1, fontSize: 12, marginLeft: 5}}>
                            ￥{contentData.serverfee}元
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 20, marginBottom: 10}}>
                        <Text style={{color: Common.colors.gray1, fontSize: 12}}>
                            还款日:
                        </Text>
                        <Text style={{color: Common.colors.gray1, fontSize: 12, marginLeft: 5}}>
                            {contentData.repaydate}
                        </Text>
                    </View>
                    <Image source={pic} style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 5,
                        width: 60,
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}/>
                </View>
            </View>
        </TouchableOpacity>
        </View>
        )
    }
    // 下拉刷新
    _onRefresh() {

        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            let data={'pageNum':this.state.currentPage,'pageSize':'10'};
            console.log('data===------------>'+JSON.stringify(data));
            isRefreshing=true;
            dispatch(GetOrderList(data,this.state.isLoading,isRefreshing,isLoadMore));
        });

    }
    _skipIntoAccountManage(content) {
        // Toast.show(content, {position: Toast.positions.CENTER});
        this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
            name: 'RepaymentContainer',
            component: RepaymentContainer,
            passProps: {Title: '订单',book_id:content}// 传递的参数（可选）,{}里都是键值对  ps: test是关键字
        })// push一个route对象到navigator中
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
        borderBottomColor: Common.colors.bottomlinecolor,
        borderBottomWidth: 1
    },
    secondLineItem: {
        backgroundColor: Common.colors.white,
        alignItems: 'center',
        borderBottomColor: Common.colors.bottomlinecolor,
        borderBottomWidth: 1
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