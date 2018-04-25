import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

// 存放狀態
const state = {
  items:[],
  bill: 0
}

const getters = {
  update_bill: function(state){
    state.bill = 0
    for(let i = 0; i < state.items.length; i++){
      state.bill += state.items[i].total;
    }
  }
}

const actions = {}

const mutations = {
  $_add_cart: function (state, item) {
    return state.items.push(item)
  },
  increase(state, index){
    state.items[index].quantity++;
    state.items[index].total = state.items[index].price * state.items[index].quantity
  },
  reduce(state, index){
    if(state.items[index].quantity > 0){
      state.items[index].quantity--;
      state.items[index].total = state.items[index].price * state.items[index].quantity
    }
  },
  remove_item: function (state, index){
    state.items.splice(index, 1)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
