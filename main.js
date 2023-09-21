var canvas = document.getElementById('pond');
var ctx = canvas.getContext('2d');

var fishTypes = [
    { color: 'red', points: 1, speed: 2 },
    { color: 'black', points: 2, speed: 3 },
    { color: 'gold', points: 3, speed: 4 },
];

var gameSystem = new GameSystem('score', 'time','countRed', 'countBlack', 'countGold');
var stage = new Stage(fishTypes, gameSystem, canvas, ctx);
var poi = new Poi(canvas, ctx);

canvas.addEventListener('mousemove', function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stage.drawFish();
    var rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    poi.draw(mouseX, mouseY);
});

canvas.addEventListener('click', function (e) {
    if (gameSystem.isGameRunning()) {
        stage.catchFish(poi);
    }
});

setInterval(function () {
    if (gameSystem.isGameRunning()) {
        if (Math.random() < 0.05) {
            stage.createFish();
        }
        stage.updateFishPositions();
        gameSystem.reduceTime();
        gameSystem.checkGameEnd();
    }
}, 1000);
