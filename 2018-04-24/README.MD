## 第 7 週

**目標**

- vuex
- [postcss](https://github.com/postcss/postcss/blob/master/README-cn.md)
- plugin
    - UglifyJsPlugin
    - LoaderOptionsPlugin
    - ...

**練習**

用 [api](http://ecshweb.pchome.com.tw/search/v3.3/all/results?q=Apple&page=1&sort=rnk/dc) 可以自己偷換成其它的參數

做一個購物車頁面，含有下面的功能
- 加入商品
- 修改商品數量
- 移除商品
- 計算總價

題目[參考資料](https://data-sci.info/2015/10/12/%E7%B6%B2%E8%B7%AF%E7%88%AC%E8%9F%B2%E7%B3%BB%E5%88%97-crawler-1-%E4%BD%BF%E7%94%A8chrome%E3%80%8C%E6%AA%A2%E6%9F%A5%E5%85%83%E7%B4%A0%E3%80%8D%E6%89%BE%E5%87%BA-pchome%E8%B3%BC%E7%89%A9/)

**活動**

下次聚會時間 4/24 早上十點
用 webpack 模版，vuex
自己研究的東西!!

**分享**

## Jim

vuex 的 module

```javascript=
import buy from './module/carts.js'

export default new Vuex.Store({
    modules: {
        'buy': cart
    }
})
```

覺得用 array 很棒

```javascript=
addStuff (x) {
    array.push(x)
}
```

`Arrry.protpType.indexOf(Object)` => 可以直接找到相同物件的 index ，如果沒有回傳-1




## Curt

- 對 slot 的見解
  挖個洞丟進去，那為什麼要挖洞？
    - 如果無法預測或收斂內容，那就給一個 slot
    - 就不用做很多版本的元件

iViewModel 是一個全域的 modal
封裝 要用 comoputed 的 getter/setter + v-model 讓值進出

ref 指定 solt 子層

在 component 內的 solt 使用 component
```htmlmixed=
<component1>
    <component2 ref="ref2">
    </component2>
</component1>
```

```
this.$refs //可以指定插在 slot 的 component
this.$children
this.$parent
```

router

巢狀式 router

> children + path: '' 會出現 warning

```javascript=
{
    path: '/',
    component: Home,
    children: [
        {
            path: 'cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '', //會出現 warning
            name: 'cart',
            component: Cart
        }
    ]
}
```

axios

```javascript=
Vue.prototype.$axios = axios;

```

## Andy

巢狀 router 給預設值
建議使用 redirect 設定較適合

```
{
    path: '/',
    name: 'home',
    redirect: '/home',
    component: 'home',
    children: [
        {
            path: '/train',
            component: 'train',
        }
    ]
}
```

## Kevin

v-for 一到10


分頁功能
previousPage - currentPage > 0
才修改 page rage

```
computed: {
    selected () {
        return true | false;
    }
}


:class"{selected}"
```



關聯式容器？

## Teng

bill不同步原因：在 Getter使用 Setter

## Chris

一個 getter 做一件事情

vuex 以 state 為中心，使用getter setter保護
action可以操作getter setter

MVC心得：
M:Vuex state,getter,setter
C:Vuex actions
V:components

要了解哪些是畫面邏輯，哪些是資料邏輯，畫面邏輯的不要丟到action，否則容易造成耦合


[Composing Actions](https://vuex.vuejs.org/en/actions.html#composing-actions): action可以使用promise作為回傳


呼叫API 放在actions : 操作資料


```htmlmixed=
<style>
    :nth-child(2n+1)
</style>
```
