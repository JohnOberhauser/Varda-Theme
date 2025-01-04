#!/bin/bash

swayidle timeout 60 'systemctl suspend' \
    &> /dev/null &

if [[ $VARDA == "laptop" ]]; then
    swaylock -C $HOME/.config/hypr/components/swaylock/config_laptop
else
    swaylock -C $HOME/.config/hypr/components/swaylock/config
fi

pkill swayidle
