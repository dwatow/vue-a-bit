# good_idea_font_stage

> 練習接api

## 說明
- 利用axios將資料接進來
1. 先排序
2. 利用moment.js宣告現在時間 ```"2018-03-22"```
3. 每個物件加上status, eg:comming, today, past

- 把顯示speech的區塊變成components
- 篩選區塊用input radio做，radio決定filter_condition，filter_condition再傳到components裡，component接到篩選條件篩選出speech
  - 把input渲染出的英文變成中文
- 每個speech都有自己的status, 故會呈現本週活動, 即將開始, 已經結束
