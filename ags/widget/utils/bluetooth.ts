import Bluetooth from "gi://AstalBluetooth"
import {bind, Variable} from "astal"

export function getBluetoothIcon() {
    const bluetooth = Bluetooth.get_default()

    if (bluetooth.adapter == null) {
        return "󰂲"
    } else {
        return "󰂯"
    }
}

export function getBluetoothName() {
    const bluetooth = Bluetooth.get_default()
    if (bluetooth.adapter == null) {
        return "No bluetooth adapter"
    } else {
        return "Bluetooth"
    }
}
