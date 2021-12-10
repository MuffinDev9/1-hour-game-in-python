//  Start
scene.setBackgroundColor(9)
let obj_rabbit_right = assets.image`spr_rabbit_right`
let obj_rabbit_left = assets.image`spr_rabbit_left`
let obj_left_run = assets.animation`anim_rabbit_run_left`
let obj_right_run = assets.animation`anim_rabbit_run_right`
let vx = 100
let vy = 0
let character = sprites.create(obj_rabbit_right, SpriteKind.Player)
character.ay = 500
character.setStayInScreen(true)
//  End
//  Rabbit sprites
//  Stopping Sprites
controller.left.onEvent(ControllerButtonEvent.Released, function on_left_released() {
    animation.stopAnimation(animation.AnimationTypes.All, character)
    character.setImage(obj_rabbit_left)
    
})
controller.right.onEvent(ControllerButtonEvent.Released, function on_right_released() {
    animation.stopAnimation(animation.AnimationTypes.All, character)
    character.setImage(obj_rabbit_right)
    
})
//  Animations
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    animation.runImageAnimation(character, obj_left_run, 200, true)
    
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    animation.runImageAnimation(character, obj_right_run, 200, true)
    
})
//  End
//  Controls
game.onUpdate(function controller_update() {
    controller.moveSprite(character, vx, vy)
    
})
//  End
//  Jump
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    if (controller.left.isPressed()) {
        character.setVelocity(-10, -250)
    } else if (controller.right.isPressed()) {
        character.setVelocity(10, -250)
    } else {
        character.setVelocity(0, -250)
    }
    
    
})
