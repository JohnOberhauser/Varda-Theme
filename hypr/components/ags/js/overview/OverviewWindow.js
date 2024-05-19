import {Window} from "../Windows.js";

export default (anchor) => Widget.Window({
    monitor: 0,
    name: Window.Overview, // name has to be unique
    anchor: anchor,
    exclusivity: 'normal',
    layer: 'overlay',
    className: 'window',
    margins: [5, 5],
    visible: false,
    child: Widget.Box({
        vertical: true,
        css: "padding: 20px;",
        children: [
            Widget.Calendar({
                className: "calendar"
            }),
        ]
    }),
});