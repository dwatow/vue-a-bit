// initial state
// shape: [{ id, quantity }]

const state = {
  count: 0,
  stuffList: []
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  increment (state) {
    state.count++
  },
  addStuff (state, goods) {
    if (state.stuffList.indexOf(goods)+1){
      console.log("Already exist")
      console.log("state.stuffList")
    } else {
      state.stuffList.push(goods)
    }
  },
  removeStuff (state, goods) {
    if(state.stuffList.indexOf(goods)+1){
      state.stuffList.splice(state.stuffList.indexOf(goods), 1)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
