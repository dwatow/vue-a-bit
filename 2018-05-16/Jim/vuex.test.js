const store = require('./store');
const Vue = require("vue")
const Vuex = require("vuex")

console.log(store)

// describe('shopping list store', ()=>{

//   test('default', ()=>{
//     expect(store.state.items).toEqual([])
//   })

//   describe('mutations', ()=>{
//     test('#record adds passed value to items', () => {
//       let mockEntry = {text: 'Milk', done: false}
//       let state = { items: [] }
   
//       store.commit('record', mockEntry)

//       expect(store.state.items).toEqual([mockEntry])
//     })

//     test('#completed updates the `done` attribute', () => {
//       let mockEntry = {text: 'Milk', done: true}
//       let state = { items: [mockEntry] }

//       store.replaceState(state);

//       store.commit('completed', mockEntry);

//       expect(store.state.items[0].done).toBeTruthy()
//     })
//   })
// })

// describe('actions', ()=>{
//    let $store

//    beforeAll(()=>{
//      Vue.use(Vuex)
//      $store = new Vuex.Store(store)
//    })

//    describe('#record', () =>{
//      test('#record should prepare an object', () =>{
//        $store.dispatch('record', 'Hello')
//        expect($store.state.items.length).toBe(1)
//      })
//    })
// })
