#!/bin/bash

loop=$($HOME/.config/hypr/scripts/battery/isBatteryIconVisible.sh)

if [[ $loop == "true" ]]; then
    while true; do
        $HOME/.config/hypr/scripts/battery/updateBatteryIcon.sh
        eww -c $HOME/.config/hypr/components/eww update battery_icon_visible=true

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