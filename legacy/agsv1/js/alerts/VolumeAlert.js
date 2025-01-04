import {Window} from "../Windows.js";
import {AlertContent, AlertType} from "./AlertContent.js";

const audio = await Service.import('audio')

export default Widget.Window({
    monitor: 0,
    name: Window.VolumeAlert, // name has to be unique
    anchor: ['bottom'],
    exclusivity: 'normal',
    layer: 'overlay',
    className: 'window',
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
    setup: self => {
        let windowVisibilityTimeout
        let volume = 0.0
        let canShow = false

        setTimeout(() => {
            canShow = true
        }, 5_000)

        self.hook(
            audio,
            () => {
                if (audio.speaker.volume === volume) {
                    return
                }
                volume = audio.speaker.volume
                if (!canShow) {
                    return
                }
                if (windowVisibilityTimeout != null) {
                    windowVisibilityTimeout.destroy()
                }
                self.visible = true
                windowVisibilityTimeout = setTimeout(() => {
                    self.visible = false
                }, 1000)

            },
            "speaker-changed"
        )
    }
});