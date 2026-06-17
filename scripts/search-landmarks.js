import { searchLandmarks } from "../lib/qdrant.js";

const queries = [
  "我想看日出和雲海，適合去哪裡？",
  "哪個景點適合騎自行車和搭船欣賞湖景？",
  "台北附近哪裡可以泡溫泉或賞花？",
];

for (const query of queries) {
  const results = await searchLandmarks(query, 3);

  console.log(`\n問題：${query}`);
  for (const [index, result] of results.entries()) {
    console.log(`${index + 1}. ${result.title}（${result.location}）`);
    console.log(`   分數：${result.score.toFixed(3)}`);
    console.log(`   特色：${result.features}`);
    console.log(`   描述：${result.description}`);
  }
}
