#!/bin/bash

workspace=$(hyprctl activewindow | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')
diff=2
monitor=$(hyprctl activewindow | grep monitor | awk -F ": " '{print $2}')

new=$(expr $workspace - $diff)

hyprctl dispatch movetoworkspacesilent $new

# right or left first to retain focus of window
if [ "$monitor" = "0" ]; then
    $HOME/.config/hypr/scripts/workspaces/moveUp.sh rightfirst
else
    $HOME/.config/hypr/scripts/workspaces/moveUp.sh leftfirst
fi