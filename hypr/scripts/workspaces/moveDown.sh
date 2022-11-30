#!/bin/bash

workspaces=$(hyprctl monitors | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')
ws1=$(echo $workspaces | awk -F " " '{print $1}')
ws2=$(echo $workspaces | awk -F " " '{print $2}')
diff=2

new1=$(expr $ws1 + $diff)
new2=$(expr $ws2 + $diff)

if [[ $new2 -le 10 ]]; then
    hyprctl dispatch workspace $new1
    hyprctl dispatch workspace $new2
fi

$HOME/.config/hypr/scripts/workspaces/updateWorkspaceIcons.sh