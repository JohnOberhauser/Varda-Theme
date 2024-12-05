import Bluetooth from "gi://AstalBluetooth"

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
