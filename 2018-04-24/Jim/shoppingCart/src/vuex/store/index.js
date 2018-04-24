import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    buy: cart,
    search: products
  },
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
