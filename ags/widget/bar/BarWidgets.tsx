import {bind, GLib, Variable} from "astal"
import {App} from "astal/gtk3"
import Hyprland from "gi://AstalHyprland"
import {CalendarWindow} from "../calendar/Calendar";
import Wp from "gi://AstalWp"
import {getMicrophoneIcon, getVolumeIcon} from "../utils/audio";
import { timeout } from "astal/time"

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
        setup={(self) => {
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