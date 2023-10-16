#!/bin/bash

# Checks if a device is connected
device_connected() {
    device_info=$(bluetoothctl info "$1")
    if echo "$device_info" | grep -q "Connected: yes"; then
        return 0
    else
        return 1
    fi
}

# param 1 is index, param 2 is deviceName
update_device() {
    device=$2
    name=$(echo $device | cut -d ' ' -f 3-)
    mac=$(echo "$device" | cut -d ' ' -f 2)
    if device_connected "$mac"; then
        connected=true
    else
        connected=false
    fi
    echo "updating device $1: $name"
    echo "device connected: $connected"
    eww -c $HOME/.config/hypr/components/eww update bluetoothDevice$1Visible=true
    eww -c $HOME/.config/hypr/components/eww update bluetoothDevice$1Name="$name"
    eww -c $HOME/.config/hypr/components/eww update bluetoothDevice$1Connected="$connected"
    echo "device $1 updated"
}

devices=$(bluetoothctl devices | grep Device)
deviceNames=$(echo $devices | grep Device | cut -d ' ' -f 3-)

echo "$devices"
echo "======"
echo "$deviceNames"

# reset all visibility variables
eww -c $HOME/.config/hypr/components/eww update bluetoothDevice1Visible=false

index=1
echo $devices | while read -r device; do
    update_device $index "$device"
    index=$index+1
done
