import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFuture from '@/components/HelloFuture'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shopping',
      name: 'HelloFuture',
      component: HelloFuture
    }
  ]
})
