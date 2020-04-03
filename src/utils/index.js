import router from '@/router'
import store from '@/store'
/**
 * 是否有权限
 * @param {*} key
 */
export function isAuth (key) {
  return JSON.parse(sessionStorage.getItem('permissions') || '[]').indexOf(key) !== -1 || false
}

/**
 * 清除登录信息
 */
export function clearLoginInfo () {
  sessionStorage.removeItem('token')
  store.commit('resetStore')
  router.options.isAddDynamicMenuRoutes = false
}