import Notifd from "gi://AstalNotifd"
import { bind } from "astal"
import Notification from "../notification/Notification"
import {Gtk} from "astal/gtk4"

export default function() {
    const notifications = Notifd.get_default()

    return <box
        vertical={true}>
        <box
            marginStart={20}
            marginEnd={20}
            vertical={false}>
            <button
                cssClasses={["iconButton"]}
                label={bind(notifications, "dontDisturb").as((dnd) => {
                    return dnd ? "󰂛" : "󰂚"
                })}
                onClicked={() => {
                    notifications.set_dont_disturb(!notifications.dontDisturb)
                }}/>
            <label
                cssClasses={["labelMediumBold"]}
                label="Notifications"/>
            <box hexpand={true}/>
            <button
                cssClasses={["iconButton"]}
                label="Clear all"
                onClicked={() => {
                    notifications.notifications.forEach((notification) => {
                        notification.dismiss()
                    })
                }}/>
        </box>
        {bind(notifications, "notifications").as((notificationsList) => {
            if (notificationsList.length === 0) {
                return <label
                    cssClasses={["labelSmall"]}
                    marginTop={8}
                    marginBottom={20}
                    halign={Gtk.Align.CENTER}
                    label="All caught up"/>
            } else {
                return notificationsList.map((notification) => {
                    return <Notification
                        setup={() => {}}
                        onHoverLost={() => {}}
                        onHover={() => {}}
                        notification={notification}
                        useHistoryCss={true}/>
                })
            }
        })}
    </box>
}