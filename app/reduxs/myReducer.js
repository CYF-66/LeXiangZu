/**
 * TradingTerminalRN
 * @author CYF
 * @date 2017-08-25
 */

import * as types from '../actions/actionTypes';
const initialState = {
    Data:[],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false,
    isLoginOut:false,
};

let myReducer = (state = initialState, action) => {
    // alert("获取验证码token="+action.Data);
    switch (action.type) {
        case types.LOGINOUT:
            return {
                ...state,
                isLoading: true
            };
            // return Object.assign({}, state, {
            //     isLoadMore: action.isLoadMore,
            //     isRefreshing: action.isRefreshing,
            //     isLoading: action.isLoading,
            // });
        case types.LOGINOUTRECEIVED:
            // return {
            //     ...state,
            //     //articles: action.articles,
            //     articles: action.articles.length > 0 ? state.articles.concat(action.articles) : state.articles,
            //     isLoading: false,
            //     isRefreshing: false,
            // };
            return {
                ...state,
                ...action,
                isLoading: false,
                isLoginOut:true,
                Data:action.Data
            };
        case types.TOKENERROR:
            return {
                ...state,
                isLoading: false,
                isLoginOut:false,
            };
        case types.ACTIONERROR:
            return {
                ...state,
                ...action,
                isLoading: false,
                isLoginOut:false,
            };

        default:
            return state;
    }
};

export default myReducer;