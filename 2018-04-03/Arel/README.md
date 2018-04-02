# arel

> A Vue.js project

## 本週練習內容

串接 API.

### 體悟

- 要讓所有 component 都能用 axios, 得把 axios 指定給 Vue 原型變數中。
- 我會習慣把要輸入元件的內容分成兩部分： `<slot>` 專用 跟 `props` 傳值。
- 在不用 setter 的狀況下， computed 是不允許對 data 做更動的，甚至複製也不行...?


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
