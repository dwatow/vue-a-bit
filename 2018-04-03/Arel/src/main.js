import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

// Let all components can use axios
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App),
})
