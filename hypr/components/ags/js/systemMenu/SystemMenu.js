import {MicrophoneSliderRow, VolumeSliderRow} from "./VolumeSliderRow.js";
import {PowerOptionsRow} from "./PowerOptionsRow.js";
import {Window} from "../Windows.js"

export default Widget.Window({
    monitor: 0,
    name: Window.SystemMenu, // name has to be unique
    anchor: ['top', 'left'],
    exclusivity: 'normal',
    layer: 'overlay',
    className: 'systemMenuWindow',
    popup: true,
    margins: [5, 5],
    visible: false,
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Box({ css: "margin-top: 20px;" }),
            VolumeSliderRow,
            MicrophoneSliderRow,
            Widget.Box({ css: "margin-top: 20px;" }),
            PowerOptionsRow,
            Widget.Box({ css: "margin-top: 20px;" }),
        ]
    }),
});