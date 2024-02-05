#!/bin/bash

loop=$($HOME/.config/hypr/scripts/battery/isBatteryIconVisible.sh)

if [[ $loop == "true" ]]; then
    while true; do
        info=$(acpi -b)
        battery=$(echo $info | awk -F ", " '{print $2}' | awk -F "%" '{print $1}')
        isCharging=$(echo $info | grep Charging)

        if [[ $battery -le 5 ]] && [[ $info != *"Charging"* ]]; then
            echo "sound"
            play $HOME/.config/hypr/assets/sounds/battery-low.ogg &> /dev/null &
        fi
        sleep 120
    done
fi