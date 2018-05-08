// 測試QuantityComponent，文件裡範例的練習
// 測試觸發上下、ESC、a功能
import QuantityComponent from '@/components/QuantityComponent'
import { mount } from '@vue/test-utils'

describe('键盘事件测试', () => {
  it('默认的数量是零', () => {
    const wrapper = mount(QuantityComponent)
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('上按键将数量设置为 1', () => {
    const wrapper = mount(QuantityComponent)
    wrapper.trigger('keydown.up')
    expect(wrapper.vm.quantity).toBe(1)
  })

  it('下按键将数量减 1', () => {
    const wrapper = mount(QuantityComponent)
    wrapper.vm.quantity = 5
    wrapper.trigger('keydown.down')
    expect(wrapper.vm.quantity).toBe(4)
  })

  it('ESC 键将数量设置为 0', () => {
    const wrapper = mount(QuantityComponent)
    wrapper.vm.quantity = 5
    wrapper.trigger('keydown.esc')
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('魔术字符 "a" 键将数量设置为 13', () => {
    const wrapper = mount(QuantityComponent)
    wrapper.trigger('keydown', {
      which: 65
    })
    expect(wrapper.vm.quantity).toBe(13)
  })
})
