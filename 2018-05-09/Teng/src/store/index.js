import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)


const state = {
  items:[],
  bill: 0
}

export const getters = {
  $get_bill: function(state){
    return state.items.reduce((accu, cur) => {
      return accu + cur.total
    }, 0);
  }
}

export const actions = {
  $increase_item: function(state, index){
    state.commit('$increase_item', index)
    state.commit('$update_bill', state.getters.$get_bill)
  },
  $decrease_item: function(state, index){
    state.commit('$decrease_item', index)
    state.commit('$update_bill', state.getters.$get_bill)
  },
  $remove_item: function(state, index){
    state.commit('$remove_item', index)
    state.commit('$update_bill', state.getters.$get_bill)
  },
}

export const mutations = {
  $create_item: function (state, item) {
    state.items.push(item)
  },
  $increase_item(state, index){
    state.items[index].quantity++;
    state.items[index].total = state.items[index].price * state.items[index].quantity
  },
  $decrease_item(state, index){
    state.items[index].quantity--;
    state.items[index].total = state.items[index].price * state.items[index].quantity
  },
  $remove_item: function (state, index){
    state.items.splice(index, 1)
  },
  $update_bill: function (state, bill) {
    state.bill = bill
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
