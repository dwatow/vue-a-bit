import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import member from './modules/member'

// Initialize
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    member
  }
})
