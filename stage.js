var canvas = document.getElementById('pond'); // キャンバス要素を取得
var ctx = canvas.getContext('2d'); // 描画コンテキストを取得

var fishes = []; // 魚オブジェクトを格納する配列
var fishTypes = [
    { color: 'red', points: 1, speed: 2 },
    { color: 'black', points: 2, speed: 3 },
    { color: 'gold', points: 3, speed: 4 },
];



// 魚を生成する関数
function createFish() {
    var fishType = fishTypes[Math.floor(Math.random() * fishTypes.length)]; // 魚の種類をランダムに選ぶ
    var fish = new Fish(fishType); // 魚オブジェクトを生成
    fishes.push(fish); // 魚オブジェクトを配列に追加
}

// 魚を描画する関数
function drawFish() {
    fishes.forEach(function (fish) {
        fish.draw();
    });
}

// 100ミリ秒ごとにこの関数を呼び出す
setInterval(function () {
    if (gameRunning) {
        if (Math.random() < 0.1) { // 10%の確率で魚を生成
            createFish();
        }
    }
    fishes.forEach(function (fish) {
        fish.updatePosition(); // 魚の位置を更新
    });
}, 100);



