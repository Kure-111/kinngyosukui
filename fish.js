class Fish { // 魚クラス
    constructor(type) {
        this.x = Math.random() * canvas.width; // 魚のx座標(初期位置はランダム)
        this.y = Math.random() * canvas.height; // 魚のy座標(初期位置はランダム)
        this.radius = 20; // 魚の半径
        this.color = type.color; // 魚の色
        this.points = type.points; // 魚の得点
        this.speed = type.speed; // 魚の移動速度
        this.direction = Math.random() * Math.PI * 2; // 魚の移動方向(初期方向はランダム)
    }
//変えたところここから
    // 魚を描画する関数
    draw() {
        var image = new Image();
        image.src = 'img/' + this.color + '.png';
        ctx.drawImage(image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }
//ここまで

    // 魚の位置を更新する関数
    updatePosition() {
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        if (this.x < this.radius) this.direction = Math.PI - this.direction;
        else if (this.x > canvas.width - this.radius) this.direction = Math.PI - this.direction;
        if (this.y < this.radius) this.direction = -this.direction;
        else if (this.y > canvas.height - this.radius) this.direction = -this.direction;
    }

    // 魚が網に捕まっているかどうか判定する関数
    isCaughtByPoi(x, y) {
        var dx = x - this.x;
        var dy = y - this.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        return distance < (this.radius + 50); // 50 is the radius of the poi
    }
}
