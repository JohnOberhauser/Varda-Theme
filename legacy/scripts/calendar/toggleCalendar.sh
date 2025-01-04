#!/bin/bash

LOCK_FILE="$HOME/.cache/eww-calendar.lock"

if [[ ! -f "$LOCK_FILE" ]]; then
    touch "$LOCK_FILE"
    eww -c $HOME/.config/hypr/components/eww open calendarWindow
else
    eww -c $HOME/.config/hypr/components/eww close calendarWindow
    rm "$LOCK_FILE"
fi
