import { shallow } from '@vue/test-utils'
import apiComponent from '@/components/apiComponent'
jest.mock('axios')

test('apiComponent', () => {
  it('fetches async when a button is clicked', (done) => {
    const wrapper = shallow(apiComponent)
    wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick(() => {
      console.log(wrapper.vm.value);
      expect(wrapper.vm.value.prods.length).toBe(20)
      done()
    })
  })
})
