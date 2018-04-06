import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import speech_list from './components/speech_list'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/:filter_condition',
      component: speech_list
    },
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
