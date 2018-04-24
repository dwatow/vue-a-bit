import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import ProductList from '@/components/ProductList'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'Cart',
          component:Cart
        },
        {
          path:'',
          component:ProductList
        }
      ]
    }
  ]
})
