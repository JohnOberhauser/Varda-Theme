#!/bin/sh

brightness=$($HOME/.config/hypr/scripts/brightness/getBrightnessPercent.sh)

echo "current brightness: $brightness"

increase() {
    if [[ $brightness -le 95 ]]; then
        brightnessctl s 5%+
    else
        brightnessctl s 100%
    fi
    $HOME/.config/hypr/scripts/brightness/showBrightnessAlert.sh
}

decrease() {
    if [[ $brightness -ge 5 ]]; then
        brightnessctl s 5%-
    else
        brightnessctl s 0%
    fi
    $HOME/.config/hypr/scripts/brightness/showBrightnessAlert.sh
}

if [ "$1" = "increase" ]; then
    increase
elif [ "$1" = "decrease" ]; then
    decrease
fi
