#!/bin/sh


decimal=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}' | awk -F "[" '{print $1}')

muted=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}' | awk -F "[" '{print $2}' | awk -F "]" '{print $1}')

vol=$(echo "$decimal * 100" | bc | awk -F "." '{print $1}')

echo $vol
echo $muted

if [[ $muted == "MUTED" ]]; then
    image=$HOME/.config/hypr/assets/images/volume/mute.svg
elif [[ $vol == 0 ]]; then
    image=$HOME/.config/hypr/assets/images/volume/mute.svg
elif [[ $vol -le 33 ]]; then
    image=$HOME/.config/hypr/assets/images/volume/low.svg
elif [[ $vol -le 66 ]]; then
    image=$HOME/.config/hypr/assets/images/volume/medium.svg
else
    image=$HOME/.config/hypr/assets/images/volume/high.svg
fi

dunstify -i $image -h int:value:"$vol" -a volumecontrol Volume