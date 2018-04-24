import Vue from 'vue'
import Vuex from 'vuex'

import cart from './modules/cart'
import modal from './modules/modal'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    modal
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
