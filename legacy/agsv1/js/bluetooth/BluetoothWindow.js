import {Window} from "../Windows.js";
import {BluetoothSettingsButton, ConnectedDevices} from "./BluetoothWidgets.js";

export default (anchor) => Widget.Window({
    monitor: 0,
    name: Window.Bluetooth, // name has to be unique
    anchor: anchor,
    exclusivity: 'normal',
    layer: 'overlay',
    className: 'window',
    margins: [5, 5],
    visible: false,
    child: Widget.Box({
        vertical: true,
        css: "padding: 20px;",
        children: [
            ConnectedDevices,
            BluetoothSettingsButton("margin-top: 20px;"),
        ]
    }),
});