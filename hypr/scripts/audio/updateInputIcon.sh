#!/bin/bash

icon=$($HOME/.config/hypr/scripts/audio/getInputIcon.sh)

eww -c $HOME/.config/hypr/components/eww update input_icon=$icon
