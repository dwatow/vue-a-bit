# 寫一個 Plugin 練習

使用上週的 Loader 練習程式碼

寫一個簡單的 plugin

**./src/plugin.js**

```javascript
function HelloWorldPlugin(options) {
  // Setup the plugin instance with options...
  //console.log(JSON.stringify(options));
}

HelloWorldPlugin.prototype.apply = function(compiler) {
  compiler.plugin('run', function(compiler, callback) {
    //console.log(compiler.context);

    callback();
  });
  compiler.plugin('done', function() {
    //console.log('Hello World!');
  });
};

module.exports = HelloWorldPlugin;
```

加上 plugins 設定
**./test/compiler.js**

```javascript
plugins: [
  new HelloWorldPlugin({options: true})
]
```

執行
```shell
npm run start
```
plugin 會執行。
可以在不同的 hook 之下，加上 `console.log` 可以看得出執行時機。

## 收獲

Plugin 的執行時機，其實是一個大哉問，它與 loader 不同，是用來增加 webpack 執行編譯時的額外行為。
所以，真的就是字面上的意思「 webpack 的 plugin 」，反而 loader 像是各種前置處理。
