import Vue from 'vue'
import Router from 'vue-router'
import prods from '@/components/prods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'prods',
      component: prods
    }
  ]
})
