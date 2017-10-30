'use strict'
import React, {Component} from 'react'
import {View, Platform, Text, StyleSheet, Image, TouchableOpacity, ScrollView, InteractionManager,ListView,RefreshControl} from 'react-native'
import Swiper from 'react-native-swiper';
import Common from '../util/constants';
import Toast from 'react-native-root-toast';

const Images = [{src: require('../images/banner/banner5.jpg')}, {src: require('../images/banner/banner6.jpg')},
    {src: require('../images/banner/banner7.jpg')}, {src: require('../images/banner/banner4.jpg')}]
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import {GetHomeInfo} from '../actions/homeActions'
import TakeOrderContainer from '../containers/TakeOrderContainer'
import Loading from '../components/Loading';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            isError: false,
            isSecltor8: true,
            isSecltor8p: false,
            dataSource:ds.cloneWithRows([])
        })
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            let data={'reload ':true};
            console.log('data===------------>'+JSON.stringify(data));
            dispatch(GetHomeInfo(data));
        });
    }

    _renderSwiper() {
        return (
            <Swiper
                height={200}
                loop={true}
                autoplay={true}
                dot={<View style={styles.customDot}/>}
                activeDot={<View style={styles.customActiveDot}/>}
                paginationStyle={{
                    bottom: 10
                }}
                autoplayTimeout={2}
            >

                <View style={styles.swiperItem}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._skipIntoAccountManage("图片1")}>
                        <Image style={styles.img} source={Images[0].src}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.swiperItem}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._skipIntoAccountManage("图片2")}>
                        <Image style={styles.img} source={Images[1].src}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.swiperItem}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._skipIntoAccountManage("图片3")}>
                        <Image style={styles.img} source={Images[2].src}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.swiperItem}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this._skipIntoAccountManage("图片4")}>
                        <Image style={styles.img} source={Images[3].src}></Image>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }

    render() {

        const {homeReducer} = this.props;
        // let Data=homeReducer.Data;
        let data = homeReducer.Data;
        let isLoading = homeReducer.isLoading;
        let content;
        content=(
            <View style={styles.container}>
                {isLoading ?
                    <Loading/> :
                    <View style={{flex: 1, flexDirection: 'column'}}>

                        <ListView
                            dataSource={this.state.dataSource.cloneWithRows(data)}
                            renderRow={this._renderItem.bind(this)}
                            // initialListSize={1}
                            enableEmptySections={true}
                            // onEndReached={this._onEndReach.bind(this)}
                            // onEndReachedThreshold={30}
                            // renderFooter={this._renderFooter.bind(this)}
                            // style={{height: Common.window.height - 64}}
                            refreshControl={
                                <RefreshControl
                                    refreshing={homeReducer.isRefreshing}
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
        let deadprice=data.deadprice;
        console.log('data===------------>'+data.deadprice);

        return (
            <ScrollView
                style={styles.container}>
                {this._renderSwiper()}
                <View style={{flex:1,position:'absolute',top:25,right:15}}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this._skipIntoAccountManage("消息中心")}>
                        <Image source={require('../images/set/iconfont_tixing.png')} style={{
                            width: 30,
                            height: 30,
                        }}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.secondLine}>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("每期应还")}>
                            <View style={styles.check}>
                                {/*<Image source={require('../images/order/icon_shenhecenter.png')} style={{*/}
                                {/*width: 45,*/}
                                {/*height: 45,*/}
                                {/*justifyContent: 'center',*/}
                                {/*alignItems: 'center',*/}
                                {/*}}/>*/}
                                <Text style={styles.drawertext}>每期应还</Text>
                                <Text style={styles.lendMoney}>{deadprice}元</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:1,backgroundColor:Common.colors.gray6,alignItems:'center',justifyContent:'center'}}/>
                    <View style={{flex: 1}}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => this._skipIntoAccountManage("逾期费")}>
                            <View style={styles.pay}>

                                {/*<Image source={require('../images/order/icon_huankuanzhing.png')} style={{*/}
                                {/*width: 45,*/}
                                {/*height: 45,*/}
                                {/*justifyContent: 'center',*/}
                                {/*alignItems: 'center',*/}
                                {/*}}/>*/}
                                <Text style={styles.drawertext}>逾期费</Text>
                                <Text style={styles.lendMoney}>55.0元</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.thirdLine}>
                    <Text style={styles.thirdText}>乐享租产品</Text>
                </View>
                {content}
                <View style={{paddingTop: 5, paddingBottom: 15}}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => this._skipIntoAccountManage("了解逾期后果")}>
                        <Text style={{
                            textAlign: 'right',
                            fontSize: 15,
                            color: Common.colors.blue,
                            marginRight: 20,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>了解逾期后果</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this._takeOrder("马上申请")}>
                    <View style={{
                        marginTop:5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom:10
                    }}>
                        <Text style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor:Common.colors.yellow2,
                            color: Common.colors.white,
                            paddingTop:10,
                            paddingBottom:10,
                            paddingLeft:50,
                            paddingRight:50,
                            fontSize: 18,
                            borderRadius: 20
                        }}>马上申请</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        );
    }

    _skipIntoAccountManage(content) {
        if(content=="iphone 8" ||content==""){
            this.setState({
                isSecltor8: true,
                isSecltor8p: false,
            })
        }else{
            this.setState({
                isSecltor8: false,
                isSecltor8p: true,
            })
        }
        Toast.show(content, {position: Toast.positions.CENTER});
        // this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
        //     name:'SetContainer',
        //     component: SetContainer,
        //     // passProps: {contentData}// 传递的参数（可选）,{}里都是键值对  ps: test是关键字
        // })// push一个route对象到navigator中
    }

    _renderItem(contentData){

        return(
            <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center',
                backgroundColor:Common.colors.white,
                paddingLeft:25,paddingTop:5,paddingBottom:5,paddingRight:10,borderBottomColor: Common.colors.bottomlinecolor,
                borderBottomWidth: 1}}>

                <Image source={require('../images/other/icon_iphone8.png')} style={{
                    width: 30,
                    height: 60,
                    alignItems:'center',
                    justifyContent:'center'
                }}/>
                <View style={{flex:1,justifyContent:'center'}}>

                    <Text style={{color:Common.colors.black,fontSize:20,marginLeft:10}}>{contentData.name}</Text>
                    <Text style={{color:Common.colors.gray5,fontSize:12,marginLeft:10,marginTop:5}}>借款分期:{contentData.deadline}期</Text>
                </View>
                <Image source={require('../images/other/icon_seclect.png')}
                       style={{padding:10,marginRight:20,width: 20,
                           height: 20,}}/>
            </View>
        )
    }

    // 下拉刷新
    _onRefresh() {
        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            let data={'reload ':true};
            console.log('data===------------>'+JSON.stringify(data));
            let isRefreshing=true;
            dispatch(GetHomeInfo(data,isRefreshing,isRefreshing));
        });

    }
    _takeOrder(content){
        this.props.navigator.push({// 活动跳转，以Navigator为容器管理活动页面
            name:'TakeOrderContainer',
            component: TakeOrderContainer,
            // passProps: {contentData}// 传递的参数（可选）,{}里都是键值对  ps: test是关键字
        })// push一个route对象到navigator中
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Common.colors.gray6,
    },
    swiperItem: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    swiper: {},
    img: {
        width: Common.window.width,
        height: 200,
    },
    customDot: {
        backgroundColor: Common.colors.white,
        height: 8,
        width: 8,
        borderRadius: 4,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    customActiveDot: {
        backgroundColor: Common.colors.bluelogin,
        height: 8,
        width: 8,
        borderRadius: 4,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    secondLine: {
        backgroundColor: Common.colors.white,
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: Common.colors.bottomlinecolor,
        borderBottomWidth: 1
    },
    thirdLine: {
        backgroundColor: Common.colors.white,
        flexDirection: 'row',
        marginTop: 10,
        paddingTop: 15,
        alignItems: 'center',
        paddingBottom: 5,
        paddingLeft: 20,
        borderBottomColor: Common.colors.bottomlinecolor,
        borderBottomWidth: 1
    },
    thirdLine2: {
        backgroundColor: Common.colors.white,
        flexDirection: 'row',
        paddingTop: 15,
        alignItems: 'center',
        paddingBottom: 5,
        paddingLeft: 20,
        // borderBottomColor: Common.colors.bottomlinecolor,
        // borderBottomWidth: 1
    },
    fourdLine: {
        backgroundColor: Common.colors.white,
        flexDirection: 'row',
        borderBottomColor: Common.colors.bottomlinecolor,
        borderBottomWidth: 1
    },
    check: {
        backgroundColor: Common.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pay: {
        backgroundColor: Common.colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawertext: {
        marginLeft: 8,
        color: Common.colors.black,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    thirdText: {
        color: Common.colors.black,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        fontSize: 18,
        color: Common.colors.black,
        alignItems: 'center',

    },
    lendMoney: {
        fontSize: 18,
        marginTop: 5,
        color: Common.colors.yellow1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fiveText: {
        color: Common.colors.black,
        fontSize: 15,
        alignItems: 'center',
    },

});