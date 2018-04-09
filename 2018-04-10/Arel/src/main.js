import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';

import Routes from './routes';
import App from './App.vue';

// 讓所有 Component 都能使用 axios
Vue.prototype.$http = axios;

// 取用外掛
Vue.use(VueRouter);

const router = new VueRouter({
	routes: Routes,
	// default mode: hash
	mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
