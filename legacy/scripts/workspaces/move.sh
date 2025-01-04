#!/bin/bash

# takes 2 params
# 1: up or down
# 2: leftfirst or rightfirst (for determining which workspace should be focused after moving)

# prints each workspace on a new line
workspaces=$(hyprctl monitors | grep workspace | awk -F "(" '{print $2}' | awk -F ")" '{print $1}')
# grab first workspace
ws1=$(echo $workspaces | awk -F " " '{print $1}')
# grab second workspace
#ws2=$(echo $workspaces | awk -F " " '{print $2}')

echo "workspaces=$workspaces"
echo "ws1=$ws1"
#echo "ws2=$ws2"

if [[ $1 == "up" ]]; then
    new1=$(expr $ws1 - 1)
    #new2=$(expr $ws2 - 1)
else
    new1=$(expr $ws1 + 1)
    #new2=$(expr $ws2 + 1)
fi

echo "new1=$new1"
#echo "new2=$new2"

if [[ $new1 -lt 1 ]]; then
    exit
fi

#leftfirst() {
#  # make sure there was a workspace before we move (there might not be if a monitor is unplugged)
#  if [ -n "$ws1" ]; then
#    hyprctl dispatch workspace $new1
#  fi
#  if [ -n "$ws2" ]; then
#    hyprctl dispatch workspace $new2
#  fi
#}
#
#rightfirst() {
#    if [ -n "$ws2" ]; then
#        hyprctl dispatch workspace $new2
#    fi
#    if [ -n "$ws1" ]; then
#        hyprctl dispatch workspace $new1
#    fi
#}

hyprctl dispatch workspace $new1

#if [ "$2" = "leftfirst" ]; then
#    leftfirst
#elif [ "$2" = "rightfirst" ]; then
#    rightfirst
#else
#    rightfirst
#fi
