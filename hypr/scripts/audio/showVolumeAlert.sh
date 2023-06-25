#!/bin/sh

eww -c $HOME/.config/hypr/components/eww update volumeAlertLastUpdateTimeStamp=$(($(date +%s%N)/1000000))

LOCK_FILE="$HOME/.cache/eww-volume-alert.lock"

if [[ -f "$LOCK_FILE" ]]; then
    exit
fi

eww -c $HOME/.config/hypr/components/eww open volumeAlertWindow

$HOME/.config/hypr/scripts/audio/closeVolumeAlert.sh