#!/bin/bash

workspaces=$(hyprctl monitors | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')
ws1=$(echo $workspaces | awk -F " " '{print $1}')
ws2=$(echo $workspaces | awk -F " " '{print $2}')
diff=2

new1=$(expr $ws1 - $diff)
new2=$(expr $ws2 - $diff)

leftfirst() {
    echo left
    if [[ $new1 -ge 1 ]]; then
        hyprctl dispatch workspace $new1
        hyprctl dispatch workspace $new2
    fi
}

rightfirst() {
    echo right
    if [[ $new1 -ge 1 ]]; then
        hyprctl dispatch workspace $new2
        hyprctl dispatch workspace $new1
    fi
}

if [ "$1" = "leftfirst" ]; then
    leftfirst
elif [ "$1" = "rightfirst" ]; then
    rightfirst
else
    rightfirst
fi

$HOME/.config/hypr/scripts/workspaces/updateWorkspaceIcons.sh