import Vue from 'vue'
import Router from 'vue-router'

const T1 = () => import(/* webpackChunkName: "pages" */ '@/components/T1')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/t1',
      name: 'T1',
      component: T1
    }
  ]
})
