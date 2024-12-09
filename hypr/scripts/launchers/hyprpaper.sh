#!/bin/bash

nohup hyprpaper > /dev/null 2>&1 &
sleep 1
$HOME/.config/hypr/scripts/setWallpaper.sh $(cat $HOME/.config/hypr/themeName)