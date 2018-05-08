# vuex_cart_jest

> 練習jest的各種測試


## apiComponent.spec.js
https://vue-test-utils.vuejs.org/en/guides/testing-async-components.html
測試購物車的prods component
測試api, 非同步，失敗

### 問題
錯誤訊息：
```
Tests cannot be nested.
```


## Cart.spec.js
https://vue-test-utils.vuejs.org/en/guides/using-with-vuex.html
Mocking with Modules

### 問題
- wapper 是空的
```
find did not return button.decrease_item, cannot call trigger() on empty Wrapper
```


當component有state, 測試會有問題, 會出現下列錯誤訊息：
```
 [Vue warn]: Error in config.errorHandler: "TypeError: Cannot read property 'state' of undefined"

 TypeError: Cannot read property 'state' of undefined
```

## getter.spec.js
測試$get_bill


## mutations.spec.js
測試$increase_item, $decrease_item


## QuantityComponent
https://vuejs.org/v2/guide/unit-testing.html
測試QuantityComponent，文件裡範例的練習
測試觸發上下、ESC、a功能


## test.spec.js
https://vuejs.org/v2/guide/unit-testing.html
測試counter，文件裡範例的練習
測試含有某段html, 含有button, 觸發button會讓count +1
