function diagnose() {


const answers = [];


for (let i = 1; i <= 5; i++) {
const q = document.querySelector(`input[name="q${i}"]:checked`);


if (!q) {
alert("すべての質問に答えてください");
return;
}


answers.push(q.value);
}


const aCount = answers.filter(a => a === "A").length;
const bCount = answers.filter(a => a === "B").length;


let type = "";
let detail = "";


if (aCount >= 4) {
type = "🌱 安定・地域密着タイプ";
detail = "公務員・地元企業・金融系がおすすめ";
}
else if (bCount >= 4) {
type = "🚀 チャレンジ型タイプ";
detail = "IT・ベンチャー・企画職向き";
}
else if (answers[1] === "A" && answers[3] === "A") {
type = "🤝 現場コミュニケーション型";
detail = "営業・観光・福祉・教育向き";
}
else if (answers[1] === "B" && answers[3] === "B") {
type = "💻 デスク集中型";
detail = "事務・IT・研究職向き";
}
else {
type = "⚖️ バランス型";
detail = "幅広く挑戦できるタイプ";
}


document.getElementById("result").textContent = "あなたのタイプ：" + type;
document.getElementById("detail").textContent = detail;
}
