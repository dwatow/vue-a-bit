import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Footer from "@/components/Footer"
Vue.use(Router)

var router =  new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content,
      meta: { requiresAuth: false }
    },
    {
      path: '/Feature',
      name: 'Feature',
      component: Footer,
      meta: { requiresAuth: true}
    },
    {
      path: '/News',
      name: 'News',
      component: Footer,
      meta: { requiresAuth: true }
    },
    {
      path: '/About',
      name: 'About',
      component: Footer,
      meta: { requiresAuth: true }
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Footer,
      meta: { requiresAuth: true }

    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log(window.hasLogin);
    if (!window.hasLogin) {
      next({
        path: '/',
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router
