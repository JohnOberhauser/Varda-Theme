import {Window} from "../Windows.js"
import {getMicrophoneIcon, getVolumeIcon, swapInput, swapOutput} from "../utils/audio.js";
import {getBatteryIcon} from "../utils/battery.js";
import { clock } from '../variables.js';

const audio = await Service.import('audio')
const battery = await Service.import('battery')
const hyprland = await Service.import('hyprland')

const dispatchWorkspace = ws => hyprland.sendMessage(`dispatch workspace ${ws}`);

export const Workspaces = (vertical) => Widget.EventBox({
    onScrollDown: () => dispatchWorkspace('+1'),
    onScrollUp: () => dispatchWorkspace('-1'),
    child: Widget.Box({
        vertical: vertical,
        children: Array.from(
            { length: 5 },
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
            )
        ),
    }),
})

export const MenuButton = Widget.Button({
    label: '',
    class_name: "iconButton",
    onClicked: () => App.toggleWindow(Window.SystemMenu),
})

export const MicrophoneButton = Widget.Button({
    class_name: "iconButton",
    onClicked: () => swapInput(audio),
    // set icon
    setup: self => self.hook(
        audio,
        () => {
            self.label = getMicrophoneIcon(audio)
        }
    ),
})

export const VolumeButton = Widget.Button({
    class_name: "iconButton",
    onClicked: () => swapOutput(audio),
    // set icon
    setup: self => self.hook(
        audio,
        () => {
            self.label = getVolumeIcon(audio)
        }
    ),
})

export const BatteryButton = Widget.Label({
    class_name: "iconButton",
    visible: false,
    // set icon
    setup: self => self.hook(
        battery,
        () => {
            self.visible = battery.available
            self.label = getBatteryIcon(battery)
        }
    ),
})

export const BluetoothButton = Widget.Button({
    class_name: "iconButton",
    //TODO create a new window for bluetooth settings in ags
    onClicked: () => Utils.execAsync('bash -c "$HOME/.config/hypr/scripts/bluetooth/toggleBluetoothMenu.sh &> /dev/null &"'),
    label: "󰂯",
})

export const ClockButton = Widget.Button({
    class_name: "iconButton",
    //TODO create a new window for calendar in ags
    onClicked: () => {},
    label: clock.bind('value').transform(time => {
        return time.format("%I\n%M") || ""
    }),
})
