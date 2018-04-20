# 第5週

**目標**

- [vue-loader](https://vue-loader.vuejs.org/en/configurations/pre-processors.html) (盡可能把 loader 的設定放進來)
- [postcss](https://github.com/postcss/postcss/blob/master/README-cn.md)
- [vue-router](https://router.vuejs.org/zh-cn/)
- plugin
    - DefinePlugin
    - UglifyJsPlugin
    - LoaderOptionsPlugin
- ~~vuex~~

**練習**

切 好想公佈欄，接 API，用 webpack-sample 的模版。
不用照設計圖。
但是要 前端router
重點在設定 vue-loader

**活動**

下次聚會時間 4/10 早上十點

每人講自己切版的實作，用評圖方式進行
輪到自己時，要說「目標」的內容。


## 分享

**yoyo**

tag 可以改變預設生成 a ，指定變成哪種 tag

```
<router-link tag="li">
```

可以寫 css

router-link 自帶的 css
`router-link-exact-active`
`router-link-active`


```htmlmixed
<router-link @click="this is emit">
<router-link @click.native="this is click">
```

**kevin**

router link 被按的時候 指定 class: `checked`
```
<router-link active-class="checked">
```

路徑為 `/user` 要排除，要加 `exact`

```
<router-link :to="/" exact>
```

可以設定 router-view 有 `props` ，在抽換 components 時可以接上 router-view 的 `props`

```
<router-view :totalTalks="talks">
```

可以監聽目前的 `$router` 的改變，觸動後面的 function

```javascript=
watch: {
    '$route': function (to, from) {

    }
}
```

**curt**

`this.$route` 專屬於 main.vue
`this.$router` 一個全域都可使用的物件

```javascript=
created() {
    console.log(this.$route) //object of routes array
    console.log(this.$router) //vue router instancd
}
```

vue-router 的 hook 有兩個我有用過
兩者差異是一個有非同步一個沒有。

```
router.beforeResolve 非同步
router.beforeEach 同步
```


**Teng**

computed 會跑兩次


Arel


path: /year/month/day
```
<router-link :to="method()">
```

**Jim**

任何沒匹配的網址，都會跑去 content

```javascript=
routes: [
    {
        path: '*',
        redirect: '/content'
    }
]
```
