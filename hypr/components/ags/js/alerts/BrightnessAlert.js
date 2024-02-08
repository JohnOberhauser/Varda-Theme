import {Window} from "../Windows.js";
import {AlertContent, AlertType} from "./AlertContent.js";
import BrightnessService from "../BrightnessService.js";

const brightnessService = await BrightnessService

let timeout
let brightness = 0.0
let firstSkipped = false

export default Widget.Window({
    monitor: 0,
    name: Window.BrightnessAlert, // name has to be unique
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
            AlertContent(AlertType.BRIGHTNESS),
            Widget.Box({ css: "margin-top: 18px;" }),
        ]
    }),
    setup: self => self.hook(
        brightnessService,
        () => {
            if (brightnessService.screen_value === brightness) {
                return
            }
            brightness = brightnessService.screen_value
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
        "screen-changed"
    )
});