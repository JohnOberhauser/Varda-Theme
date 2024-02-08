import {getVolumeIcon} from "../utils/audio.js";
import BrightnessService from "../BrightnessService.js";
import {getBrightnessIcon} from "../utils/brightness.js";

const audio = await Service.import('audio')
const brightness = await BrightnessService

function AlertIcon(alertType) {
    return Widget.Label({
        class_name: "alertIcon",
        // set icon
        setup: self => {
            switch (alertType) {
                case AlertType.VOLUME:
                    self.hook(
                        audio,
                        () => {
                            self.label = getVolumeIcon(audio)
                        }
                    )
                    break;
                case AlertType.BRIGHTNESS:
                    self.hook(
                        brightness,
                        () => {
                            self.label = getBrightnessIcon(brightness)
                        }
                    )
                    break;
            }
        },
    })
}

const Slider = (alertType) => {
    let value
    switch (alertType) {
        case AlertType.VOLUME:
            value = audio["speaker"].bind('volume')
            break;
        case AlertType.BRIGHTNESS:
            value = brightness.bind('screen_value')
            break;
    }
    return Widget.Slider({
        class_name: "alertProgress",
        value: value,
        drawValue: false,
        hexpand: true,
    })
}

function AlertContent2(
    alertType
) {
    return Widget.Box({
        vertical: true,
        vpack: "center",
        children: [
            Widget.Label({
                label: alertType.label,
                className: "alertText",
                hpack: "start",
            }),
            Widget.Box({ css: "margin-top: 10px;" }),
            Slider(alertType),
        ]
    })
}

export function AlertContent(
    alertType,
) {
    return Widget.Box({
        vertical: false,
        vpack: "center",
        children: [
            Widget.Box({ css: "margin-right: 5px;" }),
            AlertIcon(alertType),
            Widget.Box({ css: "margin-right: 10px;" }),
            AlertContent2(alertType),
            Widget.Box({ css: "margin-right: 5px;" }),
        ]
    })
}

export class AlertType {
    static VOLUME = new AlertType('Volume')
    static BRIGHTNESS = new AlertType('Brightness')

    constructor(label) {
        this.label = label
    }
}
