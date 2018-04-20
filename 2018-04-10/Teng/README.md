# router_version

> 練習用router做出想知道嗎頁面

## 說明
- 利用axios將資料接進來
1. 先排序
2. 利用moment.js宣告現在時間 ```"2018-03-22"```
3. 每個物件加上status, eg:comming, today, past
- 把顯示speech的區塊變成components
- router裡面有component, 把由api接到的array丟進去
- 上方的網址自帶參數，參數為篩選條件，component接到篩選條件篩選出speech，故雖然網址一樣呈現的結果會不一樣。
- 每個speech都有自己的status, 故會呈現本週活動, 即將開始, 已經結束
