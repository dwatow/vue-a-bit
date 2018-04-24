const cart = {
  state: {
    products:[]
  },
  mutations: {
    addProduct (state,product) {
      state.products.push(product)
    }
  },

  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
export default cart
