import Notifications from 'resource:///com/github/Aylur/ags/service/notifications.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import { lookUpIcon } from 'resource:///com/github/Aylur/ags/utils.js';
import {Window} from "../Windows.js"

/** @param {import('resource:///com/github/Aylur/ags/service/notifications.js').Notification} n */
const NotificationIcon = ({ app_entry, app_icon, image }) => {
    if (image) {
        return Widget.Box({
            css: `
                background-image: url("${image}");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            `,
        });
    }

    let icon = 'dialog-information-symbolic';
    if (lookUpIcon(app_icon))
        icon = app_icon;

    if (app_entry && lookUpIcon(app_entry))
        icon = app_entry;

    return Widget.Icon(icon);
};

/** @param {import('resource:///com/github/Aylur/ags/service/notifications.js').Notification} notification */
const Notification = notification => {
    const icon = Widget.Box({
        vpack: 'start',
        children: [
            NotificationIcon(notification)
        ],
    });

    const title = Widget.Label({
        xalign: 0,
        justification: 'left',
        hexpand: true,
        max_width_chars: 24,
        truncate: 'end',
        wrap: true,
        label: notification.summary,
        use_markup: true,
    });

    const body = Widget.Label({
        hexpand: true,
        use_markup: true,
        xalign: 0,
        justification: 'left',
        label: notification.body,
        wrap: true,
    });

    const actions = Widget.Box({
        class_name: 'actions',
        children: notification.actions.map(({ id, label }) => Widget.Button({
            on_clicked: () => notification.invoke(id),
            hexpand: true,
            child: Widget.Label(label),
        })),
    });

    return Widget.EventBox({
        on_primary_click: () => notification.dismiss(),
        child: Widget.Box({
            className: "notification",
            vertical: true,
            children: [
                Widget.Box({
                    vertical: false,
                    children: [
                        icon,
                        Widget.Box({
                            vertical: true,
                            children: [
                                title,
                                body,
                            ],
                        }),
                    ],
                }),
                actions,
            ],
        }),
    });
};

export default (anchor) => Widget.Window({
    name: Window.Notification,
    anchor: anchor,
    layer: 'overlay',
    child: Widget.Box({
        vertical: true,
        className: 'window',
        children: Notifications.bind('popups').transform(popups => {
            console.log(popups)
            return popups.map(Notification);
        }),
    }),
});