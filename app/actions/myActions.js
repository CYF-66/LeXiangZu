/**
 * RenRenDemo
 * @author CYF
 * @date 2017-10-23
 */

import * as types from './actionTypes';
import Util from '../util/utils';
import * as urls from '../util/constants_url';
import Storage from '../util/Storage'

/**登录 */
export let HttpLogin = (data,isLoading) => {

    let url = urls.LOGINURL;

    return dispatch => {
        dispatch({type: types.LOGINURL,isLoading: isLoading});
        return Util.post(url, data,
            (Code, Message, Data) => {
                let user={};
                if(Code==1){
                    user=Data.custom;
                    console.log('=======user===------------>'+JSON.stringify(user));
                    Storage.setUser(user);
                    Storage.save('token',Data.token);
                    Storage.save('isLogin',true);
                    Storage.save('refresh_token',Data.refresh_token);
                }
                dispatch({type: types.LOGINURLRECEIVED, Code : Code, Message: Message, Data: Data.custom});
            },
            (err) => {
                console.log('Fetch banner list error: ' + err);
                dispatch({'type': types.ACTIONERROR});
                // alert('Android要用外网地址');
            }
        );
    }

};

/**退出登录 */
export let LoginOut = (data,isLoading) => {

    let url = urls.LOGINURLOUT;

    return dispatch => {
        dispatch({type: types.LOGINOUT,isLoading: isLoading});
        return Util.post(url, data,
            (Code, Message, Data) => {
                let user={};
                if(Code==1){
                    console.log('=======user===------------>'+JSON.stringify(user));
                    Storage.setUser(user);
                    Storage.save('token','');
                    Storage.save('isLogin',false);
                    Storage.save('refresh_token','');
                }
                dispatch({type: types.LOGINOUTRECEIVED, Code : Code, Message: Message, Data: Data});
            },
            (err) => {
                console.log('Fetch banner list error: ' + err);
                dispatch({'type': types.ACTIONERROR});
                // alert('Android要用外网地址');
            }
        );
    }

};

/**获取验证码token */
export let GetCheckNum = () => {

    let url = urls.GETCHECKNUM;

    return dispatch => {
        dispatch({type: types.GETCHECKNUM});
        return Util.post(url,{},
            (Code, Message, Data) => {
                if(Code==1){
                    Storage.save("token",Data);
                    // Storage.save("tt","cyf123456");
                    console.log('======yzm===------------>'+Data);
                }
                dispatch({type: types.GETCHECKNUMRECEIVED, Code : Code, Message: Message, Data: Data});
            },
            (err) => {
                console.log('获取验证码token err: ' + err);
                dispatch({'type': types.ACTIONERROR});
                // alert('Android要用外网地址');
            }
        );
    }

};

/**发送验证码 */
export let SendYZM = (data) => {

    let url = urls.SENDYZM;

    return dispatch => {
        dispatch({type: types.SENDYZM});
        return Util.post(url,data,
            (Code, Message, Data) => {

            if(Code==1){
                Storage.save("yzmtoken",Message);
                // Storage.save("tt","cyf123456");
                console.log('======yzmtoken===------------>'+Message);
            }
                dispatch({type: types.SENDYZMRECEIVED, Code : Code, Message: Message, Data: Data});
            },
            (err) => {
                console.log('发送验证码 err: ' + err);
                dispatch({'type': types.ACTIONERROR});
                // alert('Android要用外网地址');
            }
        );
    }

};

/**注册 */
export let Register = (data,isLoading) => {

    let url = urls.REGISTER;

    return dispatch => {
        dispatch({type: types.REGISTER,isLoading: isLoading});
        return Util.post(url, data,
            (Code, Message, Data) => {

            if(Code==1){

            }
                dispatch({type: types.REGISTERRECEIVED, Code : Code, Message: Message, Data: Data});
            },
            (err) => {
                console.log('Register error: ' + err);
                dispatch({'type': types.ACTIONERROR});
                // alert('Android要用外网地址');
            }
        );
    }

};

/**我的审核中心 */
export let CheckCenter = (data,isLoading) => {

    let url = urls.CHECKCENTER;

    return dispatch => {
        dispatch({type: types.REGISTER,isLoading: isLoading});
        return Util.post(url, data,
            (Code, Message, Data) => {

            if(Code==1){

            }
                dispatch({type: types.REGISTERRECEIVED, Code : Code, Message: Message, Data: Data});
            },
            (err) => {
                console.log('Register error: ' + err);
                dispatch({'type': types.ACTIONERROR});
                // alert('Android要用外网地址');
            }
        );
    }

};
