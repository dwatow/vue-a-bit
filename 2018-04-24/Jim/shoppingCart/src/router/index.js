import Vue from 'vue'
import Router from 'vue-router'
import Shopping from '@/components/Shopping'
import HelloFuture from '@/components/HelloFuture'
import Checkout from '@/components/Checkout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloFuture',
      component: HelloFuture
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '*',
      component: HelloFuture
    }
  ]
})
