var score = 0; // スコアの初期値
var time = 30; // タイムの初期値
var gameRunning = true; // ゲームが進行中かどうかのフラグ
var countRed = 0;
var countBlack = 0;
var countGold = 0;

// スコアを更新する関数
function updateScore(newScore) {
    score = newScore;
    document.getElementById('score').textContent = 'Score: ' + score;
}

//金魚別カウント
function updateCountRed(newRed) {
    countRed = newRed;
    document.getElementById('countRed').innerHTML = '<img src="img/red.png" alt="Red: " width="50" height="50">' + ":" + countRed;
}

function updateCountBlack(newBlack) {
    countBlack = newBlack;
    document.getElementById('countBlack').innerHTML = '<img src="img/black.png" alt="Black: " width="50" height="50">' + ":" + countBlack;
}

function updateCountGold(newGold) {
    countGold = newGold;
    document.getElementById('countGold').innerHTML = '<img src="img/gold.png" alt="Gold: " width="50" height="50">' + ":" + countGold;
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




