import {MicrophoneSliderRow, VolumeSliderRow} from "./VolumeSliderRow.js";

export default Widget.Window({
    monitor: 0,
    name: `systemMenu`, // name has to be unique
    anchor: ['top', 'left'],
    exclusivity: 'normal',
    layer: 'overlay',
    class_name: 'systemMenuWindow',
    popup: true,
    margins: [5, 5],
    child: Widget.Box({
        vertical: true,
        children: [
            VolumeSliderRow,
            MicrophoneSliderRow,
        ]
    }),
});