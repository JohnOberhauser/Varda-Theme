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
        Widget.Box({ css: "margin-top: 10px;" }),
        VolumeButton,
        Widget.Box({ css: "margin-top: 10px;" }),
        MicrophoneButton,
        Widget.Box({ css: "margin-top: 10px;" }),
        BatteryButton,
        Widget.Box({ css: "margin-top: 10px;" }),
        ClockButton,
        Widget.Box({ css: "margin-top: 6px;" }),
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
