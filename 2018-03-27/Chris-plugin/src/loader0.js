const loaderUtils = require('loader-utils');

module.exports = function loader(source) {
  //this is options of loader module in webpack.config.js
  const options = loaderUtils.getOptions(this);
  // console.log(this.constructor);

  source = source.replace(/\[name\]/g, options.name);

  return `module.exports = '${source}'`;
};
