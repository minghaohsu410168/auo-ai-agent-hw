# 作業 2：新增⼀個 Function Calling ⼯具
```
任務描述：參考課程的天氣⼯具，新增⼀個「單位換算」⼯具，讓 AI 可以進⾏
單位換算。
```

## 執行步驟
`執行 node main.js`

## 執行結果
``` bash
@minghaohsu410168 ➜ /workspaces/auo-ai-agent-hw (ai-agent-hw2) $ node main.js 
✔ 請輸入你的問題： 25度C是華氏幾度

[呼叫 tool] convert_unit({"value":25,"from_unit":"C","to_unit":"F"})
25°C 等於 77°F。
✔ 請輸入你的問題： 10公里等於幾英里


[呼叫 tool] convert_unit({"value":10,"from_unit":"km","to_unit":"mile"})
10 公里 ≈ 6.21371 英里（約 6.21 英里）。

換算公式：英里 = 公里 × 0.621371。需要我幫你換算成四捨五入到其他位數嗎？
✔ 請輸入你的問題： 
✔ 請輸入你的問題： 70公斤是幾磅

[呼叫 tool] convert_unit({"value":70,"from_unit":"kg","to_unit":"lb"})
70 公斤 ≈ 154.3234 磅（約 154.32 lb）。需要我換算成四捨五入到不同位數或換其他單位嗎？
? 請輸入你的問題：
```
