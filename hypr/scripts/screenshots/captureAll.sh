#!/bin/bash

grim $(xdg-user-dir PICTURES)/Screenshots/$(date +'%s_grim.png')

play $HOME/.config/hypr/assets/sounds/camera-shutter.ogg