#!/bin/bash

LOCK_FILE="$HOME/.cache/eww-system-menu.lock"

if [[ ! -f "$LOCK_FILE" ]]; then
    touch "$LOCK_FILE"
    eww -c $HOME/.config/hypr/components/eww open systemMenuWindowCloser
    eww -c $HOME/.config/hypr/components/eww open systemMenuWindow
else
    eww -c $HOME/.config/hypr/components/eww close systemMenuWindowCloser
    eww -c $HOME/.config/hypr/components/eww close systemMenuWindow
    rm "$LOCK_FILE"
fi
