const modal = {
  state: {
    show:'',
    message:''
  },
  mutations: {
    controlModal (state,info) {
      state.show = info.show
      state.message = info.message
    }
  }
}
export default modal
