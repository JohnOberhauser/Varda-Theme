import {Workspaces} from "../widgets/barWidgets.js";

const Top = () => Widget.Box({
    spacing: 8,
    children: [
        Workspaces()
    ],
});

const myLabel = Widget.Label({
    label: 'some example content',
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

    ],
});

export const Bar = (monitor = 0) => Widget.Window({
    monitor,
    name: `sidebar`, // name has to be unique
    anchor: ['top', 'left', 'bottom'],
    // exclusivity: 'exclusive',
    child: Widget.CenterBox({
        vertical: true,
        start_widget: Top(),
        center_widget: Center(),
        end_widget: Bottom(),
    }),
});
