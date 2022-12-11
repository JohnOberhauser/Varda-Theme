#!/bin/bash

workspaces=$(hyprctl monitors | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')
selected_workspace=$(echo $workspaces | awk -F " " '{print $2}')

ws1_icon=""
ws2_icon=""
ws3_icon=""
ws4_icon=""
ws5_icon=""

if [[ $selected_workspace == 1 ]] || [[ $selected_workspace == 2 ]]; then
    ws1_icon=""
elif [[ $selected_workspace == 3 ]] || [[ $selected_workspace == 4 ]]; then
    ws2_icon=""
elif [[ $selected_workspace == 5 ]] || [[ $selected_workspace == 6 ]]; then
    ws3_icon=""
elif [[ $selected_workspace == 7 ]] || [[ $selected_workspace == 8 ]]; then
    ws4_icon=""
elif [[ $selected_workspace == 9 ]] || [[ $selected_workspace == 10 ]]; then
    ws5_icon=""
fi

eww -c $HOME/.config/hypr/components/eww update ws1_icon=$ws1_icon
eww -c $HOME/.config/hypr/components/eww update ws2_icon=$ws2_icon
eww -c $HOME/.config/hypr/components/eww update ws3_icon=$ws3_icon
eww -c $HOME/.config/hypr/components/eww update ws4_icon=$ws4_icon
eww -c $HOME/.config/hypr/components/eww update ws5_icon=$ws5_icon
