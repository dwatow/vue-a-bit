const cart = {
  state: {
    products:[]
  },
  mutations: {
    addProduct (state,product) {
      // 这里的 `state` 对象是模块的局部状态
      state.products.push(product)
      console.log(this.$axios);
    }
  },

  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
export default cart
