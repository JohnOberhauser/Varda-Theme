#!/bin/sh

eww -c $HOME/.config/hypr/components/eww update brightnessAlertLastUpdateTimeStamp=$(($(date +%s%N)/1000000))

LOCK_FILE="$HOME/.cache/eww-brightness-alert.lock"

if [[ -f "$LOCK_FILE" ]]; then
    $HOME/.config/hypr/scripts/brightness/updateBrightnessIcon.sh
    exit
fi

eww -c $HOME/.config/hypr/components/eww open brightnessAlertWindow
$HOME/.config/hypr/scripts/brightness/updateBrightnessIcon.sh

$HOME/.config/hypr/scripts/brightness/closeBrightnessAlert.sh