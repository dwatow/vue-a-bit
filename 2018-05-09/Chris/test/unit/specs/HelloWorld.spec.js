import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
require('chai').should()

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    vm.$el.querySelector('.hello h1').textContent.should.to.equal('Welcome to Your Vue.js App')
  })
})
