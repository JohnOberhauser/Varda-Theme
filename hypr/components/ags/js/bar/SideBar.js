import {MenuButton, Workspaces, VolumeButton, MicrophoneButton, BatteryButton, BluetoothButton} from "./barWidgets.js";
import {Window} from "../Windows.js"

const battery = await Service.import('battery')

const Top = (vertical) => Widget.Box({
    vertical: vertical,
    children: [
        Widget.Box({ css: "margin-top: 6px;" }),
        MenuButton,
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
        BluetoothButton,
        VolumeButton,
        MicrophoneButton,
    ]

    if (battery.available) {
        // @ts-ignore
        children.push(BatteryButton)
    }

    children.push(
        Widget.Box({ css: "margin-top: 6px;" }),
    )

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
    margins: [5, 0],
    child: Widget.CenterBox({
        vertical: true,
        start_widget: Top(vertical),
        center_widget: Center(vertical),
        end_widget: Bottom(vertical),
    }),
});
