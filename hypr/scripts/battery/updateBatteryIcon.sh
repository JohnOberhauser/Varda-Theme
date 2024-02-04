#!/bin/bash

echo "Updating icon..."

icon=$($HOME/.config/hypr/scripts/battery/getBatteryIcon.sh)

eww -c $HOME/.config/hypr/components/eww update battery_icon=$icon

echo "Icon updated"