# 用vue-cli切七個版裡的第一個版



## 說明
- 切三個components
- nav, footer, body, body用router-view呈現


# 研究
## vue-loader
把vue-component轉成 plain ＪＳ
- 先parse file, 如果需要的話再給其他loader，最後在封裝給commonJS
- 支援其他語言 scss sacc
- transform Vue components written in the following format into a plain JavaScript module:

```
<script>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

export default {
  components: {
    ComponentA,
    ComponentB
  }
}
</script>
```
- { ComponentA } == { ComponentA: ComponentA }
Vue會把它轉成component-a的key，所以就可以用<component-a> template
- vue-loader只處理.vue, 所以其他的js檔必須用babel-loader or buble-loader處理。

```
scss: generateLoaders('sass').concat(
  {
    loader: 'sass-resources-loader',
    options: {
      resources: path.resolve(__dirname, '../src/style/_variables.scss')
    }
  }
),
```
**可以把mixin 或 variables直接設定在pre-loader**

/ ==> 絕對路徑
. ==> 相對路徑
~ ==> 去找node modules
@ ==> src，alias



## DefinePlugin
- 创建一个在编译时可以配置的全局常量。
- 对开发模式和发布模式的构建允许不同的行为非常有用
```
//webpack simple
new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"'
  }
}),

//webpack, dev.conf
new webpack.DefinePlugin({
  'process.env': require('../config/dev.env') // {
    NODE_ENV: '"development"'
  }
}),
//webpack, prod.conf
new webpack.DefinePlugin({
  'process.env': env
}),
```



## UglifyJsPlugin
- 壓縮 javascript 檔

- sourceMap:
  - 找出錯誤發生在哪個modules，會使compilation變慢
  - Use source maps to map error message locations to modules (This slows down the compilation)
- compress: 壓縮時的設定
  - warnings: 把壓縮時的警告關上
  - 有時會在壓縮時有一些多餘的警告, ```warnings: false``` 把壓縮時的警告關上


## LoaderOptionsPlugin
- webpack 1 迁移至 webpack 2幫助對loader的適應
- 用于将 webpack 1 迁移至 webpack 2。在 webpack 2 中，对 webpack.config.js 的结构要求变得更加严格；不再开放扩展给其他的 loader/插件。webpack 2 推荐的使用方式是直接传递 options 给 loader/插件
- options.minimize (boolean)：loader 是否要切换到优化模式。


## webpack-simple vs webpack
- entry一樣，都是'./src/main.js'
- output (webpack输出的结果)
  - path一樣 production都是dist (所有输出文件的目标路径,绝对路径)
  - publicPath (输出解析文件的目录)
    - simple: '/dist/'
    - webpack dev: '/'
    - webpack prop: '/'
  - filename （解析文件的檔名）
    - simple:'build.js'
    - webpack dev:'[name].js'
    - webpack pord: 'static/js/[name].[chunkhash].js'
      - static是utils.js特別加的，在這裡production和dev都為'static'
      - 最終會產生一個"static/ + js/ ＋ 雜湊名稱"的檔名 eg:'app.f3c13072b0ee5975dd09.js'

### loader大不相同
- png|jpg|gif|svg
  - webpack-simple: file-loader
  - webpack: url-loader，還可以讀jepg檔
  - hash方式不一樣
- .js: 都用 babel
- .vue都用vue-loader
  - simple:
  ```
  options: {
    loaders: {
      'scss': [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ],
      'sass': [
        'vue-style-loader',
        'css-loader',
        'sass-loader?indentedSyntax'
      ]
    }
  }
  ```

## webpack merge
- 串連array and object變成一個新的object
- 特別適合用在merge出Config object
- 遇到function就會執行並把return的value包在裡面
- 遇到一樣的key，後面物件key對應的value會覆蓋前一個
```
module.exports = merge(
  {NODE_ENV: '"production"'}
  {NODE_ENV: '"development"'}
)

// NODE_ENV: '"development"'
```
-  concatenates arrays and merges objects creating a new object.


```
Plugin1{
    : ['object1'],
    foo2: ['object1'],
    bar1: { object1: {} },
    bar2: { object1: {} },
}

Plugin2{
    foo1: ['object2'],
    foo2: ['object2'],
    bar1: { object2: {} },
    bar2: { object2: {} },
}

```
