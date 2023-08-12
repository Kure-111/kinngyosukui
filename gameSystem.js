var score = 0; // スコアの初期値
var time = 30; // タイムの初期値
var gameRunning = true; // ゲームが進行中かどうかのフラグ

// スコアを更新する関数
function updateScore(newScore) {
    score = newScore;
    document.getElementById('score').textContent = 'Score: ' + score;
}

// タイムを更新する関数
function updateTime() {
    if (gameRunning) {
        time -= 1;
        document.getElementById('time').textContent = 'Time: ' + time;
        if (time <= 0) { // タイムが0になったらゲーム終了
            gameRunning = false;
            window.location.href = "result.html?score=" + score; // リザルト画面への遷移
        }
    }
}

// 1秒ごとにupdateTime関数を呼び出す
setInterval(updateTime, 1000);




