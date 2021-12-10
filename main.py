# Start

scene.set_background_color(9)
obj_rabbit_right = assets.image("""spr_rabbit_right""")
obj_rabbit_left = assets.image("""spr_rabbit_left""")
obj_left_run = assets.animation("""anim_rabbit_run_left""")
obj_right_run = assets.animation("""anim_rabbit_run_right""")
vx = 100
vy = 0
character = sprites.create(obj_rabbit_right, SpriteKind.player)
character.ay = 500
character.set_stay_in_screen(True)

# End

# Rabbit sprites

# Stopping Sprites
def on_left_released():
    animation.stop_animation(animation.AnimationTypes.ALL, character)
    character.set_image(obj_rabbit_left)
    pass
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_right_released():
    animation.stop_animation(animation.AnimationTypes.ALL, character)
    character.set_image(obj_rabbit_right)
    pass
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

# Animations
def on_left_pressed():
    animation.run_image_animation(character, obj_left_run, 200, True)
    pass
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    animation.run_image_animation(character, obj_right_run, 200, True)
    pass
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

# End

# Controls

def controller_update():
    controller.move_sprite(character, vx, vy)
    pass
game.on_update(controller_update)

# End

# Jump

def on_a_pressed():
    if character.vy == 0:
        character.set_velocity(10, -250)
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# End