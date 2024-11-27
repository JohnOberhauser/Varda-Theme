import {bind, GLib, Variable} from "astal"
import {App} from "astal/gtk3"
import Hyprland from "gi://AstalHyprland"
import {CalendarWindow} from "../calendar/Calendar"
import Wp from "gi://AstalWp"
import AstalNetwork from "gi://AstalNetwork"
import Battery from "gi://AstalBattery"
import {getMicrophoneIcon, getVolumeIcon} from "../utils/audio"
import {getNetworkIcon} from "../utils/network"
import {getBatteryIcon} from "../utils/battery"
import { execAsync } from "astal/process"
import { interval } from "astal/time"
import AstalIO from "gi://AstalIO?version=0.1";

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
            App.toggle_window(CalendarWindow)
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

export function VolumeButton({css}: {css: string}) {
    const {defaultSpeaker} = Wp.get_default()!.audio

    return <label
        css={css}
        className="iconButton"
        label={bind(defaultSpeaker, "volumeIcon").as((): string => {
            return getVolumeIcon(defaultSpeaker)
        })}/>
}

export function MicrophoneButton({css}: {css: string}) {
    const {defaultMicrophone} = Wp.get_default()!.audio

    return <label
        css={css}
        className="iconButton"
        label={bind(defaultMicrophone, "volumeIcon").as((): string => {
            return getMicrophoneIcon(defaultMicrophone)
        })}/>
}

export function BluetoothButton({css}: {css: string}) {
    return <button
        css={css}
        className="iconButton"
        label="󰂯"
        onClicked={() => {
            execAsync("blueman-manager")
        }}/>
}

export function NetworkButton({css}: {css: string}) {
    const network = AstalNetwork.get_default()

    return <button
        css={css}
        className="iconButton"
        label={bind(network, "connectivity").as((): string => {
            return getNetworkIcon(network)
        })}
        onClicked={() => {
            execAsync('bash -c "kitty -e $HOME/.config/kitty/nmtui.sh"')
                .then((out) => console.log(out))
                .catch((err) => console.error(err))
        }}/>
}

export function BatteryButton({css}: {css: string}) {
    const battery = Battery.get_default()

    let batteryWarningInterval: GLib.Source | null = null

    function warningSound() {
        execAsync('bash -c "play $HOME/.config/hypr/assets/sounds/battery-low.ogg"')
    }

    return <label
        css={css}
        className={bind(battery, "warningLevel").as((level): string => {
            if (level === Battery.WarningLevel.CRITICIAL || battery.state === Battery.State.CHARGING) {
                if (batteryWarningInterval != null) {
                    batteryWarningInterval.destroy()
                    batteryWarningInterval = null
                }
                return "iconButton"
            } else {
                if (batteryWarningInterval === null) {
                    batteryWarningInterval = setInterval(() => {
                        warningSound()
                    }, 120_000)
                    warningSound()
                }
                return "warningIconButton"
            }
        })}
        label={bind(battery, "iconName").as((): string => {
            return getBatteryIcon(battery)
        })}
        visible={bind(battery, "isBattery")}/>
}