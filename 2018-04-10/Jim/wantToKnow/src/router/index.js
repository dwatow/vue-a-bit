import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
import Resume from '@/components/Resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/content'
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/content/resume/:id',
      name: 'Resume',
      component: Resume
    }
  ]
})
