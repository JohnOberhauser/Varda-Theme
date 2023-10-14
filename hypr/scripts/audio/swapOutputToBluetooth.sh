#!/bin/bash

#sleep 3

echo "Swapping output to bluetooth..."

BLUETOOTH_ID=$(wpctl status | sed -n '/Sinks:/,$p' | awk '1;/Sink endpoints:/{exit}' | tail -n +2 | head -n -2 | grep 'Buds' | awk '{print $2}' | awk -F "." '{print $1}')

echo $BLUETOOTH_ID

wpctl set-default $BLUETOOTH_ID

$HOME/.config/hypr/scripts/audio/updateVolumeIcon.sh