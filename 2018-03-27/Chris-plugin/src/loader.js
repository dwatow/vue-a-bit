const loaderUtils = require('loader-utils');

module.exports = function loader(source) {
  //this is options of loader module in webpack.config.js
  const options = loaderUtils.getOptions(this);

  return `module.exports = 'I am ${options}'`;
};
