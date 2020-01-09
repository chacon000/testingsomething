sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let BlueberryDude = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 9 9 . . . . . . . 
. . . . . . 9 9 9 9 . . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . 9 . 9 9 9 9 9 9 9 9 . 9 . . 
. . 9 . 9 9 9 9 9 9 9 9 . 9 . . 
. . 9 . 9 9 f 9 9 f 9 9 . 9 . . 
. . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. . . . 9 9 f f f f 9 9 . . . . 
. . . . 9 9 9 9 9 9 9 9 . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 . . . . 9 . . . . . 
. . . . . 9 . . . . 9 . . . . . 
. . . . 9 9 . . . . 9 9 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
BlueberryDude.y = 100
controller.moveSprite(BlueberryDude, 100, 0)
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . f . f f f f . f . f . . . 
. . . f f f 7 7 f f f f f . . . 
. . f f 7 7 7 7 7 7 7 7 f f f . 
. f f 7 7 f 7 7 7 7 f 7 f f . . 
. f f 7 1 2 f 7 7 f 2 1 f . . . 
. . f 7 7 7 7 7 7 7 7 7 f f f . 
. . f f 7 7 f f f f 7 7 7 f . . 
. . f f 7 f 7 7 7 7 f 7 7 7 f . 
. . . f 7 7 7 7 7 7 7 7 7 f f . 
. . f f 7 7 f f f f f f f f . . 
. . f 7 7 7 f . f . . f . f . . 
. . f f f f f . . . . . . . . . 
. . . f . f . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 0)
    projectile.x = Math.randomRange(0, scene.screenWidth())
    info.changeScoreBy(1)
})
