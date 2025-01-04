import {
    MenuButton,
    Workspaces,
    VolumeButton,
    MicrophoneButton,
    BatteryButton,
    BluetoothButton,
    ClockButton,
    ScreenRecordingButton,
    NetworkButton,
} from "./BarWidgets.js";
import {Window} from "../Windows.js"

const Top = () => Widget.Box({
    vertical: true,
    children: [
        MenuButton("padding-top: 6px;"),
        Workspaces(true),
    ],
});

const Center = () => Widget.Box({
    vertical: true,
    children: [

    ],
});

const Bottom = () => {
    return Widget.Box({
        vertical: true,
        vpack: "fill",
        vexpand: true,
        children: [
            Widget.Box({ vexpand: true}), // push everything to the bottom
            ScreenRecordingButton("margin-top: 10px;"),
            VolumeButton("margin-top: 10px;"),
            MicrophoneButton("margin-top: 10px;"),
            BluetoothButton("margin-top: 10px;"),
            NetworkButton("margin-top: 10px;"),
            BatteryButton("margin-top: 10px;"),
            ClockButton("margin-top: 10px; padding-bottom: 6px;", false),
        ],
    });
}

export default Widget.Window({
    monitor: 0,
    name: Window.SideBar, // name has to be unique
    anchor: ['top', 'left', 'bottom'],
    exclusivity: 'exclusive',
    layer: 'top',
    class_name: 'window',
    margins: [5, 5],
    child: Widget.CenterBox({
        css: `
            padding: 2px;
            min-width: 40px;
        `,
        vertical: true,
        start_widget: Top(),
        center_widget: Center(),
        end_widget: Bottom(),
    }),
});
