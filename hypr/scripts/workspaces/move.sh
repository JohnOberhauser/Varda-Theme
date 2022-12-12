#!/bin/bash

# takes 2 params
# 1: up or down
# 2: leftfirst or rightfirst (for determining which workspace should be focused after moving)

workspaces=$(hyprctl monitors | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')
ws1=$(echo $workspaces | awk -F " " '{print $1}')
ws2=$(echo $workspaces | awk -F " " '{print $2}')

if [[ $1 == "up" ]]; then
    new1=$(expr $ws1 - 1)
    new2=$(expr $ws2 - 1)
else
    new1=$(expr $ws1 + 1)
    new2=$(expr $ws2 + 1)
fi

if [[ $new1 < 1 ]] || [[ $new1 > 5 ]]; then
    exit
fi

leftfirst() {
    hyprctl dispatch workspace $new1
    hyprctl dispatch workspace $new2
}

rightfirst() {
    hyprctl dispatch workspace $new2
    hyprctl dispatch workspace $new1
}

if [ "$2" = "leftfirst" ]; then
    leftfirst
elif [ "$2" = "rightfirst" ]; then
    rightfirst
else
    rightfirst
fi

$HOME/.config/hypr/scripts/workspaces/updateWorkspaceIcons.sh