#!/bin/bash

nohup swayidle timeout 10 'hyprctl dispatch dpms off' \
    resume 'hyprctl dispatch dpms on' \
    &> /dev/null &

if [[ $VARDA == "laptop" ]]; then
    swaylock -C $HOME/.config/hypr/components/swaylock/config_laptop
else
    swaylock -C $HOME/.config/hypr/components/swaylock/config
fi

pkill swayidle
