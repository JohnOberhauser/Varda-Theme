import { Variable, GLib, bind } from "astal"
import { App, Astal } from "astal/gtk3"
import Hyprland from "gi://AstalHyprland"
import {CalendarWindow} from "../calendar/Calendar";

export function Workspaces({ vertical }: { vertical: boolean }) {
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

export function ClockButton({ css, singleLine }: { css: string, singleLine: boolean }) {
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
    onClicked={() => { App.toggle_window(CalendarWindow) }}>

    </button>
}