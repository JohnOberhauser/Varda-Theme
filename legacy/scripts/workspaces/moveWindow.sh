#!/bin/bash

workspace=$(hyprctl activewindow | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')

activeMonitor=$(hyprctl activewindow | grep monitor | awk -F ": " '{print $2}')

if [[ $1 == "up" ]]; then
    new=$(expr $workspace - 1)
else
    new=$(expr $workspace + 1)
fi

# don't do anything if the new workspace is out of bounds
if [[ $(echo $new | tail -c 2) -lt 1 ]]; then
    exit
fi

hyprctl dispatch movetoworkspacesilent $new

# right or left first to retain focus of window
if [ "$activeMonitor" = "0" ]; then
    $HOME/.config/hypr/scripts/workspaces/move.sh $1 rightfirst
else
    $HOME/.config/hypr/scripts/workspaces/move.sh $1 leftfirst
fi