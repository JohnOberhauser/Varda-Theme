import {getMicrophoneIcon, getVolumeIcon, swapInput, swapOutput, setSpeaker, setMic} from "../utils/audio.js";
import {truncateString} from "../utils/strings.js";
import {Window} from "../Windows.js";

const audio = await Service.import('audio')
const speakersRevealed = Variable(false)
const micsRevealed = Variable(false)

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

const SpeakersExpandButton = Widget.Button({
    class_name: "iconButton",
    onClicked: () => { speakersRevealed.value = !speakersRevealed.value },
    label: "",
})

const MicrophoneExpandButton = Widget.Button({
    class_name: "iconButton",
    onClicked: () => { micsRevealed.value = !micsRevealed.value },
    label: "",
})

export const Speakers = Widget.Box({
    vertical: true,
    setup: self => self.hook(audio,self => {
        self.children = audio.speakers.map((speaker) => {
            let label = ""
            if (audio.control.get_default_sink() != null && audio.control.get_default_sink().id === speaker.id) {
                label = ""
            }
            let speakerName = truncateString(speaker.description, 25)
            return Widget.Box([
                Widget.Label({
                    class_name: "audioSelectionLabel",
                    label: label
                }),
                Widget.Button({
                    class_name: "audioSelectionButton",
                    label: speakerName,
                    onClicked: () => { setSpeaker(audio, speaker.stream) }
                })
            ])
        })
    })
})

export const Mics = Widget.Box({
    vertical: true,
    setup: self => self.hook(audio,self => {
        self.children = audio.microphones.map((microphone) => {
            let label = ""
            if (audio.control.get_default_source() != null && audio.control.get_default_source().id === microphone.id) {
                label = ""
            }
            let speakerName = truncateString(microphone.description, 25)
            return Widget.Box([
                Widget.Label({
                    class_name: "audioSelectionLabel",
                    label: label
                }),
                Widget.Button({
                    class_name: "audioSelectionButton",
                    label: speakerName,
                    onClicked: () => { setMic(audio, microphone.stream) }
                })
            ])
        })
    })
})

export const SpeakerRevealer = Widget.Revealer({
    class_name: "audioRevealer",
    revealChild: false,
    transitionDuration: 200,
    transition: 'slide_down',
    child: Speakers,
    setup: self => {
        self.hook(speakersRevealed, () => {
            self.revealChild = speakersRevealed.value
        })
        self.hook(App, (self, windowName) => {
            if (windowName === Window.SystemMenu) {
                speakersRevealed.value = false
            }
        }, 'window-toggled')
    }
})

export const MicRevealer = Widget.Revealer({
    class_name: "audioRevealer",
    revealChild: false,
    transitionDuration: 200,
    transition: 'slide_down',
    child: Mics,
    setup: self => {
        self.hook(micsRevealed, () => {
            self.revealChild = micsRevealed.value
        })
        self.hook(App, (self, windowName) => {
            if (windowName === Window.SystemMenu) {
                micsRevealed.value = false
            }
        }, 'window-toggled')
    }
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

export function VolumeSliderRow() {
    return Widget.Box({
        vertical: false,
        className: "row",
        children: [
            VolumeButton,
            VolumeSlider("speaker"),
            SpeakersExpandButton,
        ]
    })
}

export const MicrophoneSliderRow = Widget.Box({
    vertical: false,
    className: "row",
    children: [
        MicrophoneButton,
        VolumeSlider("microphone"),
        MicrophoneExpandButton,
    ]
})