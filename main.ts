//  Start
scene.setBackgroundColor(9)
let obj_rabbit_right = assets.image`spr_rabbit_right`
let obj_rabbit_left = assets.image`spr_rabbit_left`
let character = sprites.create(obj_rabbit_right, SpriteKind.Player)
//  End
//  Rabbit sprites
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    character.setImage(obj_rabbit_left)
    
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    character.setImage(obj_rabbit_right)
    
})
