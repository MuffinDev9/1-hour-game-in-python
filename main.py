# Start

scene.set_background_color(9)
obj_rabbit_right = assets.image("""spr_rabbit_right""")
obj_rabbit_left = assets.image("""spr_rabbit_left""")
character = sprites.create(obj_rabbit_right, SpriteKind.player)

# End

# Rabbit sprites

def on_left_pressed():
    character.set_image(obj_rabbit_left)
    pass
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    character.set_image(obj_rabbit_right)
    pass
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

# End