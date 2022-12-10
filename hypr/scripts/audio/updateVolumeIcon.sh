#!/bin/bash

volumeIcon=$($HOME/.config/hypr/scripts/audio/getVolumeIcon.sh)

eww -c $HOME/.config/hypr/components/eww update volume_icon=$volumeIcon
eww -c $HOME/.config/hypr/components/eww update volume_icon2=$volumeIcon
eww -c $HOME/.config/hypr/components/eww update volume_icon3=$volumeIcon