# 第 4 週

**目標**

練習使用
- `props`
- `$emit`

**練習**

切 好想公佈欄，接 API，用 webpack-sample 的模版。
請 May 開設計稿給我們

**活動**

下次聚會時間 4/3 早上十點

每人講自己切版的實作，用評圖方式進行。
1. 輪流說自己做了什麼
2. 看別人的作品
3. 輪流說說別人的優點

**筆記**

## 規劃 components

## api 接進來處理
mounted

App.Vue
```
Vue.prototype.$http = axios;
```

Q:
filter 時, data 沒有 status

## Filter
list + status
```
:class="active: index === active"
```

```
radio :value
v-mode: status
```

如何不修改原本的 list

`.slice()` 複製一份出來

```
<v-for="item in filterList" />
computed: {
  filterList () {
    return filteredList;
  }
}

```
:class="info_state2[item.state]"
```
