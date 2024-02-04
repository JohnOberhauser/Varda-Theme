#!/bin/bash

# listens for sleep events from systemd and triggers the lock screen

swayidle before-sleep 'swaylock -C $HOME/.config/hypr/components/swaylock/config'