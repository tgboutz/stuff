let mySprite = sprites.create(img`
    . . . f . 2 f . . . 
    . . f 1 f f 4 f . . 
    . . . f . . 2 . . . 
    . f . . . . . 2 f . 
    f 1 f . . . . f 1 f 
    . f 1 f f f f 1 f . 
    . . f 1 1 1 1 f . . 
    . . . f f f f . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.getPlayerBySprite(mySprite), sprites.create(img`
    . . . f . 2 f . . . 
    . . f 1 f f 4 f . . 
    . . . f . . 2 . . . 
    . f . . . . . 2 f . 
    f 1 f . . . . f 1 f 
    . f 1 f f f f 1 f . 
    . . f 1 1 1 1 f . . 
    . . . f f f f . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
tiles.setCurrentTilemap(tilemap`level6`)
