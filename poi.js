var mouseX, mouseY; // マウスの座標

// ポイ(網)を描画する関数
function drawPoi(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2); // 50はポイの半径
    ctx.strokeStyle = "blue"; // ポイの色
    ctx.stroke();
}

// マウスを動かしたときのイベントリスナー
canvas.addEventListener('mousemove', function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 画面をクリア
    drawFish(); // 魚を描画
    var rect = canvas.getBoundingClientRect(); // キャンバスの位置情報を取得
    mouseX = e.clientX - rect.left; // マウスのx座標
    mouseY = e.clientY - rect.top; // マウスのy座標
    drawPoi(mouseX, mouseY); // ポイを描画
});

// キャンバスをクリックしたときのイベントリスナー
canvas.addEventListener('click', function (e) {
    if (gameRunning) {
        fishes = fishes.filter(function (fish) {
            if (fish.isCaughtByPoi(mouseX, mouseY)) {
                score += fish.points;
                updateScore(score); // スコアを更新
                return false;
            }
            return true;
        });
    }
});


