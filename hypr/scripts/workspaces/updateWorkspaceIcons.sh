#!/bin/bash

workspaces=$(hyprctl monitors | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')
ws1=$(echo $workspaces | awk -F " " '{print $2}')

if [[ $ws1 == 1 ]] || [[ $ws1 == 2 ]]; then
    eww -c $HOME/.config/hypr/components/eww update ws1_icon=
    eww -c $HOME/.config/hypr/components/eww update ws2_icon=
    eww -c $HOME/.config/hypr/components/eww update ws3_icon=
    eww -c $HOME/.config/hypr/components/eww update ws4_icon=
    eww -c $HOME/.config/hypr/components/eww update ws5_icon=
elif [[ $ws1 == 3 ]] || [[ $ws1 == 4 ]]; then
    eww -c $HOME/.config/hypr/components/eww update ws1_icon=
    eww -c $HOME/.config/hypr/components/eww update ws2_icon=
    eww -c $HOME/.config/hypr/components/eww update ws3_icon=
    eww -c $HOME/.config/hypr/components/eww update ws4_icon=
    eww -c $HOME/.config/hypr/components/eww update ws5_icon=
elif [[ $ws1 == 5 ]] || [[ $ws1 == 6 ]]; then
    eww -c $HOME/.config/hypr/components/eww update ws1_icon=
    eww -c $HOME/.config/hypr/components/eww update ws2_icon=
    eww -c $HOME/.config/hypr/components/eww update ws3_icon=
    eww -c $HOME/.config/hypr/components/eww update ws4_icon=
    eww -c $HOME/.config/hypr/components/eww update ws5_icon=
elif [[ $ws1 == 7 ]] || [[ $ws1 == 8 ]]; then
    eww -c $HOME/.config/hypr/components/eww update ws1_icon=
    eww -c $HOME/.config/hypr/components/eww update ws2_icon=
    eww -c $HOME/.config/hypr/components/eww update ws3_icon=
    eww -c $HOME/.config/hypr/components/eww update ws4_icon=
    eww -c $HOME/.config/hypr/components/eww update ws5_icon=
elif [[ $ws1 == 9 ]] || [[ $ws1 == 10 ]]; then
    eww -c $HOME/.config/hypr/components/eww update ws1_icon=
    eww -c $HOME/.config/hypr/components/eww update ws2_icon=
    eww -c $HOME/.config/hypr/components/eww update ws3_icon=
    eww -c $HOME/.config/hypr/components/eww update ws4_icon=
    eww -c $HOME/.config/hypr/components/eww update ws5_icon=
fi
