#!/bin/bash

# Currently unused

# Checks if controller is scanning for new devices
scan_on() {
    if bluetoothctl show | grep -q "Discovering: yes"; then
        echo "Scan: on"
        return 0
    else
        echo "Scan: off"
        return 1
    fi
}

# Toggles scanning state
toggle_scan() {
    if scan_on; then
        kill $(pgrep -f "bluetoothctl scan on")
        bluetoothctl scan off
        show_menu
    else
        bluetoothctl scan on &
        echo "Scanning..."
        sleep 5
        show_menu
    fi
}

if scan_on; then
    eww -c $HOME/.config/hypr/components/eww update bluetoothScanButtonText="Disable scanning"
    toggle_scan
else
    eww -c $HOME/.config/hypr/components/eww update bluetoothScanInProgress=true
    eww -c $HOME/.config/hypr/components/eww update bluetoothScanButtonText="Enable scanning"
    toggle_scan
    sleep 5
    eww -c $HOME/.config/hypr/components/eww update bluetoothScanInProgress=false
fi

$HOME/.config/hypr/scripts/bluetooth/updateDevices.sh