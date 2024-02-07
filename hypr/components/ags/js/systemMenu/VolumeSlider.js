import {getVolumeIcon} from "../utils/audio.js";

const audio = await Service.import('audio')

const VolumeButton = Widget.Button({
    class_name: "menuButton",
    onClicked: () => "",
    // set icon
    setup: self => self.hook(
        audio,
        () => {
            self.label = getVolumeIcon(audio)
        }
    ),
})

export const VolumeSlider = Widget.Box({
    vertical: false,
    class_name: "menuButton",
    children: [
        VolumeButton
    ]
})