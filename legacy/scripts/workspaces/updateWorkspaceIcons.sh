#!/bin/bash

workspaces=$(hyprctl monitors | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')
selected_workspace=$(echo $workspaces | awk -F " " '{print $1}')

echo "workspaces=$workspaces"
echo "selected_workspace=$selected_workspace"

ws1_icon=""
ws2_icon=""
ws3_icon=""
ws4_icon=""
ws5_icon=""

#if [[ $selected_workspace == 1 ]] || [[ $selected_workspace == 11 ]]; then
#    ws1_icon=""
#elif [[ $selected_workspace == 2 ]] || [[ $selected_workspace == 12 ]]; then
#    ws2_icon=""
#elif [[ $selected_workspace == 3 ]] || [[ $selected_workspace == 13 ]]; then
#    ws3_icon=""
#elif [[ $selected_workspace == 4 ]] || [[ $selected_workspace == 14 ]]; then
#    ws4_icon=""
#elif [[ $selected_workspace == 5 ]] || [[ $selected_workspace == 15 ]]; then
#    ws5_icon=""
#fi

if [[ $selected_workspace == 1 ]]; then
    ws1_icon=""
elif [[ $selected_workspace == 2 ]]; then
    ws2_icon=""
elif [[ $selected_workspace == 3 ]]; then
    ws3_icon=""
elif [[ $selected_workspace == 4 ]]; then
    ws4_icon=""
elif [[ $selected_workspace == 5 ]]; then
    ws5_icon=""
fi

eww -c $HOME/.config/hypr/components/eww update ws1_icon=$ws1_icon
eww -c $HOME/.config/hypr/components/eww update ws2_icon=$ws2_icon
eww -c $HOME/.config/hypr/components/eww update ws3_icon=$ws3_icon
eww -c $HOME/.config/hypr/components/eww update ws4_icon=$ws4_icon
eww -c $HOME/.config/hypr/components/eww update ws5_icon=$ws5_icon
