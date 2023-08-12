// スコアをURLのパラメータから取得
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');
document.getElementById("finalScore").innerText = "Score: " + score;

// タイトル画面へ遷移する関数
function goToTitle() {
    window.location.href = "start.html";
}
