let successSound = new Audio('audio/get.mp3');
let failSound = new Audio('audio/out.mp3');

var poiImage = new Image(); // 新しい画像オブジェクトを作成
poiImage.src = 'img/poi.png'; // ポイの画像ファイルへのパスを設定

var poiBrakImage = new Image(); // 破れたポイの画像オブジェクトを作成
poiBrakImage.src = 'img/poibrak.png'; // 破れたポイの画像ファイルへのパスを設定

var isPoiBroken = false; // ポイが破れているかどうかを示すフラグ

var mouseX, mouseY; // マウスの座標

// ポイ(網)を描画する関数
function drawPoi(x, y) {
    var image = isPoiBroken ? poiBrakImage : poiImage; // ポイが破れている場合は破れた画像、そうでない場合は通常の画像を選択
    ctx.drawImage(image, x - 50, y - 50, 100, 200);
}

// マウスを動かしたときのイベントリスナー
canvas.addEventListener('mousemove', function (e) {
    var rect = canvas.getBoundingClientRect(); // キャンバスの位置情報を取得
    mouseX = e.clientX - rect.left; // マウスのx座標
    mouseY = e.clientY - rect.top; // マウスのy座標
});

// 定期的に画面を更新するタイマーを設定（10ミリ秒ごと）
setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 画面をクリア

    // ポイと金魚を描画
    drawPoi(mouseX, mouseY); // ポイを描画
    drawFish(); // 魚を描画
}, 10);

// キャンバスをクリックしたときのイベントリスナー
canvas.addEventListener('click', function (e) {
    if (gameRunning && !isPoiBroken) { // ポイが破れていないときのみ魚を捕まえられる
        var caught = false;

        for (let i = 0; i < fishes.length; i++) {
            let fish = fishes[i];
            if (fish.isCaughtByPoi(mouseX, mouseY) && Math.random() <= 0.9) {
                successSound.play(); // 魚が釣れたときの音声を再生
                score += fish.points;
                updateScore(score); // スコアを更新
                fishes.splice(i, 1);
                caught = true;
                break;
            }
        }

        if (!caught) { // 魚を捕まえられなかったとき、または50%の確率で釣りを失敗したとき
            failSound.play(); // 魚が釣れなかったときの音声を再生
            isPoiBroken = true; // ポイを破れた状態にする

            setTimeout(function () {
                isPoiBroken = false; // 0.5秒後にポイを元の状態に戻す
            }, 500);
        }
    }
});
