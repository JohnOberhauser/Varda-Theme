#!/bin/sh

dec=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}')

vol=$(echo "$dec * 100" | bc | awk -F "." '{print $1}')

echo $vol

increase() {
    if [[ $vol -le 95 ]]; then
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%+
    else
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 1
    fi
}

decrease() {
    if [[ $vol -ge 5 ]]; then
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%-
    else
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 0
    fi
}

mute() {
    wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle
}

if [ "$1" = "increase" ]; then
    increase
elif [ "$1" = "decrease" ]; then
    decrease
elif [ "$1" = "mute" ]; then
    mute
fi

$HOME/.config/hypr/scripts/notifications/showVolume.sh

