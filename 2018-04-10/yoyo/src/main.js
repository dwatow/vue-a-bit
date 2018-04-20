import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import wantToknow from './components/wantToknow.vue'
import bootstap from 'bootstrap/dist/css/bootstrap.css'

Vue.use(vueRouter)
    // Vue.config.productionTip = false
const router = new vueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: [{
            path: '/',
            name: 'hello',
            component: wantToknow,

        }, {
            path: '/all',
            name: 'hello',
            component: wantToknow,

        },
        {
            path: '/soon',
            name: 'hello',
            component: wantToknow,

        },
        {
            path: '/finishin',
            name: 'hello',
            component: wantToknow,

        }
    ]
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})