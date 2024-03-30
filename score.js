class Score {
    x;
    y;
    cnt;
    fontFamily;
    fontSize;
    constructor(x, y, initCnt, fontSize, fontFamily) {
        this.cnt = initCnt;
        this.y = y;
        this.x = x; 
        this.fontFamily = fontFamily;
        this.fontSize = fontSize;
    }
    increment() {
        this.cnt++
    }
    draw() {
        ctx.fillStyle = COLORS.text
        ctx.font = this.fontSize + "px " +  this.fontFamily 
        ctx.textBaseline = 'middle'; 
        ctx.fillText("score: " + this.cnt, this.x, this.y)
    }
}
