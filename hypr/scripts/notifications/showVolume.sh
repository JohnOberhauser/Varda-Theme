#!/bin/sh

dec=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}')

vol=$(echo "$dec * 100" | bc | awk -F "." '{print $1}')

echo $vol

if [[ $vol == 0 ]]; then
    image=$HOME/.config/hypr/assets/images/volume/mute.svg
elif [[ $vol -le 33 ]]; then
    image=$HOME/.config/hypr/assets/images/volume/low.svg
elif [[ $vol -le 66 ]]; then
    image=$HOME/.config/hypr/assets/images/volume/medium.svg
else
    image=$HOME/.config/hypr/assets/images/volume/high.svg
fi

dunstify -i $image -h int:value:"$vol" -a volumecontrol Volume