#!/bin/bash

dec=$(wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk -F "Volume: " '{print $2}')

echo "$dec * 100" | bc