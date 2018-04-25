# Vuex
> 用vueX習作購物車

## 架構
- 畫面上半部為購物車，做成一個component
- 畫面下半部為產品列表，用router-view含有一個產品列表的component

## 說明
- 可以新增品項、修改數量、移除品項、計算帳單總金額
- 品項永遠 >= 0
- 購物車內品項不會重複
- 新增品項、修改數量、移除品項都是commit mutations裡的function去修改state
- 計算帳單總金額的function寫在getters，故修改品項或數量會自動更新
- 計算帳單總金額有好幾種做法，也可以寫在component裡面，也可以不在state宣告一個bill，經多種考慮選擇現在的方式
