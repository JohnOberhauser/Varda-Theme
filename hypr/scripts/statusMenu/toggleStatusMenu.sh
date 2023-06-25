#!/bin/bash

LOCK_FILE="$HOME/.cache/eww-status-menu.lock"

if [[ ! -f "$LOCK_FILE" ]]; then
    touch "$LOCK_FILE"
    eww -c $HOME/.config/hypr/components/eww open statusMenuWindowCloser
    eww -c $HOME/.config/hypr/components/eww open statusMenuWindow
else
    eww -c $HOME/.config/hypr/components/eww close statusMenuWindowCloser
    eww -c $HOME/.config/hypr/components/eww close statusMenuWindow
    rm "$LOCK_FILE"
fi
