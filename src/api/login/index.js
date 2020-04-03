import request from '@/utils/request'
//用户登录接口
export function LoginFn(data){
    return request({
        url:'/user/login',
        method:'post',
        data:JSON.stringify(data)
    })
}
//用户退出接口

export function logout(data){
    return request({
        url:'/user/logout',
        method:'post',
        data:JSON.stringify(data)
    })
}