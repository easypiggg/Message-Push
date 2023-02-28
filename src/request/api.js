import request from './request'

//获取验证码图片
export const GetCodeApi=(params)=>request.get('/getCode',params);
//登录
export const LoginApi=(params)=>request.get('/login',params);
//获取用户信息
export const GetUsersApi=(params)=>request.get('/getUsers',params);
//修改用户密码
export const ModPwdApi=(params)=>request.get('/modPwd',params);
