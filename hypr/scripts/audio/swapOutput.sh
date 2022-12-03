#!/bin/bash

wpctl set-default $($HOME/.config/hypr/scripts/audio/getNonDefaultOutputId.sh)

outputName=$($HOME/.config/hypr/scripts/audio/getDefaultOutputName.sh)

eww -c $HOME/.config/hypr/components/eww update volume_output_name="$outputName"