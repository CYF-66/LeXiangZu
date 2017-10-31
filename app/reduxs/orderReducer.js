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
};

let orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MYORDER:
            return Object.assign({}, state, {
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading,
            });
        case types.MYORDERRECEIVED:
            return {
                ...state,
                isLoading: false,
                Data: action.Data,
                isLoadMore: false,
                isRefreshing: false,
                // DataList: action.DataList.length> 0 ? state.DataList.concat(action.DataList) : state.DataList
            };
        case types.TOKENERROR:
            return {
                ...state,
                isLoading: false,
                isRefreshing: false,
                isLoadMore: false,
            };
        case types.ACTIONERROR:
            return {
                ...state,
                isLoading: false,
                isRefreshing: false,
                isLoadMore: false,
            };
        default:
            return state;
    }
};

export default orderReducer;