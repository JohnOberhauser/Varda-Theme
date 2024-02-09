#!/bin/bash

deviceName="$1"

connected="$2"

echo "deviceName: $deviceName"
echo "connected: $connected"

mac=$(bluetoothctl devices | grep "$deviceName" | cut -d ' ' -f 2)

if [[ $connected = true ]]; then
    echo "disconnecting..."
    bluetoothctl disconnect "$mac"
else
    echo "connecting..."
    bluetoothctl connect "$mac"
fi