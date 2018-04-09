import Vue from 'vue'
import Router from 'vue-router'
import talksFilter from '../components/talksFilter.vue'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/filter/:status', component: talksFilter }
  ]
})
