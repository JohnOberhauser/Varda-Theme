#!/bin/bash

seekPosition=$(echo "$(playerctl metadata --format "{{ (position / mpris:length) }}") * 100" | bc | awk -F "." '{print $1}')

echo $seekPosition

# eww -c $HOME/.config/hypr/components/eww update trackPosition=$seekPosition