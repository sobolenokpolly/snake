function drawField () {
    ctx.fillStyle = COLORS.border
    ctx.fillRect(0,0, cvs.width, cvs.height)

    ctx.fillStyle = COLORS.field[0]
    ctx.fillRect(
        BORDERS[3] * TILE,
        BORDERS[0] * TILE, 
        FIELD_SIZE.w * TILE, 
        FIELD_SIZE.h * TILE)
    for(let i=0; i<FIELD_SIZE.h; i++) {
        for(let j=0; j<FIELD_SIZE.w; j++) {
            if((j + i) % 2 == 0) {
                ctx.fillStyle = COLORS.field[1]
                ctx.fillRect(
                    (BORDERS[3] + j) * TILE,
                    (BORDERS[0] + i) * TILE, 
                     TILE, 
                     TILE)

            }
        }
    }
} 
