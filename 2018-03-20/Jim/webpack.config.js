
// 處理單個 loader
{
  test: /\.js$/
  use: [
    {
      loader: path.resolve('src/loader.js'),
      options: {/* ... */}
    }
  ]
}

// 處理多個 loader
// resolveLoader: {
//   modules: [
//     'node_modules',
//     path.resolve(__dirname, 'loaders')
//   ]
// }
