#!/bin/bash
wsa1=$1
wsa2=$2
wsa3=$3
wsa4=$4
wsa5=$5
wsb1=$6
wsb2=$7
wsb3=$8
wsb4=$9
wsb5=B5
focused_workspace=$(swaymsg -t get_workspaces | jq '.[] | select(.focused == true) | .name' | sed 's/"//g')

if [[ $focused_workspace == $wsa1 ]]; then
  swaymsg move container to workspace $wsa2
  swaymsg workspace $wsb2
  swaymsg workspace $wsa2
elif [[ $focused_workspace == $wsb1 ]]; then
  swaymsg move container to workspace $wsb2
  swaymsg workspace $wsa2
  swaymsg workspace $wsb2
elif [[ $focused_workspace == $wsa2 ]]; then
  swaymsg move container to workspace $wsa3
  swaymsg workspace $wsb3
  swaymsg workspace $wsa3
elif [[ $focused_workspace == $wsb2 ]]; then
  swaymsg move container to workspace $wsb3
  swaymsg workspace $wsa3
  swaymsg workspace $wsb3
elif [[ $focused_workspace == $wsa3 ]]; then
  swaymsg move container to workspace $wsa4
  swaymsg workspace $wsb4
  swaymsg workspace $wsa4
elif [[ $focused_workspace == $wsb3 ]]; then
  swaymsg move container to workspace $wsb4
  swaymsg workspace $wsa4
  swaymsg workspace $wsb4
elif [[ $focused_workspace == $wsa4 ]]; then
  swaymsg move container to workspace $wsa5
  swaymsg workspace $wsb5
  swaymsg workspace $wsa5
elif [[ $focused_workspace == $wsb4 ]]; then
  swaymsg move container to workspace $wsb5
  swaymsg workspace $wsa5
  swaymsg workspace $wsb5
elif [[ $focused_workspace == $wsa5 ]]; then
  swaymsg move container to workspace $wsa1
  swaymsg workspace $wsb1
  swaymsg workspace $wsa1
elif [[ $focused_workspace == $wsb5 ]]; then
  swaymsg move container to workspace $wsb1
  swaymsg workspace $wsa1
  swaymsg workspace $wsb1
fi
