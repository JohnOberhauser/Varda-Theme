import {Window} from "../Windows.js";
import {AlertContent, AlertType} from "./AlertContent.js";

const audio = await Service.import('audio')

let timeout
let volume = 0.0
let firstSkipped = false

export default Widget.Window({
    monitor: 0,
    name: Window.VolumeAlert, // name has to be unique
    anchor: ['bottom'],
    exclusivity: 'normal',
    layer: 'overlay',
    className: 'window',
    popup: true,
    margins: [100, 0],
    visible: false,
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Box({ css: "margin-top: 18px;" }),
            AlertContent(AlertType.VOLUME),
            Widget.Box({ css: "margin-top: 18px;" }),
        ]
    }),
    setup: self => self.hook(
        audio,
        () => {
            if (audio.speaker.volume === volume) {
                return
            }
            volume = audio.speaker.volume
            if (!firstSkipped) {
                firstSkipped = true
                return
            }
            if (timeout != null) {
                timeout.destroy()
            }
            self.visible = true
            timeout = setTimeout(() => {
                self.visible = false
            }, 1000)

        },
        "speaker-changed"
    )
});