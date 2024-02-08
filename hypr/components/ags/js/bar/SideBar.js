import {
    MenuButton,
    Workspaces,
    VolumeButton,
    MicrophoneButton,
    BatteryButton,
    BluetoothButton,
    ClockButton
} from "./barWidgets.js";
import {Window} from "../Windows.js"

const Top = (vertical) => Widget.Box({
    vertical: vertical,
    children: [
        MenuButton("padding-top: 6px;"),
        Workspaces(vertical),
    ],
});

const Center = (vertical) => Widget.Box({
    vertical: vertical,
    children: [

    ],
});

const Bottom = (vertical) => {
    const children = [
        Widget.Box({ vexpand: true}), // push everything to the bottom
        BluetoothButton("margin-top: 10px;"),
        VolumeButton("margin-top: 10px;"),
        MicrophoneButton("margin-top: 10px;"),
        BatteryButton("margin-top: 10px;"),
        ClockButton("margin-top: 10px; padding-bottom: 6px;"),
    ]

    return Widget.Box({
        vertical: vertical,
        vpack: "fill",
        vexpand: true,
        children: children,
    });
}

export default(vertical) => Widget.Window({
    monitor: 0,
    name: Window.SideBar, // name has to be unique
    anchor: ['top', 'left', 'bottom'],
    exclusivity: 'exclusive',
    layer: 'top',
    class_name: 'window',
    margins: [5, 5],
    child: Widget.CenterBox({
        css: "padding: 2px;",
        vertical: true,
        start_widget: Top(vertical),
        center_widget: Center(vertical),
        end_widget: Bottom(vertical),
    }),
});
