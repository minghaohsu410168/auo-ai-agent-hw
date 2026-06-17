# 作業 1：打造專屬⾓⾊聊天機器⼈
## 任務描述
```
修改課程提供的 ChatManager，建⽴⼀個具有特定⾓⾊設定的聊天機器⼈。
⾓⾊選項建議（三選⼀）：
→
→ 選作業
→
1. ⼿搖飲推薦達⼈ - 專⾨推薦⼿搖飲品和甜度冰塊搭配
2. ⽇語旅遊會話⼩⽼師 - 教⽇常旅遊⽇語，例句需附中⽂翻譯
3. 星座聊天機器⼈ - 專⾨聊星座話題、給星座⼩建議的 AI 步驟指引：
1. 修改 system prompt，加⼊⾓⾊設定（背景、說話⾵格、專業領域）
2. 建⽴主程式，實作對話迴圈
3. 測試 5 輪以上對話，確認記憶功能正常
```
## 執行步驟
執行`node main.js`

## 執行結果
``` bash
@minghaohsu410168 ➜ /workspaces/auo-ai-agent-hw (ai-agent-hw1) $ node main.js 
✔ 請輸入你的問題： 請教我日常旅遊會用到的日語
太好了！我會當你的旅遊會話小老師，幫你學常用的旅遊日語句型、例句跟中文翻譯。我會記住你之後的問答與學習進度，讓教學有連貫性。先給你常用主題的句型＋例句（日文（假名／羅馬字）→ 中文翻譯）。如果你想要更多同類句型、練習對話或只要平假名/漢字/羅馬字某一種形式，告訴我你的偏好和目的地，我會記住並調整。

1) 基本招呼與禮貌
- こんにちは／konnichiwa → 你好（白天用）
- すみません／sumimasen → 不好意思、打擾一下（用於招呼、吸引注意）
- ありがとうございます／arigatou gozaimasu → 謝謝（正式）

2) 問路與交通
句型：〜はどこですか？（…在哪裡？）
- トイレはどこですか？／Toire wa doko desu ka? → 洗手間在哪裡？
句型：〜へ行きたいです。どう行けばいいですか？（想去…，要怎麼去？）
- 東京駅へ行きたいです。どう行けばいいですか？／Toukyou eki e ikitai desu. Dou ikeba ii desu ka? → 我想去東京車站，要怎麼去？
句型：この電車は〜に行きますか？（這班電車去…嗎？）
- この電車は渋谷に行きますか？／Kono densha wa Shibuya ni ikimasu ka? → 這班車去澀谷嗎？
- チケットをください／Chiketto o kudasai → 請給我一張票／我要買票

3) 住宿（飯店、民宿）
句型：予約しています。〜の名前で。／Yoyaku shiteimasu. 〜 no namae de.（我有預約，名字是…）
- 予約しています。王さんの名前で。／Yoyaku shiteimasu. Ou-san no namae de. → 我有預約，名字是王先生。
- チェックインをお願いします／Chekku-in o onegaishimasu → 我要辦理入住
- 部屋にWi‑Fiはありますか？／Heya ni Wi‑Fi wa arimasu ka? → 房間有Wi‑Fi嗎？
- チェックアウト／Chekku-auto → 退房

4) 餐廳用語
句型：メニューをください／Menyuu o kudasai → 請給我菜單
句型：おすすめは何ですか？／Osusume wa nan desu ka? → 有推薦的菜嗎？
- アレルギーがあります。〜が食べられません。／Arerugii ga arimasu. 〜 ga taberaremasen. → 我有過敏，不能吃…
  例：卵アレルギーです。卵が食べられません。／Tamago arerugii desu. Tamago ga taberaremasen. → 我對蛋過敏，不能吃蛋。
- お会計お願いします／Okaikei onegaishimasu → 請結帳

5) 購物與支付
句型：いくらですか？／Ikura desu ka? → 多少錢？
- カードは使えますか？／Kaado wa tsukaemasu ka? → 可以刷卡嗎？
- 免税ですか？／Menzei desu ka? → 可以免稅嗎？
- 領収書をください／Ryoushuusho o kudasai → 請給我發票／收據

6) 時間、預約、集合
- 今何時ですか？／Ima nanji desu ka? → 現在幾點？
- ～時に集合しましょう／… ji ni shuugou shimashou → 在…點集合吧
- 予約は何時ですか？／Yoyaku wa nanji desu ka? → 預約是幾點？

7) 緊急情況
- 助けてください！／Tasukete kudasai! → 請救命／請幫忙！
- 警察を呼んでください。／Keisatsu o yonde kudasai. → 請叫警察
- 病院はどこですか？／Byouin wa doko desu ka? → 醫院在哪裡？
- パスポートをなくしました。／Pasupooto o nakushimashita. → 我丟了護照

8) 常用請求句型（禮貌）
句型：〜てもいいですか？／… temo ii desu ka?（可以…嗎？）
- 写真を撮ってもいいですか？／Shashin o totte mo ii desu ka? → 可以幫我拍照嗎？
句型：〜してください／… shite kudasai（請做…）
- もう一度お願いします／Mou ichido onegaishimasu → 再說一次／請再說一遍

9) 小貼士（發音/禮貌）
- 遇到不確定時多用「すみません」「すみません、〜はどこですか？」比較禮貌。
- 「〜ください」是請求（直接但客氣）、「〜てもいいですか？」是詢問許可（更婉轉）。

要不要我們現在練習一個簡短對話？例如：
- 你在車站找廁所，或在餐廳點餐，我可以扮演店員/路人，你扮演旅客。我會記住你選的場景與常錯的句子，下次針對弱點加強練習。

告訴我：
1) 你下次想去的目的地（我會記住），
2) 想加強的主題（問路/餐廳/住宿/緊急等），
3) 要不要只顯示平假名、漢字＋假名還是加羅馬字。
✔ 請輸入你的問題： 我下次想要去京都
太好了，我會記住你下次要去京都，之後的教學我會以京都常用場景為主，幫你強化實用句型與對話。下面先給你一組針對京都旅行常會用到的句型（日文＋假名／羅馬字 → 中文翻譯），分門別類，之後我們可以針對你想加強的主題反覆練習。

交通／問路
- 京都駅はどこですか？（きょうとえきはどこですか）／Kyōto eki wa doko desu ka? → 京都車站在哪裡？  
- 伏見稲荷（口）へはどう行きますか？（ふしみいなりぐちへはどういきますか）／Fushimi‑Inari guchi e wa dō ikimasu ka? → 去伏見稻荷（入口）要怎麼走？  
- このバスは清水寺に行きますか？（このばすはきよみずでらにいきますか）／Kono basu wa Kiyomizu‑dera ni ikimasu ka? → 這班公車會去清水寺嗎？  
- 市バスの一日乗車券をください。（しばすのいちにちじょうしゃけんをください）／Shibasu no ichinichi jōshaken o kudasai. → 請給我市巴士一日券。  
- タクシーをお願いします。（たくしーをおねがいします）／Takushī o onegaishimasu. → 請叫計程車／我要搭計程車。

觀光／寺社（禮儀相關）
- 写真を撮ってもいいですか？（しゃしんをとってもいいですか）／Shashin o totte mo ii desu ka? → 可以拍照嗎？  
- お寺で静かにしてください。（おてらでしずかにしてください）／Otera de shizuka ni shite kudasai. → 在寺廟請保持安靜。  
- 御朱印はどこでもらえますか？（ごしゅいんはどこでもらえますか）／Goshuin wa doko de moraemasu ka? → 御朱印在哪裡領取？  
- 参拝の作法を教えてください。（さんぱいのさほうをおしえてください）／Sanpai no sahō o oshiete kudasai. → 請教我參拜的禮儀。

和服／租借（京都常見活動）
- 着物をレンタルしたいです。（きものをれんたるしたいです）／Kimono o rentaru shitai desu. → 我想租和服。  
- 髪のセットもお願いします。（かみのせっともおねがいします）／Kami no setto mo onegaishimasu. → 請幫我做髮型（也一起服務）。  
- 何時間レンタルですか？（なんじかんれんたるですか）／Nan‑jikan rentaru desu ka? → 租借多久？

餐廳／美食（抹茶、京料理）
- 抹茶のおすすめは何ですか？（まっちゃのおすすめはなんですか）／Matcha no osusume wa nan desu ka? → 有推薦的抹茶/抹茶甜點嗎？  
- 予約をしています、〜の名前です。（よやくをしています、〜のなまえです）／Yoyaku o shiteimasu, 〜 no namae desu. → 我有預約，名字是…  
- お会計お願いします。（おかいけいおねがいします）／Okaikei onegaishimasu. → 請結帳。

購物／伴手禮
- これはお土産に人気ですか？（これはおみやげににんきですか）／Kore wa omiyage ni ninki desu ka? → 這個當伴手禮受歡迎嗎？  
- 免税にできますか？（めんぜいにできますか）／Menzei ni dekimasu ka? → 可以辦免稅嗎？  
- 包装をお願いします。（ほうそうをおねがいします）／Hōsō o onegaishimasu. → 請幫我包裝。

住宿（旅館、民宿）
- 旅館を予約しています。チェックインをお願いします。（りょかんをよやくしています。ちぇっくいんをおねがいします）／Ryokan o yoyaku shiteimasu. Chekku‑in o onegaishimasu. → 我有預約旅館，要辦理入住。  
- お風呂（温泉）は何時から何時までですか？（おふろ（おんせん）はなんじからなんじまでですか）／Ofuro (onsen) wa nan‑ji kara nan‑ji made desu ka? → 溫泉開放時間是幾點到幾點？

緊急時
- 助けてください！（たすけてください）／Tasukete kudasai! → 請救命／請幫忙！  
- パスポートをなくしました。（ぱすぽーとをなくしました）／Pasupōto o nakushimashita. → 我的護照不見了。  
- 警察を呼んでください。（けいさつをよんでください）／Keisatsu o yonde kudasai. → 請叫警察。

小提醒（京都特別注意）
- 寺社內常要求安靜、不要在佛像前自拍大聲喧嘩。  
- 在神社參拜時注意洗手、鞠躬、投幣、兩次拍手等禮節（有問題可說「参拝の作法を教えてください」）。  
- 京都很多景點步行較多，記得帶舒服的鞋子、準備現金（小店可能不收卡）。

要不要現在練習一個簡短情境對話？例如：
- 場景 A：你在京都站找去伏見稻荷的路（我可以當站務/路人，你當旅客）  
- 場景 B：你在和服店要租和服並問髮型、時間、價格（我當店員）  
你也可以告訴我：
1) 想優先加強的主題（問路／餐廳／住宿／和服／購物／禮儀等），  
2) 顯示日文的格式偏好（只要平假名、漢字＋假名、或加羅馬字）。  

告訴我你的選項，我們馬上開始練習。我會記住你的選擇與學習進度，下一次再接著教。
✔ 請輸入你的問題： 我是旅客 在京都站找去伏見稻荷的路
很好，我們就以你在京都站找去伏見稻荷為情境來練習。我會當站務人員回應，你扮演旅客。先給你幾句最實用的句型（含漢字＋假名 / 羅馬字 → 中文），然後示範一段簡短對話，你可以直接回應我要練習的句子，我會幫你修正並接下去回答。

重要單字
- 伏見稲荷大社（ふしみいなりたいしゃ）／Fushimi‑Inari Taisha → 伏見稻荷大社  
- 稲荷駅（いなりえき）／Inari eki → 稻荷站  
- JR奈良線（JRならせん）／JR Nara‑sen → JR奈良線  
- 切符（きっぷ）／kippu → 車票

實用句型
- すみません、伏見稲荷へ行きたいです。どう行けばいいですか？（すみません、ふしみいなりへいきたいです。どういけばいいですか？）／Sumimasen, Fushimi‑Inari e ikitai desu. Dō ikeba ii desu ka? → 不好意思，我想去伏見稻荷，要怎麼走？  
- 京都駅からJR奈良線で稲荷駅まで行けます。（きょうとえきからJRならせんでいなりえきまでいけます。）／Kyōto‑eki kara JR Nara‑sen de Inari‑eki made ikemasu. → 從京都站搭JR奈良線可以到稻荷站。  
- 稲荷駅は一駅です、下車してすぐです。（いなりえきはいっきょくです、げしゃしてすぐです。）／Inari‑eki wa ikkyoku desu, gesha shite sugu desu. → 稻荷站只要一站，下車就到。  
- 切符を買いたいです。稲荷まで一枚ください。（きっぷをかいたいです。いなりまでいちまいください。）／Kippu o kaitai desu. Inari made ichimai kudasai. → 我要買票，請給我一張到稻荷的票。  
- タクシーで行く場合は約10分です。（たくしーでいくばあいはやく10ぷんです。）／Takushī de iku baai wa yaku jū‑pun desu. → 如果搭計程車約10分鐘。

示範對話（站務人員版）
旅客（你）：
- すみません、伏見稲荷へ行きたいです。どう行けばいいですか？（すみません、ふしみいなりへいきたいです。どういけばいいですか？）／Sumimasen, Fushimi‑Inari e ikitai desu. Dō ikeba ii desu ka?  
- 中文：不好意思，我想去伏見稻荷，要怎麼走？

站務（我）：
- 京都駅からJR奈良線に乗って、稲荷駅で降りてください。稲荷駅は一駅です。切符は券売機で「稲荷」と入力するか、窓口で「稲荷まで一枚お願いします」と言ってください。（きょうとえきからJRならせんにのって、いなりえきでおりてください。いなりえきはいっきょくです。きっぷはけんばいきで「いなり」とにゅうりょくするか、まどぐちで「いなりまでいちまいおねがいします」といってください。）／Kyōto‑eki kara JR Nara‑sen ni notte, Inari‑eki de orite kudasai. Inari‑eki wa ikkyoku desu. Kippu wa kenbaiki de "Inari" to nyūryoku suru ka, madoguchi de "Inari made ichimai onegaishimasu" to itte kudasai.  
- 中文：從京都站搭JR奈良線，在稻荷站下車就可以。稻荷站只要一站。車票可以在售票機輸入「稻荷」，或在售票窗口說「請給我一張到稻荷的票」。

站務 補充（常見問答）
- 何番線ですか？（なんばんせんですか？）／Nan‑ban sen desu ka? → 是哪個月台？  
- 改札口はどちらですか？（かいさつぐちはどちらですか？）／Kaisatsuguchi wa dochira desu ka? → 出口（改札）在哪邊？  
- きっぷはいくらですか？（きっぷはいくらですか？）／Kippu wa ikura desu ka? → 車票多少錢？（站務回應通常會說：運賃は〜円です。）

練習方式（現在就開始）
請你用日文（可以照上面的句型）說出你的第一句話（旅客），例如：「すみません、伏見稲荷へ行きたいです。どう行けばいいですか？」我會以站務人員身分用日文回應並給你糾正。如果你想，我也會只用平假名或加羅馬字顯示。

你想用哪一種顯示格式？（選一項，我會記住）
A. 漢字＋假名＋羅馬字  
B. 只要平假名＋羅馬字  
C. 只要假名（不加羅馬字）

請回一句日文旅客的句子，我們馬上練習。
✔ 請輸入你的問題： すみません、伏見稲荷へ行きたいです。どう行けばいいですか？ 只用平假名＋羅馬字
收到。我會用你選的平假名＋羅馬字格式回應，並且已記住你要去京都。下面是站務員會說的話，請參考並練習。

きょうとえきからＪＲならせんにのって、いなりえきでおりてください。  
Kyoto eki kara JR Nara-sen ni notte, Inari eki de orite kudasai.  
中文：從京都站搭JR奈良線，在稻荷站下車。

いなりえきはひとつめのえきです。おりてすぐです。  
Inari eki wa hitotsu‑me no eki desu. Orite sugu desu.  
中文：稻荷站是第一站，下車就到了。

きっぷはけんばいきで「いなり」とにゅうりょくするか、まどぐちで「いなりまでいちまいおねがいします」といってください。  
Kippu wa kenbaiki de "Inari" to nyūryoku suru ka, madoguchi de "Inari made ichimai onegaishimasu" to itte kudasai.  
中文：車票可以在售票機輸入「いなり」，或在窗口說「請給我一張到稻荷的票」。

たくしーをつかうばあいはやく10ぷんです。  
Takushii o tsukau baai wa yaku jū‑pun desu.  
中文：如果搭計程車大約10分鐘。

現在請你用平假名＋羅馬字回答：你要買切符還是要叫計程車？（例如：きっぷをください／Kippu o kudasai. 或 たくしーをおねがいします／Takushii o onegaishimasu.）我會扮演站務員繼續回應並幫你修正。
✔ 請輸入你的問題： きっぷをください
かしこまりました。いなりまでのきっぷでよろしいですか？  
Kashikomarimashita. Inari made no kippu de yoroshii desu ka?  
中文：好的。請問是一張到稻荷的車票嗎？

うんちんは150えんです。  
Unchin wa 150‑en desu.  
中文：車資是150日圓。

けんばいきのつかいかた：  
1. 「いなり」をえらんでください。  
2. ちょうしょく（おかね）をいれるか、すいかなどのICをタッチしてください。  
3. きっぷをうけとって、かいさつをとおってください。  
Kenbaiki no tsukaikata:  
1. "Inari" o erande kudasai.  
2. Chōshoku (okane) o ireru ka, Suica nado no IC o tacchi shite kudasai.  
3. Kippu o uketotte, kaisatsu o tōtte kudasai.  
中文：售票機使用方法：1. 選擇「いなり」。2. 投入現金或刷Suica等IC卡。3. 取票後通過閘口。

のりばは、でんしゃのはっぴょうばんごうでごかくにんしてください。  
Noriba wa, densha no happyō bangō de gokakunin kudasai.  
中文：月台請看列車顯示的發車月台號確認。

でんしゃはいっきょくですぐつきます。じかんはそんなにかかりません。  
Densha wa ikkyoku desu sugu tsukimasu. Jikan wa sonna ni kakarimasen.  
中文：搭電車只要一站，很快就到，不會花太多時間。

すこしえらびやすいれい：  
- いなりまでいちまいください。／Inari made ichimai kudasai.（請給我一張到稻荷）  
- すいかでおねがいします。／Suica de onegaishimasu.（我要用Suica付）  
- げんきんでおねがいします。／Genkin de onegaishimasu.（我要付現金）

どのほうがいいですか？げんきんですか、それともすいか（IC）ですか？（へんじはひらがな＋ろーまじでどうぞ）  
Dono hō ga ii desu ka? Genkin desu ka, soretomo Suica (IC) desu ka? (Henji wa hiragana + rōmaji de dōzo)  
中文：你要用現金還是Suica（IC卡）？請用平假名＋羅馬字回覆。
✔ 請輸入你的問題： げんきんでおねがいします。
かしこまりました。げんきんでうけたまわりました。  
Kashikomarimashita. Genkin de uketamawarimashita.  
中文：收到，了解您要用現金付款。

てんいん（わたし）：150えんです。おねがいします。  
Ten’in (watashi): 150‑en desu. Onegaishimasu.  
中文（店員）：150日圓，請付費。

りょこうきゃく（あなた）：はい、150えんです。  
Ryokōkyaku (anata): Hai, 150‑en desu.  
中文（旅客）：好，150日圓（給錢的句子）。

てんいん：ありがとうございます。きっぷをどうぞ。  
Ten’in: Arigatō gozaimasu. Kippu o dōzo.  
中文（店員）：謝謝，請拿好車票。

てんいん：かいさつはまっすぐです。はっぴょうばんごうをかくにんしてからのりばへいってください。  
Ten’in: Kaisatsu wa massugu desu. Happyō bangō o kakunin shite kara noriba e itte kudasai.  
中文（店員）：閘口在直走方向。請先確認發車月台號再前往月台。

れんしゅうようのべんりなせりふ（つかってみてください）：  
- 150えんをおねがいします。／150‑en o onegaishimasu. → （請給我150日圓。）  
- はい、どうぞ。／Hai, dōzo. → （給你。/ 請拿。）  
- きっぷをうけとりました。ありがとうございます。／Kippu o uketorimashita. Arigatō gozaimasu. → （我已收到車票，謝謝。）

これでだいじょうぶですか？つぎは「のりばはなんばんですか？」をれんしゅうしますか、それともけんばいきのしようをもういちどれんしゅうしますか？どちらがいいかへんじはひらがな＋ろーまじでどうぞ。  
Kore de daijōbu desu ka? Tsugi wa "Noriba wa nan‑ban desu ka?" o renshū shimasu ka, soretomo kenbaiki no shiyō o mō ichido renshū shimasu ka? Dochira ga ii ka henji wa hiragana + rōmaji de dōzo.  
中文：這樣可以嗎？接下來要練習「月台是幾號？」還是再練一次售票機的用法？請用平假名＋羅馬字回覆你選哪一項。
```
