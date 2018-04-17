# 第 6 週

**目標**

- [vue-loader](https://vue-loader.vuejs.org/en/configurations/pre-processors.html) (盡可能把 loader 的設定放進來)
- [postcss](https://github.com/postcss/postcss/blob/master/README-cn.md)
- plugin
    - DefinePlugin
    - UglifyJsPlugin
    - LoaderOptionsPlugin
- ~~vuex~~

**練習**

1. 用vue-cli切七個版裡的第一個版
2. 研究webpack模板與webpack-simple模板的差異性
3. 盡可能研究上述plugin

**活動**

下次聚會時間 4/17 早上十點

認識 webpack 模版的

自己研究的東西!!


## 分享

1. Demo 你做的版
2. 做了什麼，用了什麼 vue 的技巧
3. 研究了什麼 webpack 的內容 (plugin, config...)
4. QA

**yoyo**

- 使用 vue-router 顯示一個 component
- nav和fooer切成component
- 比較 webpack & webpack simple
    - 探索vue-cli的webpack和webpack-simple模板的development server實現差異[^diff-webpack-webpack-simple]
    - 安裝的 plugin 不太一樣
- `font-size` 百分比的定義: 吃父層的 `font-size` (Sets the font-size to a percent of  the parent element's font size)


**Teng**

- 使用 vue-router 顯示一個 component
- component 名稱不可以用 html 內建的名稱
- 研究 vue
    - vue-loader
        - `{componentA} => {componentA: componentA}`[^PropertyShorthand]
- 研究 webpack
    - build.js[^build.js]
    - Plugin
        - Defineplugin
            - 全域變數: `process.env.NODE_ENV`
        - UglifyJsPlugin
            -  壓縮 js 檔
- 比較 webpack & webpack simple
    - publicPath 告訴外面 你這路徑叫什麼名字
    - filename
    - loader
        - file-loader -> url-loader
    - babel 處理 js
    - merge 套件 用來處理 config 的合併
- webpack 想放 書籤圖示
    - serve-favicon

**Chris**

- sourcemap: 對應到 source code
- file loader v.s url loader
    - file loader 負責處理檔案build之後的檔案路徑
    - url loader 當檔案在limit值以下，會直接用base64方式讀取檔案，limit以上則自動使用file loader
- copyWebpackPlugin 複製目錄，像是static
- htmlWebpackPulgin 根據某個樣板輸出html
- extractTestPulgin 將編好的css輸出成file，避免都長在head style裡面

**在 component 使用 v-model**

先看 parent 的真實面貌

```htmlmixed=
<input :value="parentData"
       @input="parentData = $event.target.value">
```

- `:value` 在 component 裡要 `props`
- `@input` 在 component 裡要 `$emit`

```htmlmixed=
<template>
    <div @click="$emit('input', retuanValue)"></div>
</template>
<script>
    import myComponent from './myComponent.vue'
    export default {
        props: ['value'],
    }
</script>
```
**Kevin**

**Arel**

- build/build.js
    - ora: terminal 的轉轉轉
    - rm: 清掉指定路徑
    - chalk: terminal 有顏色的字
    -

**Curt**

- 為什麼檔案要 hash
    - 為了快取
- 研究 webpack
    - `$ npm run build`
        - `script: node build/build.js`
    - npm run dev: 執行webpack-dev-server, 取用webpack.dev.conf.js的配置
    - npm run build: 執行build.js
- 有用 vue-router component 是用footer
- vue-router
    - router.beforeEach
    - 每一個 route 都有一組 meta, 加上自己要檢查的
    - router 的 match[^router-match]


[^diff-webpack-webpack-simple]: [探索vue-cli的webpack和webpack-simple模板的development server實現差異](https://segmentfault.com/a/1190000011402931)

[^build.js]: [史上最詳細的webpack 講解1 （vue-cli 中build.js）](https://juejin.im/post/58ea59afac502e4957c794f9)

[^PropertyShorthand]: [PropertyShorthand - es6](http://es6-features.org/#PropertyShorthand)

[^router-match]: [match - vue-router](https://router.vuejs.org/en/essentials/dynamic-matching.html)
