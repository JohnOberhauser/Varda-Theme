import {Window} from "../Windows.js";
import {getVolumeIcon, swapOutput} from "../utils/audio.js";

const audio = await Service.import('audio')

let timeout
let volume = 0.0
let firstSkipped = false

const VolumeIcon = Widget.Label({
    class_name: "volumeAlertIcon",
    // set icon
    setup: self => self.hook(
        audio,
        () => {
            self.label = getVolumeIcon(audio)
        }
    ),
})

const VolumeSlider = () => Widget.Slider({
    class_name: "volumeAlertProgress",
    value: audio["speaker"].bind('volume'),
    drawValue: false,
    hexpand: true,
    onChange: ({ value }) => audio["speaker"].volume = value,
})

function VolumeAlertContent2() {
    return Widget.Box({
        vertical: true,
        vpack: "center",
        children: [
            Widget.Label({
                label: "Volume",
                className: "volumeAlertText",
                hpack: "start",
            }),
            Widget.Box({ css: "margin-top: 10px;" }),
            VolumeSlider(),
        ]
    })
}

function VolumeAlertContent() {
    return Widget.Box({
        vertical: false,
        vpack: "center",
        children: [
            Widget.Box({ css: "margin-right: 5px;" }),
            VolumeIcon,
            Widget.Box({ css: "margin-right: 10px;" }),
            VolumeAlertContent2(),
            Widget.Box({ css: "margin-right: 5px;" }),
        ]
    })
}

export default Widget.Window({
    monitor: 0,
    name: Window.VolumeAlert, // name has to be unique
    anchor: ['bottom'],
    exclusivity: 'normal',
    layer: 'overlay',
    className: 'window',
    popup: true,
    margins: [100, 0],
    visible: true,
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Box({ css: "margin-top: 18px;" }),
            VolumeAlertContent(),
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