class Snake {
    body = [ 
        //{
        //     x: 0,
        //     y: 0,
        // }
    ];
    gap = 0.03;
    isFed = false;

    constructor(gap,initSize) {
        this.gap = gap;
        for(let i=0; i<initSize; i++) {
            this.addElement(i,Math.floor(FIELD_SIZE.h/2))    

        }
    }
    addElement(x,y) {
        this.body.unshift({
            x: x,
            y: y, 
        })
    }
    draw() {
        for(let i = 0; i<this.body.length; i++) {
            if (i === 0){
                ctx.fillStyle = COLORS.snake[0]
            } else {
                ctx.fillStyle = COLORS.snake[1]
            }
            const el = this.body[i] 
            ctx.fillRect(
                (BORDERS[3] + el.x) * TILE,
                (BORDERS[0] + el.y) * TILE, 
                 TILE, 
                 TILE)
        }
    } 
    move(direction) { 
        let newElement = { ... this.body[0] } 
        if (direction ==='up') {
            newElement.y--;
        } 
        if (direction ==='down') {
            newElement.y++;
        } 
        if (direction ==='left') {
            newElement.x--;
        } 
        if (direction ==='right') {
            newElement.x++;
        } 
        if (this.isFed === false) {
            this.body.pop()
        } 
        else {
            this.isFed = false;

        }
        
        this.addElement(newElement.x , newElement.y) 

    }
    checkDeadCollision() {
        const isXBeyondBorders = this.body[0].x === -1 || this.body[0].x === FIELD_SIZE.w 
        const isYBeyondBorders = this.body[0].y === -1 || this.body[0].y === FIELD_SIZE.h
        return isXBeyondBorders || isYBeyondBorders 
    } 
    checkEatCollision(foodStorage) {
        for ( let i of foodStorage) {
            if (i.x === this.body[0].x && i.y === this.body[0].y ) {
                return i;
            }
        }
        return null;

    }
}
const snake = new Snake (0,3)
 