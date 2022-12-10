#!/bin/sh

eww -c $HOME/.config/hypr/components/eww update volumeAlertLastUpdateTimeStamp=$(($(date +%s%N)/1000000))
eww -c $HOME/.config/hypr/components/eww open volumeAlertWindow

$HOME/.config/hypr/scripts/audio/closeVolumeAlert.sh