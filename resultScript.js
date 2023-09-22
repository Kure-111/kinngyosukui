// スコアをURLのパラメータから取得
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');
const countRed = urlParams.get('countRed');
const countBlack = urlParams.get('countBlack');
const countGold = urlParams.get('countGold');

document.getElementById("finalScore").innerText = "Score: " + score;
document.getElementById("finalRed").innerText = "Red: " + countRed;
document.getElementById("finalBlack").innerText = "Black: " + countBlack;
document.getElementById("finalGold").innerText = "Gold: " + countGold;
 
// タイトル画面へ遷移する関数
function goToTitle() {
    window.location.href = "start.html";
}
