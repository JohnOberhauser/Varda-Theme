#!/bin/bash

nohup swayidle timeout 20 'hyprctl dispatch dpms off' \
    resume 'hyprctl dispatch dpms on' \
    &> /dev/null &

swaylock -C $HOME/.config/hypr/components/swaylock/config

pkill swayidle
