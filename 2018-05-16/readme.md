# 第 10 週

**目標**

- jest
- unit test framework

**練習**

用 jest 實作一個簡單測試練習

**活動**

下次聚會時間 5/16 早上十點
自己研究的東西!!




## Teng


### test runner, testing framwork, assertion library, and a testing plugin
http://amzotti.github.io/testing/2015/03/16/what-is-the-difference-between-a-test-runner-testing-framework-assertion-library-and-a-testing-plugin/
Karma is an example of a test runner
Mocha is an example of a testing framework
Chai is an example of an assertion library
Sinon is an example of a testing plugin



#### test runner
- 產生一個可以裝測試framework, assertion, plugin
- Runner可以產生假server, 然後在不同的browser測試，我的想像是模擬一個測試環境
- 但runner需要framework和plugin才能真的測試
- test runner是最外層，需要安裝或配置測試軟體如Plugins。形成runner包著framwork,assertion, plugin，
- 比如說```karmar init```會產生conjig檔```karma.conf.js```裡面就定義我要用mocha
```
module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['mocha']
```


#### framework
https://smartbear.com/learn/automated-testing/test-automation-frameworks/
framework 有guideline和規則，確保大家設計的測試在一個"框架"
guideline包括coding standard
framework會提供一些工具來讓測試更簡便



#### 怎麼分辨framework 和 斷言庫
```
afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    $window.localStorage.removeItem('com.shortly');
  });

  it('should have a signup method', function() {
    expect($scope.signup).to.be.a('function');
  });
```

it block裡的都是斷言庫裡的東西、外面則是framework


#### Assertion Library
實際跑出我寫測試內容是否正確的地方
但不是每個framework需要斷言庫、jasmine就有自己內建


#### Plugins
讓測試有更多變化
像sinon就可以做出mocks, stubs, and fake servers

