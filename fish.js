class Fish { // 魚クラス
    constructor(type) {
        this.x = Math.random() * canvas.width; // 魚のx座標(初期位置はランダム)
        this.y = Math.random() * canvas.height; // 魚のy座標(初期位置はランダム)
        this.radius = 20; // 魚の半径
        this.color = type.color; // 魚の色
        this.points = type.points; // 魚の得点
        this.speed = type.speed; // 魚の移動速度
        this.direction = Math.random() * Math.PI * 2; // 魚の移動方向(初期方向はランダム)
        this.randomDirectionCounter = 10; // 初期値として10を設定

        // 金魚が動ける範囲を定義（新しく追加した部分）
        this.minX = 310;
        this.maxX = 1600;
        this.minY = 140;
        this.maxY = 870;
    }

    // 魚を描画する関数
    draw() {
        var image = new Image();
        image.src = 'img/' + this.color + '.png';
        ctx.drawImage(image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }

    // 魚の位置を更新する関数
    updatePosition() {
        if (this.randomDirectionCounter <= 0) { // カウンターが0以下の場合、新しいランダムな方向を設定
            this.direction = Math.random() * Math.PI * 2;
            this.randomDirectionCounter = 10; // カウンターをリセット
        } else {
            this.randomDirectionCounter--; // カウンターを減少させる
        }

        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        // 金魚が新しい位置に移動した後、その位置が範囲内に収まるように調整（新しく追加した部分）
        this.x = Math.max(this.minX, Math.min(this.maxX, this.x));
        this.y = Math.max(this.minY, Math.min(this.maxY, this.y));
    }

    // 魚が網に捕まっているかどうか判定する関数
    isCaughtByPoi(x, y) {
        var dx = x - this.x;
        var dy = y - this.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        return distance < (this.radius + 50); // 50 is the radius of the poi
    }
}
