#!/bin/sh

# get the current volume for checks later
decimalValue=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}')

vol=$(echo "$decimalValue * 100" | bc | awk -F "." '{print $1}')

echo "current volume: $vol"

increase() {
    if [[ $vol -le 95 ]]; then
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%+
    else
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 1
    fi
    $HOME/.config/hypr/scripts/notifications/showVolume.sh
}

decrease() {
    if [[ $vol -ge 5 ]]; then
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 5%-
    else
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 0
    fi
    $HOME/.config/hypr/scripts/notifications/showVolume.sh
}

mute() {
    wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle
    $HOME/.config/hypr/scripts/notifications/showVolume.sh
}

value() {
    echo "value parameter: $1"
    if [[ $(bc -l <<< "$1 > 1") -eq 1 ]]; then # if param is greater than 1.0
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 1
    elif [[ $(bc -l <<< "$1 < 0") -eq 1 ]]; then # if param is less than 0.0
        wpctl set-volume @DEFAULT_AUDIO_SINK@ 0
    else
        wpctl set-volume @DEFAULT_AUDIO_SINK@ $1
    fi
}

if [ "$1" = "increase" ]; then
    increase
elif [ "$1" = "decrease" ]; then
    decrease
elif [ "$1" = "mute" ]; then
    mute
elif [ "$1" = "value" ]; then
    value $2
fi

newVol=$($HOME/.config/hypr/scripts/audio/getVolumePercent.sh)

echo "new volume: $newVol"

eww -c $HOME/.config/hypr/components/eww update volume_percent=$newVol

volumeIcon=$($HOME/.config/hypr/scripts/audio/getVolumeIcon.sh)

eww -c $HOME/.config/hypr/components/eww update volume_icon=$volumeIcon