/**
 * TradingTerminalRN
 * @author CYF
 * @date 2017-08-25
 */

'use strict';

// import {FormData} from 'react-native';
import Toast from 'react-native-root-toast';
import Storage from '../util/Storage'
let Util = {
    /**
     * http get 请求简单封装
     * @param url 请求的URL
     * @param successCallback 请求成功回调
     * @param failCallback 请求失败回调
     */
    get: (url, successCallback, failCallback) => {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                let result = JSON.parse(responseText);
                successCallback(result.Code, result.Message, result.DataList);
            })
            .catch((err) => {
                failCallback(err);
            });
    },

    /**
     * http post 请求简单封装
     * @param url 请求的URL
     * @param data post的数据
     * @param successCallback 请求成功回调
     * @param failCallback failCallback 请求失败回调
     */
    post: (url, data, successCallback, failCallback) => {
        // let formData = new FormData();
        // Object.keys(data).map(function(key) {
        //     var value = data[key];
        //     formData.append(key, value);
        // });
        Storage.get('token').then((value) => {
            console.log('提交参数为===data=='+data);
            console.log('cookie===token=='+value);
            let fetchOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'cookie':'token='+value
                    // 'Content-Type': 'multipart/form-data',
                },
                // body: formData
                body: JSON.stringify(data)
            };

            fetch(url, fetchOptions)
                .then((response) => response.text())
                .then((responseText) => {
                    let result = JSON.parse(responseText);
                    // alert(result.Message);
                    // Toast.show(JSON.stringify(result)
                    // , {position:Toast.positions.CENTER});
                    console.log('result='+JSON.stringify(result));
                    // console.log('result.Message='+result.Message);
                    successCallback(result.Code, result.Message, result.Data);
                })
                .catch((err) => {
                    console.log('------err='+err);
                    // Toast.show("错误返回==="+err
                    //     , {position:Toast.positions.CENTER});
                    failCallback(err);
                });
        });

    },
    /**
     * http post 请求简单封装Code
     * @param url 请求的URL
     * @param data post的数据
     * @param successCallback 请求成功回调
     * @param failCallback failCallback 请求失败回调
     */
    postLogin: (url, data, successCallback, failCallback) => {
        // let formData = new FormData();
        // Object.keys(data).map(function(key) {
        //     var value = data[key];
        //     formData.append(key, value);
        // });

        let fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'multipart/form-data',
            },
            // body: formData
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                let result = JSON.parse(responseText);
                // alert(result.Message);
                Toast.show(result.Message, {position:Toast.positions.CENTER});
                successCallback(result.Code, result.Message, result.Data);
                console.log('result.DataList'+result.Data);
            })
            .catch((err) => {
                failCallback(err);
            });
    },

    /**
     * 日志打印
     * @param obj
     */
    log: (obj) => {
        var description = "";
        for(let i in obj){
            let property = obj[i];
            description += i + " = " + property + "\n";
        }
        alert(description);
    },
};

export default Util;