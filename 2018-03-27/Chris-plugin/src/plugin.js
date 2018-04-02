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
