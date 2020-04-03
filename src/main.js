import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './elementui/index'
import Pagination from './components/common/Pagination.vue'
Vue.config.productionTip = false
Vue.component('Pagination',Pagination)//全局

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
