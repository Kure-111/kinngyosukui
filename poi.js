var poiImage = new Image(); // 新しい画像オブジェクトを作成
poiImage.src = 'img/poi.png'; // ポイの画像ファイルへのパスを設定

var poiBrakImage = new Image(); // 破れたポイの画像オブジェクトを作成
poiBrakImage.src = 'img/poibrak.png'; // 破れたポイの画像ファイルへのパスを設定

var isPoiBroken = false; // ポイが破れているかどうかを示すフラグ

var mouseX, mouseY; // マウスの座標

// ポイ(網)を描画する関数
function drawPoi(x, y) {
    var image = isPoiBroken ? poiBrakImage : poiImage; // ポイが破れている場合は破れた画像、そうでない場合は通常の画像を選択
    ctx.drawImage(image, x - 50, y - 100, 100, 200); // 画像を描画（50は画像の半分のサイズ）
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
    if (gameRunning && !isPoiBroken) { // ポイが破れていないときのみ魚を捕まえられる
        var caught = false;
        fishes = fishes.filter(function (fish) {
            if (fish.isCaughtByPoi(mouseX, mouseY)) {
                score += fish.points;
                updateScore(score); // スコアを更新
                caught = true;
                return false;
            }
            return true;
        });

        if (!caught) { // 魚を捕まえられなかったとき
            isPoiBroken = true; // ポイを破れた状態にする
            setTimeout(function () {
                isPoiBroken = false; // 1秒後にポイを元の状態に戻す
            }, 1000);
        }
    }
});



