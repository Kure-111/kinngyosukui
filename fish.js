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
        //金魚の湧く範囲を変えたい時はここ
        this.minX = 250;
        this.maxX = 1200;
        this.minY = 190;
        this.maxY = 700;
    }
<<<<<<< HEAD



=======
//tests
>>>>>>> c8ee6e7eb10b40bb7f1c0357189df60f1a33f24b
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

    draw(rotation) {
        var image = new Image();
        image.src = 'img/' + this.color + '.png';
    
        ctx.save(); // 現在の描画状態を保存
    
        // キャンバスを魚の位置に移動
        ctx.translate(this.x, this.y);
    
        // 魚の動き方向とx軸との角度を計算
        var fishAngle = Math.atan2(Math.sin(this.direction), Math.cos(this.direction));
    
        // キャンバスを魚の角度+90度回転
        ctx.rotate(fishAngle + Math.PI / 2);
    
        // 魚の画像を描画し、頭をy軸に合わせて描画
        ctx.drawImage(image, -this.radius, -this.radius, this.radius * 2, this.radius * 2);
    
        ctx.restore(); // 前の描画状態に戻す
    }
    
    // 魚が網に捕まっているかどうか判定する関数
    isCaughtByPoi(x, y) {
        var dx = x - this.x;
        var dy = y - this.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        return distance < (this.radius + 50); // 50 is the radius of the poi
    }
}
