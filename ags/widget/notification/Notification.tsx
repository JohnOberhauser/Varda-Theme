import { GLib } from "astal"
import { Gtk } from "astal/gtk4"
import Notifd from "gi://AstalNotifd"
import {insertNewlines} from "../utils/strings";
import Pango from "gi://Pango?version=1.0";

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
    setup(self: Gtk.Box): void
    onHoverLost(self: Gtk.Box): void
    onHover(self: Gtk.Box): void
    notification: Notifd.Notification
    useHistoryCss: boolean
}

export default function Notification(props: Props) {
    const { notification: n, onHoverLost, onHover, setup, useHistoryCss } = props
    const { START, END } = Gtk.Align

    return <box
        vertical={true}
        cssClasses={useHistoryCss ?
            ["notificationHistorical"] : urgency(n) === "critical"
                ? ["notificationCritical"] : ["notification"]}
        setup={setup}
        onHoverEnter={onHover}
        onHoverLeave={onHoverLost}>
        <box
            marginTop={2}
            vertical={false}>
            <label
                cssClasses={["labelSmallBold"]}
                marginStart={8}
                halign={START}
                ellipsize={Pango.EllipsizeMode.END}
                label={n.appName || "Unknown"}/>
            <label
                cssClasses={["labelSmall"]}
                marginEnd={4}
                hexpand
                halign={END}
                label={time(n.time)}/>
            <button
                cssClasses={["closeButton"]}
                marginEnd={2}
                onClicked={() => n.dismiss()}
                label=""/>
        </box>
        <box
            vertical={true}
            marginTop={10}
            marginBottom={10}
            marginStart={10}
            marginEnd={10}>
            <label
                cssClasses={["labelMediumBold"]}
                halign={START}
                xalign={0}
                label={insertNewlines(n.summary, 33)} // wrap causes issues with scrollable height so split lines manually
            />
            {n.body && <label
                cssClasses={["labelSmall"]}
                halign={START}
                xalign={0}
                label={insertNewlines(n.body, 40)}
            />}
        </box>
        {n.get_actions().length > 0 && <box vertical={true}>
            {n.get_actions().map(({ label, id }) => (
                <button
                    cssClasses={["primaryButton"]}
                    hexpand={true}
                    marginTop={4}
                    marginEnd={8}
                    marginBottom={8}
                    marginStart={8}
                    onClicked={() => n.invoke(id)}
                    label={label}/>
            ))}
        </box>}
    </box>
}
