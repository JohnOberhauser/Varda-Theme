#!/bin/bash

# Checks if controller is scanning for new devices
#scan_on() {
#    if bluetoothctl show | grep -q "Discovering: yes"; then
#        echo "Scan: on"
#        return 0
#    else
#        echo "Scan: off"
#        return 1
#    fi
#}

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

echo "$devices"

index=1
# IFS sets the character separator for the for loop.  Set it to a new line instead of the default space.
IFS=$'\n'
for device in $devices
do
    update_device $index "$device"
    index=$((index+1))
done

# hide devices that are no longer available
$HOME/.config/hypr/scripts/bluetooth/hideDevices.sh $index
