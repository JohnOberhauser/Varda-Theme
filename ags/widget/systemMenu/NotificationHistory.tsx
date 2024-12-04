import Notifd from "gi://AstalNotifd"
import { Variable, bind, timeout } from "astal"
import Notification from "../notification/Notification"
import {Gtk} from "astal/gtk3"

export default function () {
    const notifications = Notifd.get_default()

    return <box
        className="notificationHistoryContainer"
        vertical={true}>
        <box
            vertical={false}>
            <label
                className="labelMediumBold"
                label="Notifications"/>
            <box hexpand={true}/>
            <button
                className="iconButton"
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
                    className="labelSmall"
                    css={`margin: 8px;`}
                    halign={Gtk.Align.CENTER}
                    label="All caught up"/>
            } else {
                return notificationsList.map((notification) => {
                    return <Notification
                        setup={() => {
                        }}
                        onHoverLost={() => {
                        }}
                        notification={notification}
                        useHistoryCss={true}/>
                })
            }
        })}
    </box>
}