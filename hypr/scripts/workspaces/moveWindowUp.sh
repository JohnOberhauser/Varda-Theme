#!/bin/bash

workspace=$(hyprctl activewindow | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')
diff=2

new=$(expr $workspace - $diff)

hyprctl dispatch movetoworkspacesilent $new

$HOME/.config/hypr/scripts/workspaces/moveUp.sh