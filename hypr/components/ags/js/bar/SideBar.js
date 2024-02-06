import {Workspaces} from "./barWidgets.js";

const Top = () => Widget.Box({
    spacing: 8,
    children: [
        Workspaces()
    ],
});

const myLabel = Widget.Label({
    label: '1',
})

const Center = () => Widget.Box({
    spacing: 8,
    children: [
        myLabel,
    ],
});

const Bottom = () => Widget.Box({
    spacing: 8,
    children: [
        myLabel,
    ],
});

export default Widget.Window({
    monitor: 0,
    name: `sidebar`, // name has to be unique
    anchor: ['top', 'left', 'bottom'],
    exclusivity: 'exclusive',
    layer: 'top',
    class_name: 'bar',
    child: Widget.CenterBox({
        vertical: true,
        start_widget: Top(),
        // center_widget: Center(),
        end_widget: Bottom(),
    }),
});
