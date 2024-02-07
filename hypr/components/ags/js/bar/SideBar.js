import {MenuButton, Workspaces} from "./barWidgets.js";

const Top = (vertical) => Widget.Box({
    vertical: vertical,
    children: [
        MenuButton,
        Workspaces(vertical),
    ],
});

const myLabel = Widget.Label({
    label: '1',
})

const Center = () => Widget.Box({
    spacing: 8,
    children: [

    ],
});

const Bottom = () => Widget.Box({
    spacing: 8,
    children: [

    ],
});

export default(vertical) => Widget.Window({
    monitor: 0,
    name: `sidebar`, // name has to be unique
    anchor: ['top', 'left', 'bottom'],
    exclusivity: 'exclusive',
    layer: 'top',
    class_name: 'bar',
    child: Widget.CenterBox({
        vertical: true,
        start_widget: Top(vertical),
        center_widget: Center(),
        end_widget: Bottom(),
    }),
});
