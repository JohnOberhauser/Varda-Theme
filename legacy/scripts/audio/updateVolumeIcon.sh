#!/bin/bash

volumeIcon=$($HOME/.config/hypr/scripts/audio/getVolumeIcon.sh)

eww -c $HOME/.config/hypr/components/eww update volume_icon=$volumeIcon
eww -c $HOME/.config/hypr/components/eww update volume_icon2=$volumeIcon
eww -c $HOME/.config/hypr/components/eww update volume_icon3=$volumeIcon

newVol=$($HOME/.config/hypr/scripts/audio/getVolumePercent.sh)

echo "new volume: $newVol"

eww -c $HOME/.config/hypr/components/eww update volumeAlertPercent=$newVol
eww -c $HOME/.config/hypr/components/eww update volume_percent2=$newVol
