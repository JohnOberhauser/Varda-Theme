#!/bin/bash

decimal=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}' | awk -F "[" '{print $1}')

muted=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}' | awk -F "[" '{print $2}' | awk -F "]" '{print $1}')

vol=$(echo "$decimal * 100" | bc | awk -F "." '{print $1}')

if [[ $muted == "MUTED" ]]; then
    echo "婢"
elif [[ $vol == 0 ]]; then
    echo "婢"
elif [[ $vol -le 33 ]]; then
    echo ""
elif [[ $vol -le 66 ]]; then
    echo ""
else
    echo "墳"
fi