#!/bin/sh

decimal=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}' | awk -F "[" '{print $1}')

muted=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}' | awk -F "[" '{print $2}' | awk -F "]" '{print $1}')

vol=$(echo "$decimal * 100" | bc | awk -F "." '{print $1}')

echo $vol
echo $muted

if [[ $muted == "MUTED" ]]; then
    image="../../assets/images/volume/mute.svg"
elif [[ $vol == 0 ]]; then
    image="../../assets/images/volume/mute.svg"
elif [[ $vol -le 33 ]]; then
    image="../../assets/images/volume/low.svg"
elif [[ $vol -le 66 ]]; then
    image="../../assets/images/volume/medium.svg"
else
    image="../../assets/images/volume/high.svg"
fi

eww -c $HOME/.config/hypr/components/eww update volumeAlertPercent=$vol
eww -c $HOME/.config/hypr/components/eww update volumeAlertImagePath=$image
eww -c $HOME/.config/hypr/components/eww update volumeAlertLastUpdateTimeStamp=$(($(date +%s%N)/1000000))
eww -c $HOME/.config/hypr/components/eww open volumeAlertWindow

$HOME/.config/hypr/scripts/audio/closeVolumeAlert.sh