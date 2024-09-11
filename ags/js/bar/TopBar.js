import {
    MenuButton,
    Workspaces,
    VolumeButton,
    MicrophoneButton,
    BatteryButton,
    BluetoothButton,
    ClockButton,
    ScreenRecordingButton,
} from "./BarWidgets.js";
import {Window} from "../Windows.js"

const Left = () => Widget.Box({
    vertical: false,
    children: [
        Workspaces(false),
    ],
});

const Center = () => Widget.Box({
    vertical: false,
    children: [
        ClockButton("", true),
    ],
});

const Right = () => {
    let iconCss = "margin-left: 10px; padding-left: 10px; padding-right: 10px;"
    return Widget.Box({
        vertical: false,
        children: [
            Widget.Box({ hexpand: true}), // push everything to the bottom
            ScreenRecordingButton(iconCss),
            BluetoothButton(iconCss),
            VolumeButton(iconCss),
            MicrophoneButton(iconCss),
            BatteryButton(iconCss),
            MenuButton("margin-left: 10px; padding-left: 10px; padding-right: 20px;"),
        ],
    });
}

export default Widget.Window({
    monitor: 0,
    name: Window.SideBar, // name has to be unique
    anchor: ['top', 'left', 'right'],
    exclusivity: 'exclusive',
    layer: 'top',
    class_name: 'window',
    margins: [5, 5],
    child: Widget.CenterBox({
        css: "padding: 2px;",
        vertical: false,
        start_widget: Left(),
        center_widget: Center(),
        end_widget: Right(),
    }),
});
