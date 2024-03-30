const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');
const TILE = 55; 
const FIELD_SIZE = {
    w: 13, 
    h: 13
}
const BORDERS = [2,1,1,1]
FIELD_SIZE.full= {
    w: FIELD_SIZE.w + BORDERS[1] + BORDERS[3],
    h: FIELD_SIZE.h + BORDERS[0] + BORDERS[2],
}
const COLORS = {
    border: '#578a34',
    field:  ['#aad751', '#a2d149'],
    text:   '#000',
    snake:  ['#1c469d', '#4876ec'],
};
cvs.width = FIELD_SIZE.full.w * TILE;
cvs.height = FIELD_SIZE.full.h * TILE;

const INTERVAL = 170;
const APPLE_IMG_SRC = "./food.png";
const APPLE_IMG = new Image(TILE, TILE);
 APPLE_IMG.src = APPLE_IMG_SRC; 
const FOOD_CNT = 3;
const SCORE_FONT_SIZE = 64;
const SCORE_FONT_FAMILE = "sans-serif"