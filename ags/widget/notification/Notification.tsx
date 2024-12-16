import { GLib } from "astal"
import { Gtk } from "astal/gtk3"
import { type EventBox } from "astal/gtk3/widget"
import Notifd from "gi://AstalNotifd"
import {insertNewlines} from "../utils/strings";

const time = (time: number, format = "%I:%M %p") => GLib.DateTime
    .new_from_unix_local(time)
    .format(format)!

const urgency = (n: Notifd.Notification) => {
    const { LOW, NORMAL, CRITICAL } = Notifd.Urgency
    // match operator when?
    switch (n.urgency) {
        case LOW: return "low"
        case CRITICAL: return "critical"
        case NORMAL:
        default: return "normal"
    }
}

type Props = {
    setup(self: EventBox): void
    onHoverLost(self: EventBox): void
    onHover(self: EventBox): void
    notification: Notifd.Notification
    useHistoryCss: boolean
}

export default function Notification(props: Props) {
    const { notification: n, onHoverLost, onHover, setup, useHistoryCss } = props
    const { START, END } = Gtk.Align

    return <eventbox
        className={useHistoryCss ? `Notification history` : `Notification ${urgency(n)}`}
        setup={setup}
        onHoverLost={onHoverLost}
        onHover={onHover}
        onClick={() => n.dismiss()}>
        <box
            vertical={true}>
            <box
                vertical={false}>
                <label
                    className="labelSmallBold"
                    css={`margin-left: 8px;`}
                    halign={START}
                    truncate
                    label={n.appName || "Unknown"}/>
                <label
                    className="labelSmall"
                    css={`margin-right: 4px;`}
                    hexpand
                    halign={END}
                    label={time(n.time)}/>
                <button
                    className="iconButton"
                    onClicked={() => n.dismiss()}
                    label=""/>
            </box>
            <box
                vertical={true}
                css={`padding: 10px;`}>
                <label
                    className="labelMediumBold"
                    halign={START}
                    xalign={0}
                    label={insertNewlines(n.summary, 33)} // wrap causes issues with scrollable height so split lines manually
                />
                {n.body && <label
                    className="labelSmall"
                    halign={START}
                    xalign={0}
                    label={insertNewlines(n.body, 40)}
                />}
            </box>
            {n.get_actions().length > 0 && <box vertical={true}>
                {n.get_actions().map(({ label, id }) => (
                    <button
                        className="primaryButton"
                        hexpand={true}
                        css={`margin: 4px 8px 8px 8px;`}
                        onClicked={() => n.invoke(id)}
                        label={label}/>
                ))}
            </box>}
        </box>
    </eventbox>
}
