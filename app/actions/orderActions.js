/**
 * RenRenDemo
 * @author CYF
 * @date 2017-10-23
 */

import * as types from './actionTypes';
import Util from '../util/utils';
import * as urls from '../util/constants_url';

export let GetOrderList = (data,isLoading,isRefreshing,isLoadMore) => {

    let url = urls.MYORDER;

    return dispatch => {
        dispatch({type: types.MYORDER,isLoading: isLoading,isRefreshing:isRefreshing,isLoadMore:isLoadMore});
        return Util.post(url, data,
            (Code, Message, Data) => {

                dispatch({type: types.MYORDERRECEIVED, Code: Code, Message: Message, Data: Data});

            },
            (err) => {
                console.log('Fetch banner list error: ' + err);
                dispatch({'type': types.ACTIONERROR});
                // alert('Android要用外网地址');
            }
        );
    }

};

export let GetOrderDetail = (data,isLoading,isRefreshing,isLoadMore) => {

    let url = urls.QUERYORDERDETAIL;

    return dispatch => {
        dispatch({type: types.MYORDERDETAIL,isLoading: isLoading,isRefreshing:isRefreshing,isLoadMore:isLoadMore});
        return Util.post(url, data,
            (Code, Message, Data) => {

                dispatch({type: types.MYORDERDETAILRECEIVED, Code: Code, Message: Message, Data: Data});

            },
            (err) => {
                console.log('Fetch banner list error: ' + err);
                dispatch({'type': types.ACTIONERROR});
                // alert('Android要用外网地址');
            }
        );
    }

};

export let TakeOrder = (data,isLoading) => {

    let url = urls.CREATEORDER;

    return dispatch => {
        dispatch({type: types.CREATEORDER,isLoading: isLoading});
        return Util.post(url, data,
            (Code, Message, Data) => {

                dispatch({type: types.CREATEORDERRECEIVED, Code: Code, Message: Message, Data: Data});

            },
            (err) => {
                console.log('Fetch banner list error: ' + err);
                dispatch({'type': types.ACTIONERROR});
                // alert('Android要用外网地址');
            }
        );
    }

};
