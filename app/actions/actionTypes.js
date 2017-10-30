/**
 * RenRenDemo
 * @author CYF
 * @date 2017-10-23
 */


'use strict';

/**
 * action 类型
 */

//公用类型
export const ACTIONERROR                       = 'action_error';
// export const kCommonIsToasting                  = 'kCommonIsToasting';

//一间注册模拟账户
export const GETNOTREALACCOUNT                  = 'account_unreal';
export const GETNOTREALACCOUNTRECEIVED                  = 'account_unreal_received';

//获取验证码token
export const GETCHECKNUM                  = 'yzm_token';
export const GETCHECKNUMRECEIVED                  = 'yzm_token_received';

//发送短信验证码
export const SENDYZM                  = 'yzm_send';
export const SENDYZMRECEIVED                  = 'yzm_send_received';

//登录
export const LOGINURL                  = 'login_in';
export const LOGINURLRECEIVED                  = 'login_in_received';

//退出登录
export const LOGINOUT                  = 'login_out';
export const LOGINOUTRECEIVED                  = 'login_out_received';

//注册
export const REGISTER                  = 'register';
export const REGISTERRECEIVED                  = 'register_received';

//首页数据
export const GETHOMEINFO                  = 'home_info';
export const GETHOMEINFORECEIVED   = 'home_info_received';

//我的订单
export const MYORDER                  = 'my_order';
export const MYORDERRECEIVED                  = 'my_order_received';

//订单每期费用信息
export const MYORDERDETAIL                  = 'my_order_detail';
export const MYORDERDETAILRECEIVED                  = 'my_order_detail_received';

//生成订单
export const CREATEORDER                  = 'order_create';
export const CREATEORDERRECEIVED                  = 'order_create_received';

//获取历史数据
export const GETPRDERlIST                  = 'history';
export const GETPRDERlISTRECEIVED                  = 'history_received';

//获取当前交易订单列表
export const GETORDERlIST                  = 'trade';
export const GETORDERlISTRECEIVED                  = 'trade_received';

//获取当前交易订单列表
export const GETCHARTlIST                  = 'chart';
export const GETCHARTlISTRECEIVED                  = 'chart_received';




