import axios from 'axios'
import router from '@/router'
import store from '@/store/index'
import { Loading,Message } from 'element-ui';

import { clearLoginInfo } from '@/utils'

const request = axios.create({
  baseURL:'/api',
  timeout: 1000 * 90,
  withCredentials: true
})
let loading=null
// 加载
function openFullScreen2() {
   loading = Loading.service({
    lock: true,
    text: '加载中...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
    // background: '#fff'
  });
}

/**
 * 请求拦截
 */
request.interceptors.request.use(
  config => {
    openFullScreen2() //请求的loading
    if(store.getters.token){ //有token配置信息和配置一些公共的参数
      let userinfo=store.getters.userinfo
      config.url=`${config.url}?token=${store.getters.token}` //设置路由token传参方式为get问号传参方式
      let xin={//配置一些公共的参数
        system:userinfo.system,
        model:userinfo.model,
        appId:userinfo.appId,
        uid:userinfo.uid,
        role:userinfo.role,
        departmentId:userinfo.departmentId
      }
   
      config.data=JSON.stringify({...xin,...config.data}) //请求参数与公共参数合并
      // config.headers['token'] =store.getters.token// 请求头带上token
    }
    config.headers['Content-Type'] = 'application/json' // 设置请求头
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 */
request.interceptors.response.use(
  response => {
    // console.log(response.data)
    loading.close(); //关闭loading
    if (response.data && response.data.code === 401) {
      // console.log(response.data.code)
      // 401, token失效
      // clearLoginInfo()
      // router.push({ name: 'login' })
    }else if(response.data && response.data.code==='100'){
      store.dispatch('clearLogin',router)
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default request