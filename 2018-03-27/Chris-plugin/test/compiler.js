const path = require('path');
const webpack = require('webpack');
const memoryfs = require('memory-fs');
const HelloWorldPlugin = require('../src/plugin.js');

module.exports = (fixture, options = {}) => {
    // console.log('fixture: ', fixture);
  const compiler = webpack({
    context: __dirname,
    entry: `../src/index.js`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        test: /\.txt$/,
        use: [{
          loader: path.resolve(__dirname, '../src/loader0.js'),
          options: {
            name: 'Chris'
          }
        // }, {
        //   loader: path.resolve(__dirname, '../src/loader1.js'),
        //   options: {
        //     name: 'Alice'
        //   }
        }]
      }]
    },
    plugins: [
      new HelloWorldPlugin({options: true})
    ]
  });

  compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
          // console.log(`reject(${err});`);
         reject(err);
     }
     else {
         // console.log(`resolve(${stats});`);
         resolve(stats);
     }


    });
  });
}
