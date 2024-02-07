import {MenuButton, Workspaces, VolumeButton, MicrophoneButton} from "./barWidgets.js";
import {Window} from "../Windows.js"

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

const Bottom = (vertical) => Widget.Box({
    vertical: vertical,
    vpack: "fill",
    vexpand: true,
    children: [
        Widget.Box({ vexpand: true}),
        VolumeButton,
        MicrophoneButton,
        Widget.Box({ css: "margin-top: 6px;" }),
    ],
});

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
