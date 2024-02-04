#!/bin/bash

grim -g "$(slurp -o)" $(xdg-user-dir PICTURES)/Screenshots/$(date +'%s_grim.png')

play $HOME/.config/hypr/assets/sounds/camera-shutter.ogg