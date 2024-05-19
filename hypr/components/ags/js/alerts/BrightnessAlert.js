import {Window} from "../Windows.js";
import {AlertContent, AlertType} from "./AlertContent.js";
import BrightnessService from "../BrightnessService.js";

const brightnessService = BrightnessService

export default Widget.Window({
    monitor: 0,
    name: Window.BrightnessAlert, // name has to be unique
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
            AlertContent(AlertType.BRIGHTNESS),
            Widget.Box({ css: "margin-top: 18px;" }),
        ]
    }),
    setup: self => {
        let windowVisibilityTimeout
        let brightness = 0.0
        let canShow = false

        setTimeout(() => {
            canShow = true
        }, 5_000)

        self.hook(
            brightnessService,
            () => {
                if (brightnessService.screen_value === brightness) {
                    return
                }
                brightness = brightnessService.screen_value
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
            "screen-changed"
        )
    }
});