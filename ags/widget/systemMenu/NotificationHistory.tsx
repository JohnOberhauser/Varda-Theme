import Notifd from "gi://AstalNotifd"
import { bind } from "astal"
import Notification from "../notification/Notification"
import {Gtk} from "astal/gtk3"

export default function () {
    const notifications = Notifd.get_default()

    return <box
        vertical={true}
        css={`margin-bottom: 2px;`}>
        <box
            css={`margin: 0 40px 0 40px;`}
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
                    css={`margin-top: 8px; margin-bottom: 20px;`}
                    halign={Gtk.Align.CENTER}
                    label="All caught up"/>
            } else {
                return <scrollable
                    className="scrollWindow"
                    vscroll={Gtk.PolicyType.AUTOMATIC}
                    propagateNaturalHeight={true}>
                    <box
                        css={`margin: 0 10px 0 10px;`}
                        vertical={true}>
                        {notificationsList.map((notification) => {
                            return <Notification
                                setup={() => {
                                }}
                                onHoverLost={() => {
                                }}
                                notification={notification}
                                useHistoryCss={true}/>
                        })}
                    </box>
                </scrollable>
            }
        })}
    </box>
}