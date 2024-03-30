class Food  {
    x;
    y;
    img;

    constructor(img, collidable) {
        this.img = img;
        this.updatePosition(collidable);
    }
    generatePosition(collidable) {
        let position = {
            x:Math.floor(Math.random() * FIELD_SIZE.w),
            y:Math.floor(Math.random() * FIELD_SIZE.h) 
        } 
        for (let element of collidable) {
            if (element.x === position.x && element.y === position.y) {
                position = this.generatePosition(collidable)
            }
        }
        return position
    }
    updatePosition(collidable) {
        let position = this.generatePosition(collidable);
        this.x = position.x;
        this.y = position.y;
    }
    draw() { 
        ctx.drawImage( 
            this.img,
            (BORDERS[3] + this.x) * TILE,
            (BORDERS[0] + this.y) * TILE, 
             TILE, 
             TILE)
    }
}

