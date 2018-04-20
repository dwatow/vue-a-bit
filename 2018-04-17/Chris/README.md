# vue-webpack-demo

練習 vue 的 webpack 樣版，做簡單切版

## 練習內容

- vue-slot
- dynamic component
- lifecycle

## webpack plugins

###  [CopyWebpackPlugin](https://github.com/webpack-contrib/copy-webpack-plugin)

複製 xx 到建構目錄

```javascript
const CopyWebpackPlugin = require('copy-webpack-plugin')

const pattern = {
  //from: unix 路徑設定方式, 在此是 `config\index.js` 的 build.assetsRoot
  from: path.resolve(__dirname, '../static'),
  //to: 預設 webpack.config.js 的 output
  to: config.build.assetsSubDirectory, //預設到root ./dist
  //ignore: 忽略的檔案形式, 在此設定的是所有隱藏檔
  ignore: ['.*']
}
const options = {}

const webpackConfig = {
  //...
  plugins: [
    new CopyWebpackPlugin([pattern], options)
  ]
}
```

## [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

輸出的 index.html 會包含一個 build.js 。而它的檔名設定，會依照  webpack.config.js 的設定而改變

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      //指定輸出檔名, 預設會是 `src/index.html`
      // 不過 output 的設定可以壓過這個設定
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      //指定輸出檔的參考樣版 `/index.html`
      template: 'index.html',
      //將 js 掛在 body (或 head), true=body
      inject: true,
      //呼叫 `html-minifier` 套件, 這是它的設定物件
      minify: {
        //ref: http://perfectionkills.com/
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      //不知道 chunk 是什麼，看來是排序功
      chunksSortMode: 'dependency'
    }),
  ]
}
```

- [html-minifier](https://github.com/kangax/html-minifier#options-quick-reference)


## [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)

從打包中的內容提取成單獨文件。(CSS or JS)

```javascript
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const options = {
  // 指定路徑、變化處理後的檔名
  filename: utils.assetsPath('css/[name].[contenthash].css'),
  // 與 CommonsChunkPlugin 搭配服用
  allChunks: true,
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // loaders: utils.cssLoaders({
          //   sourceMap: sourceMapEnabled,  //true
          //   extract: isProduction, //獨立檔案
          //   usePostCSS: false
          // }),
          // 在 production 會變下面這樣
          loaders: ExtractTextPlugin.extract({
            use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }],
            fallback: 'vue-style-loader'
          }),
          cssSourceMap: sourceMapEnabled, //true
          cacheBusting: config.dev.cacheBusting, //undefinded in production
          transformToRequire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      }
    ]
  },
  plugins: [
    // 提取獨立文件
    new ExtractTextPlugin(options),
  ]
}
```
