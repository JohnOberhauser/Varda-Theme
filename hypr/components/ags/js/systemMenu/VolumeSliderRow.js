import {getMicrophoneIcon, getVolumeIcon, swapInput, swapOutput} from "../utils/audio.js";

const audio = await Service.import('audio')

const VolumeButton = Widget.Button({
    class_name: "systemMenuIconButton",
    onClicked: () => swapOutput(audio),
    // set icon
    setup: self => self.hook(
        audio,
        () => {
            self.label = getVolumeIcon(audio)
        }
    ),
})

/**
 * @param type either 'speaker' or 'microphone'
 */
const VolumeSlider = (type) => Widget.Slider({
    class_name: "systemMenuVolumeProgress",
    value: audio[type].bind('volume'),
    drawValue: false,
    hexpand: true,
    onChange: ({ value }) => audio[type].volume = value,
})

export const VolumeSliderRow = Widget.Box({
    vertical: false,
    className: "audioRow",
    children: [
        VolumeButton,
        VolumeSlider("speaker"),
    ]
})

const MicrophoneButton = Widget.Button({
    class_name: "systemMenuIconButton",
    onClicked: () => swapInput(audio),
    // set icon
    setup: self => self.hook(
        audio,
        () => {
            self.label = getMicrophoneIcon(audio)
        }
    ),
})

export const MicrophoneSliderRow = Widget.Box({
    vertical: false,
    className: "audioRow",
    children: [
        MicrophoneButton,
        VolumeSlider("microphone"),
    ]
})