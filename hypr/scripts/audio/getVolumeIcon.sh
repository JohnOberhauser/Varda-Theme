#!/bin/bash

outputName=$($HOME/.config/hypr/scripts/audio/getDefaultOutputName.sh)

decimal=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}' | awk -F "[" '{print $1}')

muted=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}' | awk -F "[" '{print $2}' | awk -F "]" '{print $1}')

vol=$(echo "$decimal * 100" | bc | awk -F "." '{print $1}')

if [[ $outputName == *"Headset"* ]]; then
    if [[ $muted == "MUTED" ]]; then
        echo "󰋐"
    elif [[ $vol == 0 ]]; then
        echo "󰋐"
    else
        echo "󰋎"
    fi
    exit
fi

if [[ $outputName == *"Buds"* ]]; then
    if [[ $muted == "MUTED" ]]; then
        echo "󰋐"
    elif [[ $vol == 0 ]]; then
        echo "󰋐"
    else
        echo "󰥰"
    fi
    exit
fi

if [[ $muted == "MUTED" ]]; then
    echo "󰝟"
elif [[ $vol == 0 ]]; then
    echo "󰝟"
elif [[ $vol -le 33 ]]; then
    echo ""
elif [[ $vol -le 66 ]]; then
    echo ""
else
    echo "󰕾"
fi
