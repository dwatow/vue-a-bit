import Vue from 'vue'
import Router from 'vue-router'
import BODY from '@/components/body'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BODY',
      component: BODY
    }
  ]
})
