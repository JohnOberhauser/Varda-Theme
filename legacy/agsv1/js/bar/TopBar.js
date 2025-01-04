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
    let iconCss = "margin-left: 10px;"
    return Widget.Box({
        vertical: false,
        children: [
            Widget.Box({ hexpand: true}), // push everything to the bottom
            ScreenRecordingButton(iconCss),
            VolumeButton(iconCss),
            MicrophoneButton(iconCss),
            BluetoothButton(iconCss),
            NetworkButton(iconCss),
            BatteryButton(iconCss),
            MenuButton("margin-right: 10px;"),
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
        css: `
            padding: 2px;
            min-height: 40px;
        `,
        vertical: false,
        start_widget: Left(),
        center_widget: Center(),
        end_widget: Right(),
    }),
});
