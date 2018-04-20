import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/content'
    },
    {
      path: '/content',
      component: content
    },
    {
      path: '/content/resume/:id',
      component: Resume
    },
    {
      path: "*",
      redirect: '/content'
    }
  ]
})
