#!/bin/bash

# listens for sleep events from systemd and triggers the lock screen

if [[ $VARDA == "laptop" ]]; then
    swayidle before-sleep 'swaylock -C $HOME/.config/hypr/components/swaylock/config_laptop'
else
    swayidle before-sleep 'swaylock -C $HOME/.config/hypr/components/swaylock/config'
fi 