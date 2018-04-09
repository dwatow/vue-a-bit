# vue 的 component + API 練習

[練習結果](https://dwatow.github.io/vue-a-bit/2018-04-10/Chris/)

## API

放置在 lifecycle 的 `created` ，當時的 data 已初始化完畢，允許賦值。

## Filter

與上週不同。
上週會將整個 talks 吃進來，而這次改成只是回傳自己的狀態回去，並且將當下狀態吃進來比對，並且變色。

## 修改 Dom 的 class

利用 computed 來當作 data 的 getter ，用「改變取 data 的形式」的原則，像是「增加了新的 data」的做法。

## vue-router

### 安裝

一個 middleware 附加在 vue instance 裡。[^middleware]

**src/router/index.js**

做成元件使用

```
import Vue from 'vue'
import Router from 'vue-router'
import talksFilter from '../components/talksFilter.vue'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/filter/:status', component: talksFilter }
  ]
})
```

**src/App.vue**

在會使用到的 component 裡使用

```
import router from './router'

export default {
  name: 'app',
  router,
  //...
}
```

### 使用

在此使用[Dynamic Route Matching](https://router.vuejs.org/en/essentials/dynamic-matching.html)的做法。將網址的參數當作 component 的參數使用。

在 router 裡設定 routes 的 path

```
routes: [
  { path: '/filter/:status', component: talksFilter }
]
```

```
<router-link to="/filter/all"><talksFilter :currStatus="$route.params.status" status="all"></talksFilter></router-link>
<router-link to="/filter/showing"><talksFilter :currStatus="$route.params.status" status="showing"></talksFilter></router-link>
<router-link to="/filter/finished"><talksFilter :currStatus="$route.params.status" status="finished"></talksFilter></router-link>
```



[^middleware]: [Vue.js Routing With vue-router](https://medium.com/codingthesmartway-com-blog/vue-js-routing-with-vue-router-4c428fabb078)
