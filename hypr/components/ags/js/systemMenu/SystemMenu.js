import {VolumeSlider} from "./VolumeSlider.js";

export default Widget.Window({
    monitor: 0,
    name: `systemMenu`, // name has to be unique
    anchor: ['top', 'left'],
    exclusivity: 'normal',
    layer: 'overlay',
    class_name: 'bar',
    popup: true,
    child: Widget.Box({
        vertical: true,
        children: [
            VolumeSlider,
        ]
    }),
});