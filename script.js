function diagnose() {


const name = document.getElementById("username").value.trim();


if (name === "") {
alert("名前を入力してください");
return;
}


const answers = [];


for (let i = 1; i <= 5; i++) {
const q = document.querySelector(`input[name=\"q${i}\"]:checked`);


if (!q) {
alert("すべての質問に答えてください");
return;
}


answers.push(q.value);
}


const aCount = answers.filter(a => a === "A").length;
const bCount = answers.filter(a => a === "B").length;


let type = "";
let jobs = "";


if (aCount >= 4) {
type = "🌱 安定・地域密着タイプ";
jobs = "公務員・地元企業・金融・インフラ";
}
else if (bCount >= 4) {
type = "🚀 チャレンジ型タイプ";
jobs = "IT・ベンチャー・広告・企画";
  }
else if (answers[1] === "A" && answers[3] === "A") {
type = "🤝 現場コミュニケーション型";
jobs = "営業・観光・販売・福祉・教育";
}
else if (answers[1] === "B" && answers[3] === "B") {
type = "💻 デスク集中型";
jobs = "事務・IT・研究・経理";
}
else {
type = "⚖️ バランス型";
jobs = "公務員・一般企業・サービス業・IT";
}


const resultText = `${name}さんのタイプ：${type}`;
const detailText = `おすすめ職種：${jobs}`;


document.getElementById("result").textContent = resultText;
document.getElementById("detail").textContent = detailText;


// シェア用に保存
window.shareMessage = `${resultText}
${detailText}
#就活診断`;
}


// SNSシェア機能
function shareResult() {


if (!window.shareMessage) {
alert("先に診断してください");
return;
}


if (navigator.share) {
  navigator.share({
text: window.shareMessage
});
}
else {
// 非対応ブラウザ用（コピー）
navigator.clipboard.writeText(window.shareMessage);
alert("結果をコピーしました！SNSに貼り付けて使ってください✨");
}
}
