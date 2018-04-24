// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fontawesome from '@fortawesome/fontawesome';
import {
	faFacebookSquare,
	faGooglePlusSquare,
	faTwitterSquare,
	faPinterestSquare
} from '@fortawesome/fontawesome-free-brands';

Vue.config.productionTip = false

fontawesome.library.add({
	faFacebookSquare,
	faGooglePlusSquare,
	faTwitterSquare,
	faPinterestSquare
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
