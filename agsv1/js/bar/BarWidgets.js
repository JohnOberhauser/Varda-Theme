import {Window} from "../Windows.js"
import {getMicrophoneIcon, getVolumeIcon, swapInput, swapOutput} from "../utils/audio.js";
import {getBatteryIcon} from "../utils/battery.js";
import {getNetworkIcon} from "../utils/network.js";
import { clock } from '../variables.js';

const audio = await Service.import('audio')
const battery = await Service.import('battery')
const hyprland = await Service.import('hyprland')
const network = await Service.import('network')

const dispatchWorkspace = ws => hyprland.sendMessage(`dispatch workspace ${ws}`);

export const Workspaces = (vertical) => Widget.EventBox({
    onScrollDown: () => dispatchWorkspace('+1'),
    onScrollUp: () => dispatchWorkspace('-1'),
    child: Widget.Box({
        vertical: vertical,
        children: Array.from(
            { length: 6 },
            (_, i) => i + 1
        ).map(i =>
            Widget.Button({
                attribute: i,
                label: '',
                class_name: "iconButton",
                onClicked: () => dispatchWorkspace(i),
            })
        ),

        // set icon
        setup: self => self.hook(
            hyprland.active.workspace,
            () => self.children.forEach(
                btn => {
                    if (hyprland.monitors[0].activeWorkspace.id === btn.attribute) {
                        btn.label = ""
                    } else {
                        btn.label = ""
                    }
                }
            ),
        ),
    }),
})

export const MenuButton = (css) => Widget.Button({
    label: '',
    class_name: "iconButton",
    css: css,
    onClicked: () => App.toggleWindow(Window.SystemMenu),
})

export const MicrophoneButton = (css) => Widget.Button({
    class_name: "iconButton",
    css: css,
    onClicked: () => swapInput(audio),
    // set icon
    setup: self => self.hook(
        audio,
        () => {
            self.label = getMicrophoneIcon(audio)
        }
    ),
})

export const VolumeButton = (css) => Widget.Button({
    class_name: "iconButton",
    css: css,
    onClicked: () => swapOutput(audio),
    // set icon
    setup: self => self.hook(
        audio,
        () => {
            self.label = getVolumeIcon(audio)
        }
    ),
})

export const NetworkButton = (css) => Widget.Button({
    class_name: "iconButton",
    css: css,
    onClicked: () => { Utils.execAsync('bash -c "kitty -e $HOME/.config/kitty/nmtui.sh"') },
    // set icon
    setup: self => self.hook(
        network,
        () => {
            self.label = getNetworkIcon(network)
        }
    ),
})

export const BatteryButton = (css) => Widget.Label({
    class_name: "iconButton",
    css: css,
    // set icon
    setup: self => {
        // the parent likes to set default visibility, override
        setTimeout(() => {self.visible = false}, 0)
        let batteryWarningInterval
        self.hook(
            battery,
            () => {
                self.visible = battery.available
                self.label = getBatteryIcon(battery)
                if (battery.available
                    && !battery.charging
                    && battery.percent < 4
                    && batteryWarningInterval == null
                ) {
                    self.css = css + " color: #733447;"
                    batteryWarningInterval = setInterval(() => {
                        Utils.execAsync('bash -c "play $HOME/.config/hypr/assets/sounds/battery-low.ogg"')
                    }, 120_000)
                } else if ((battery.percent >= 4 || battery.charging)
                    && batteryWarningInterval != null
                ) {
                    batteryWarningInterval.destroy()
                    batteryWarningInterval = null
                    self.css = css
                }
            }
        )
    },
})

export const BluetoothButton = (css) => Widget.Button({
    class_name: "iconButton",
    css: css,
    onClicked: () => App.toggleWindow(Window.Bluetooth),
    label: "󰂯",
})

export const ClockButton = (css, singleLine) => Widget.Button({
    class_name: "iconButton",
    css: css,
    onClicked: () => { App.toggleWindow(Window.Overview) },
    label: clock.bind('value').transform(time => {
        if (singleLine) {
            return time.format("%I:%M") || ""
        } else {
            return time.format("%I\n%M") || ""
        }
    }),
})

export const ScreenRecordingButton = (css) => Widget.Label({
    class_name: "iconButton",
    css: css,
    label: "󰹑",
    // set icon
    setup: self => {
        // the parent likes to set default visibility, override
        setTimeout(() => {self.visible = false}, 0)
        self.hook(
            hyprland,
            (_, name, data) => {
                if (name === "screencast") {
                    self.visible = data[0] === "1"
                }
            },
            "event"
        )
    },
})
