# vue-a-bit

# 為什麼要設定 .babelrc
webpack 4 其實會幫我們設定，為什麼我們需要設定 babel ?
* the entry point. Default to ./src/index.js
* the output. Default to ./dist/main.js

說明： webpack 在 4 或 4.x or 5.0 已經開始試著定義預設的設定或插件，
而基本上並不想放一堆東西在核心，但允許其他的擴充。

## 參考資料
[段落：webpack 4: transpiling Javascript ES6 with Babel](https://www.valentinog.com/blog/webpack-4-tutorial/#webpack_4_transpiling_Javascript_ES6_with_Babel)
