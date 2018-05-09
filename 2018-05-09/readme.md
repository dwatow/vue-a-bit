# 第 9 週

**目標**

- unit test framework

**練習**

用 mocha 或 jest 做 vue 的測試
使用上上一週做的購物車例子，進行練習

分組:
- mocha
  - Chris
  - Kevin
  - Yoyo
- jest
  - Arel
  - Jim
  - Teng
  - Curt

**活動**

下次聚會時間 5/09 早上十點
用 上次寫的購物車程式 + 指定的 unit test framework
自己研究的東西!!

testing framework五個重點
- parameterized tests
- mocks and stubs
- test setup and teardown
- test categorization
- conditional running of tests

**筆記**

Assert測試
[Chai](http://www.chaijs.com/)

測試環境
[Karma](https://karma-runner.github.io/2.0/index.html)

製造假物件
[Sinon](http://sinonjs.org/)

[unit test 3a](https://dotblogs.com.tw/hatelove/2012/11/07/learning-tdd-in-30-days-day3-how-to-write-a-unit-test-code)
    Arrange : 初始化目標物件、相依物件、方法參數、預期結果，或是預期與相依物件的互動方式。
    Act : 呼叫目標物件的方法。
    Assert : 驗證是否符合預期。
