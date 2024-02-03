#!/bin/bash

brightness=$($HOME/.config/hypr/scripts/brightness/getBrightnessPercent.sh)

if [[ $brightness -le 33 ]]; then
    echo "󰃞"
elif [[ $brightness -le 66 ]]; then
    echo "󰃝"
else
    echo "󰃠"
fi
