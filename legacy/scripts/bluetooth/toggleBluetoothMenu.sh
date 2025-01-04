#!/bin/bash

LOCK_FILE="$HOME/.cache/eww-bluetooth-menu.lock"

if [[ ! -f "$LOCK_FILE" ]]; then
    touch "$LOCK_FILE"
    ( $HOME/.config/hypr/scripts/bluetooth/hideDevices.sh & )
    eww -c $HOME/.config/hypr/components/eww open bluetoothWindowCloser
    eww -c $HOME/.config/hypr/components/eww open bluetoothWindow
    ( $HOME/.config/hypr/scripts/bluetooth/updateDevices.sh & )
else
    eww -c $HOME/.config/hypr/components/eww close bluetoothWindowCloser
    eww -c $HOME/.config/hypr/components/eww close bluetoothWindow
    rm "$LOCK_FILE"
fi
