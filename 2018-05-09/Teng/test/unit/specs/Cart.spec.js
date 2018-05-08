import { shallow, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Cart from '@/components/cart'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Cart.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      increase_item: jest.fn(),
      decrease_item: jest.fn(),
      remove_item: jest.fn(),
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  console.log(actions);
  console.log(store);

  it('click button of decrease_item', () => {
    const wrapper = shallow(Cart, { store, localVue })
    wrapper.find('button.decrease_item').trigger('click')
    expect(actions.decrease_item).toHaveBeenCalled()
  })
  it('click button of increase_item', () => {
    const wrapper = shallow(Cart, { store, localVue })
    wrapper.find('.increase_item').trigger('click')
    expect(actions.decrease_item).toHaveBeenCalled()
  })
  it('click button of increase_item', () => {
    const wrapper = shallow(Cart, { store, localVue })
    wrapper.findAll('button').trigger('click')
    expect(actions.decrease_item).toHaveBeenCalled()
  })


  // it('has a computed hook', () => {
  //   expect(typeof Cart.computed).toBe('object')
  // })
})
