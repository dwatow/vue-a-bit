import { mount } from 'vue-test-utils'
import List from '@/components/List'

describe('List.vue', () => {
  let wrapper
  beforeEach(() => {
    // mount component
    wrapper = mount(List)
  })

  // it('has input', () => {
  //   expect(wrapper.find('input').text()).to.be.a(true)
  // })

  it('click -> add a new item', () => {
    wrapper.vm.newItem = 'mos'
    const button = wrapper.find('button')
    button.trigger('click')

    expect(wrapper.vm.listItems).contain('mos')
  })

  it('click -> add empty item', () => {
    wrapper.setData({
      newItem: '',
      items: []
    })

    const button = wrapper.find('button')
    button.trigger('click')

    expect(wrapper.vm.items).contain([])
  })
})
