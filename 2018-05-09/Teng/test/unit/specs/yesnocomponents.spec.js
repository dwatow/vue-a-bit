import YesNoComponent from '@/components/yesnocomponents'
import {mount} from '@vue/test-utils'
import sinon from 'sinon'

describe('点击事件', () => {
  it('在 yes 按钮上点击会调用我们的方法并附带参数 "yes"', () => {
    const spy = sinon.spy()
    const wrapper = mount(YesNoComponent, {
      propsData: {
        callMe: spy
      }
    })
    wrapper.find('button.yes').trigger('click')

    // spy.should.have.been.calledWith('yes')
  })
})
