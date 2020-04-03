import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modlue/user'
import management from './modlue/management'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user,
    management
  },
   getters,
  
})
