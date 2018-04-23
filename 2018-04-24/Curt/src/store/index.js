import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart
  },
  state:{
    count:0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
