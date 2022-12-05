info.startCountdown(120)

sprites.onOverlap(SpriteKind.Player,SpriteKind.Enemy ,function (sprite: Sprite, otherSprite: Sprite) {
info.changeLifeBy(-1)
otherSprite.destroy(effects.disintegrate, 100)
music.powerDown.play()
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(2)
    otherSprite.destroy(effects.disintegrate, 100)
    music.baDing.play()
    sprite.destroy()
})


controller.A.onEvent(ControllerButtonEvent.Pressed, function(){
    bullet= sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 5 . . . . . . . . . . . .
        . . 4 4 4 . . . . . . . . . . .
        . 5 4 2 4 5 . . . . . . . . . .
        . . 4 4 4 . . . . . . . . . . .
        . . . 5 . . . . . . . 5 . . . .
        . . . . . . . . . . 4 4 4 . . .
        . . . . . . . . . 5 4 2 4 5 . .
        . . . . . . . . . . 4 4 4 . . .
        . . . . . . . . . . . 5 . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, 0 , -100)
    bullet.setPosition(spaceship.x, spaceship.y)
    bullet.setKind(SpriteKind.Projectile)
})

scene.setBackgroundColor(15)
effects.starField.startScreenEffect()

let spaceship = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 2 . . . . . . . .
    . . . . . . 2 1 2 . . . . . . .
    . . . . . . 2 1 2 . . . . . . .
    . . . . 1 8 2 1 2 8 1 . . . . .
    . . . . 1 8 1 1 1 8 1 . . . . .
    . . . . 2 8 1 1 1 8 2 . . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    . . . . . 8 8 8 8 8 . . . . . .
    . . . . . 4 5 4 5 4 . . . . . .
    . . . . . . 2 . 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
let bullet: Sprite = null
let rocks: Sprite = null

controller.moveSprite(spaceship, 100, 0)
spaceship.setFlag(SpriteFlag.StayInScreen, true)
spaceship.setPosition(80, 110)
info.setLife(5)
info.setScore(0)

game.onUpdateInterval(500, function(){
    rocks = sprites.createProjectileFromSide(img`
        . . c c c c . .
        . c b d d d c .
        c b d d d d d c
        c b b d d d d c
        c b d b d d b c
        c c b d b b b c
        c c c b d d b c
        c c b b c c c c
    `, Math.randomRange(-20, -20), Math.randomRange(60, 80))
    rocks.setPosition(Math.randomRange(0, 160),0)
    rocks.setKind(SpriteKind.Enemy)
})