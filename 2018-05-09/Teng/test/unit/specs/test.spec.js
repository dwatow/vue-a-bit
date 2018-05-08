// 測試counter，文件裡範例的練習
// 測試含有某段html, 含有button, 觸發button會讓count +1
import { mount } from '@vue/test-utils'
import Counter from '@/components/counter'



describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)
  // 測試含有某段html
  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // 測試含有button
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  // 測試觸發button會讓count +1
  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

})
