import {SpeakerRevealer, MicRevealer, MicrophoneSliderRow, VolumeSliderRow} from "./VolumeSliderRow.js";
import {PowerOptionsRow} from "./PowerOptionsRow.js";
import {Window} from "../Windows.js"

export default (anchor) => Widget.Window({
    monitor: 0,
    name: Window.SystemMenu, // name has to be unique
    anchor: anchor,
    exclusivity: 'normal',
    layer: 'top',
    className: 'window',
    margins: [5, 5],
    visible: false,
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Box({ css: "margin-top: 20px;" }),
            VolumeSliderRow(),
            SpeakerRevealer,
            MicrophoneSliderRow,
            MicRevealer,
            Widget.Box({ css: "margin-top: 20px;" }),
            PowerOptionsRow,
            Widget.Box({ css: "margin-top: 20px;" }),
        ]
    }),
});