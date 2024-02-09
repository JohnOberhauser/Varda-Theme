#!/bin/bash

brightnessIcon=$($HOME/.config/hypr/scripts/brightness/getBrightnessIcon.sh)

eww -c $HOME/.config/hypr/components/eww update brightness_icon=$brightnessIcon

newBrightness=$($HOME/.config/hypr/scripts/brightness/getBrightnessPercent.sh)

echo $newBrightness

eww -c $HOME/.config/hypr/components/eww update brightnessAlertPercent=$newBrightness
