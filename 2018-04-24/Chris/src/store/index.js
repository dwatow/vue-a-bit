import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    condition: {
      q: '',
      brand: 'Apple'
    },
    paging: {
      indexPage: 1,
      totalRows: 0,
      totalPage: 10
    },
    carts: []
  },
  getters: {
    getProducts (state) {
      return state.products
    },
    getTotalPage (state) {
      return state.paging.totalPage
    },
    getCartsProducts (state) {
      return state.carts
    },
    getTotalCartsProducts (state) {
      return state.carts.length
    },
    getIndexPage (state) {
      return state.paging.indexPage
    },
    getTotalPriceCarts (state) {
      const carts = state.carts
      return carts.reduce((totalPrice, item) => {
        totalPrice += item.num * item.item.price
        return totalPrice
      }, 0)
    }
  },
  mutations: {
    addCarts (state, payload) {
      if (payload.num > 0) {
        state.carts.push(payload)
      }
    },
    updateBuyNum (state, payload) {
      state.carts[payload.index].num = payload.num
    },
    removeCartOne (state, payload) {
      state.carts.splice(payload.index, 1)
    },
    setProducts (state, payload) {
      state.products = payload.prods
    },
    setQ (state, payload) {
      state.condition.q = payload.q
    },
    setTotalRaw (state, payload) {
      state.paging.totalRows = payload.totalRows
    },
    setTotalPage (state, payload) {
      state.paging.totalPage = parseInt(payload.totalRows / payload.prods.length)
    },
    setPage (state, payload) {
      console.log(payload < state.paging.totalPage, payload > 1, payload)
      if (payload < state.paging.totalPage && payload > 1) {
        state.paging.indexPage = payload
      }
    },
    nextPage (state) {
      console.log(state.paging.indexPage, state.paging.totalPage)
      if (state.paging.indexPage < state.paging.totalPage) {
        state.paging.indexPage += 1
      }
    },
    prevPage (state) {
      if (state.paging.indexPage > 1) {
        state.paging.indexPage -= 1
      }
    }
  },
  actions
})
