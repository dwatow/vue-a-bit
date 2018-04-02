const path = require('path');
const HelloWorldPlugin = require('./src/plugin.js')

module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, `./src/index.js`),
  output: {
    path: path.resolve(__dirname),
    filename: './dist/bundle.js',
  },
  module: {
    rules: [{
      test: /\.txt$/,
      use: [{
        loader: path.resolve(__dirname, './src/loader0.js'),
        options: {
          name: 'Alice'
        }
      }, {
        loader: path.resolve(__dirname, './src/loader1.js'),
        options: {
          name: 'Chris'
        }
      }]
    }]
  },
  plugins: [
    new HelloWorldPlugin({options: true})
  ]
};
