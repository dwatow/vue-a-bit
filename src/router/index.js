import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// --------------------------------
// 頁面主架構
// --------------------------------
const Home = () => import(/* webpackChunkName: "pages" */ '@/pages/Home')
const SearchResults = () => import(/* webpackChunkName: "pages" */ '@/pages/SearchResults')
const Train = () => import(/* webpackChunkName: "pages" */ '@/pages/Home/Train')
const MRT = () => import(/* webpackChunkName: "pages" */ '@/pages/Home/MRT')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }
    ,
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/train',
      children: [
        {
          path: 'train',
          name: 'Train',
          meta: { title: '雙鐵查詢' },
          component: Train
        },
        {
          path: 'mrt',
          name: 'MRT',
          meta: { title: '捷運轉乘' },
          component: MRT
        },
      ]
    },
    {
      path: '/searchresults',
      name: 'SearchResults',
      component: SearchResults,
      // redirect: '/SearchResults',
      // children: []
    }
  ]
})
