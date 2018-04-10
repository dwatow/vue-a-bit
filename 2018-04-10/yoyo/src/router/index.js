import vue from 'vue'
import vueRouter from 'vue-router'
import App from '../App.vue'
import test from '../components/test.vue'

vue.use(vueRouter)

export default new vueRouter({
    mode: 'history',
    base: __dirname,
    routers: [{
            path: '/',
            name: 'App',
            component: App
        },
        {
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})