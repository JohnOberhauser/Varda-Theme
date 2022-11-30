#!/bin/bash

workspaces=$(hyprctl monitors | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')
ws2=$(echo $workspaces | awk -F " " '{print $2}')
activeWS=$(expr $ws2 / 2)

if [[ $activeWS == 1 ]]; then
    eww -c $HOME/.config/hypr/components/eww update ws1_icon=
    eww -c $HOME/.config/hypr/components/eww update ws2_icon=
    eww -c $HOME/.config/hypr/components/eww update ws3_icon=
    eww -c $HOME/.config/hypr/components/eww update ws4_icon=
    eww -c $HOME/.config/hypr/components/eww update ws5_icon=
elif [[ $activeWS == 2 ]]; then
    eww -c $HOME/.config/hypr/components/eww update ws1_icon=
    eww -c $HOME/.config/hypr/components/eww update ws2_icon=
    eww -c $HOME/.config/hypr/components/eww update ws3_icon=
    eww -c $HOME/.config/hypr/components/eww update ws4_icon=
    eww -c $HOME/.config/hypr/components/eww update ws5_icon=
elif [[ $activeWS == 3 ]]; then
    eww -c $HOME/.config/hypr/components/eww update ws1_icon=
    eww -c $HOME/.config/hypr/components/eww update ws2_icon=
    eww -c $HOME/.config/hypr/components/eww update ws3_icon=
    eww -c $HOME/.config/hypr/components/eww update ws4_icon=
    eww -c $HOME/.config/hypr/components/eww update ws5_icon=
elif [[ $activeWS == 4 ]]; then
    eww -c $HOME/.config/hypr/components/eww update ws1_icon=
    eww -c $HOME/.config/hypr/components/eww update ws2_icon=
    eww -c $HOME/.config/hypr/components/eww update ws3_icon=
    eww -c $HOME/.config/hypr/components/eww update ws4_icon=
    eww -c $HOME/.config/hypr/components/eww update ws5_icon=
elif [[ $activeWS == 5 ]]; then
    eww -c $HOME/.config/hypr/components/eww update ws1_icon=
    eww -c $HOME/.config/hypr/components/eww update ws2_icon=
    eww -c $HOME/.config/hypr/components/eww update ws3_icon=
    eww -c $HOME/.config/hypr/components/eww update ws4_icon=
    eww -c $HOME/.config/hypr/components/eww update ws5_icon=
fi
