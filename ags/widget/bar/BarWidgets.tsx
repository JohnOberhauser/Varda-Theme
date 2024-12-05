import {bind, GLib, Variable} from "astal"
import {App} from "astal/gtk3"
import Hyprland from "gi://AstalHyprland"
import {CalendarWindowName} from "../calendar/Calendar"
import Wp from "gi://AstalWp"
import Battery from "gi://AstalBattery"
import {getMicrophoneIcon, getVolumeIcon} from "../utils/audio"
import {getNetworkIconBinding} from "../utils/network"
import {getBatteryIcon} from "../utils/battery"
import {execAsync} from "astal/process"
import {SystemMenuWindowName} from "../systemMenu/SystemMenuWindow";
import Bluetooth from "gi://AstalBluetooth"

export function Workspaces({vertical}: { vertical: boolean }) {
    const hypr = Hyprland.get_default()

    return <box
        vertical={vertical}
    >
        {Array.from({length: 6}, (_, i) => (
            <button
                label={
                    bind(hypr, "focusedWorkspace").as(focusedWs =>
                        focusedWs.get_id() == i + 1 ? "" : ""
                    )
                }
                className="iconButton"
                onClicked={() => {
                    hypr.dispatch("workspace", `${i + 1}`)
                }}>

            </button>
        ))}
    </box>
}

export function ClockButton({css, singleLine}: { css: string, singleLine: boolean }) {
    let format: string

    if (singleLine) {
        format = "%I:%M"
    } else {
        format = "%I\n%M"
    }

    const time = Variable<string>("").poll(1000, () =>
        GLib.DateTime.new_now_local().format(format)!)

    return <button
        className="iconButton"
        css={css}
        label={time()}
        onClicked={() => {
            App.toggle_window(CalendarWindowName)
        }}>

    </button>
}

export function ScreenRecordingButton({css}: { css: string }) {
    const hypr = Hyprland.get_default()

    return <label
        className="iconButton"
        css={css}
        label="󰹑"
        visible={false}
        setup={self => {
            self.hook(hypr, "event", (_, name, data) => {
                if (name === "screencast") {
                    self.visible = data[0] === "1"
                }
            })
        }}/>
}

export function VolumeButton({css}: { css: string }) {
    const defaultSpeaker = Wp.get_default()!.audio.default_speaker

    const speakerVar = Variable.derive([
        bind(defaultSpeaker, "description"),
        bind(defaultSpeaker, "volume"),
        bind(defaultSpeaker, "mute")
    ])

    return <label
        css={css}
        className="iconButton"
        label={speakerVar(() => getVolumeIcon(defaultSpeaker))}/>
}

export function MicrophoneButton({css}: { css: string }) {
    const {defaultMicrophone} = Wp.get_default()!.audio

    const micVar = Variable.derive([
        bind(defaultMicrophone, "description"),
        bind(defaultMicrophone, "volume"),
        bind(defaultMicrophone, "mute")
    ])

    return <label
        css={css}
        className="iconButton"
        label={micVar(() => getMicrophoneIcon(defaultMicrophone))}/>
}

export function BluetoothButton({css}: { css: string }) {
    const bluetooth = Bluetooth.get_default()
    return <label
        css={css}
        className="iconButton"
        label="󰂯"
        visible={bind(bluetooth, "adapter").as((adapter) => {
            return adapter != null
        })}/>
}

export function NetworkButton({css}: { css: string }) {
    return <label
        css={css}
        className="iconButton"
        label={getNetworkIconBinding()}/>
}

export function BatteryButton({css}: { css: string }) {
    const battery = Battery.get_default()

    let batteryWarningInterval: GLib.Source | null = null

    function warningSound() {
        execAsync('bash -c "play $HOME/.config/hypr/assets/sounds/battery-low.ogg"')
    }

    const batteryVar = Variable.derive([
        bind(battery, "percentage"),
        bind(battery, "state")
    ])

    return <label
        css={css}
        className={batteryVar((value) => {
            if (value[0] > 0.04 || battery.state === Battery.State.CHARGING) {
                if (batteryWarningInterval != null) {
                    batteryWarningInterval.destroy()
                    batteryWarningInterval = null
                }
                return "iconButton"
            } else {
                if (batteryWarningInterval === null && battery.isBattery) {
                    batteryWarningInterval = setInterval(() => {
                        warningSound()
                    }, 120_000)
                    warningSound()
                }
                return "warningIconButton"
            }
        })}
        label={batteryVar(() => getBatteryIcon(battery))}
        visible={bind(battery, "isBattery")}/>
}

export function MenuButton({css}: { css: string }) {
    return <button
        css={css}
        className="iconButton"
        label=""
        onClicked={() => {
            App.toggle_window(SystemMenuWindowName)
        }}/>
}