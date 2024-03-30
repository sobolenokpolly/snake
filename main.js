let Direction = ""
let GAME_LOOP = null 
let foodStorage = []
let score = new Score(TILE, BORDERS[0] / 2 * TILE, 0, SCORE_FONT_SIZE, SCORE_FONT_FAMILE)

function handleKeyDown (event) {
    let key = event.key
    if (  Direction != "down" && (key === "w" || key === "ArrowUp" || key === "W")) {
       Direction = "up"
    }
    if ( Direction != "left" && ( key === "d" || key === "ArrowRight" || key === "D")) {
        Direction = "right"
     }
     if ( Direction != "right" && ( key === "a" || key === "ArrowLeft" || key === "A")) {
        Direction = "left"
     }
     if ( Direction != "up" && ( key === "s" || key === "ArrowDown" || key === "S")) {
        Direction = "down"
     }
     if ( GAME_LOOP === null && Direction != "" ) {
        GAME_LOOP = setInterval(() => { 
            main()
        }, INTERVAL);
     }
}
document.addEventListener("keydown", handleKeyDown) 

drawField()
snake.draw()
score.draw()
APPLE_IMG.onload = () => {
    for (let i = 0; i < FOOD_CNT; i++) {
        const food = new Food(APPLE_IMG, [...snake.body, ...foodStorage])
        foodStorage.push(food)
        food.draw() 
    }
}

function main() { 
    snake.move(Direction)
    if (snake.checkDeadCollision()) {
        clearInterval(GAME_LOOP) 
        alert ("you lost") 
        return
    }
    const x = snake.checkEatCollision(foodStorage) 
    if (x != null) { 
       x.updatePosition([...snake.body, ...foodStorage])
       snake.isFed = true;
       score.increment()
    }
    
    drawField()
    snake.draw()
    for (let a of foodStorage) {
        a.draw()
    }
   score.draw()

}


