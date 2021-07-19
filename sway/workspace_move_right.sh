#!/bin/bash
wsa1=$1
wsa2=$2
wsa3=$3
wsb1=$4
wsb2=$5
wsb3=$6
focused_workspace=$(swaymsg -t get_workspaces | jq '.[] | select(.focused == true) | .name')

if [[ $focused_workspace == *$wsa1* ]]; then
  swaymsg workspace $wsb2
  swaymsg workspace $wsa2
elif [[ $focused_workspace == *$wsb1* ]]; then
  swaymsg workspace $wsa2
  swaymsg workspace $wsb2
elif [[ $focused_workspace == *$wsa2* ]]; then
  swaymsg workspace $wsb3
  swaymsg workspace $wsa3
elif [[ $focused_workspace == *$wsb2* ]]; then
  swaymsg workspace $wsa3
  swaymsg workspace $wsb3
elif [[ $focused_workspace == *$wsa3* ]]; then
  swaymsg workspace $wsb1
  swaymsg workspace $wsa1
elif [[ $focused_workspace == *$wsb3* ]]; then
  swaymsg workspace $wsa1
  swaymsg workspace $wsb1
fi
