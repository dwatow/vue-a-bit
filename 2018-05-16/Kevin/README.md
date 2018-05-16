# mocha

> build a simple vue unit test with karma & mocha under chrome
> modify in test/unit/karma.conf.js
> browsers: ['Chrome']
> plugins: [
      // Launchers
      'karma-chrome-launcher',

      // Test Libraries
      'karma-mocha',
      'karma-sinon-chai',

      // Preprocessors
      'karma-webpack',
      'karma-sourcemap-loader',

      // Reporters
      'karma-spec-reporter',
      'karma-coverage'
    ],

# EXLint warning
> eslint為語法檢查工具，在vue檔裡面很多空格都會導致 warning。
> 關閉方法 => 在build/webpack.base.conf.js文件中，註解 or 刪除：module -> rules 中有關 eslint 的 rule.

