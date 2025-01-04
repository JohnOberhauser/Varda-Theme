import GLib from "gi://GLib"

const time = (time, format = "%H:%M") => GLib.DateTime
    .new_from_unix_local(time)
    .format(format)

const NotificationIcon = ({ app_entry, app_icon, image }) => {
    if (image) {
        return Widget.Box({
            vpack: "start",
            hexpand: false,
            class_name: "icon img",
            css: `
                background-image: url("${image}");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                min-width: 78px;
                min-height: 78px;
                margin: 4px;
            `,
        })
    }

    let icon = "dialog-information-symbolic"
    if (Utils.lookUpIcon(app_icon))
        icon = app_icon

    if (Utils.lookUpIcon(app_entry || ""))
        icon = app_entry || ""

    return Widget.Box({
        vpack: "start",
        hexpand: false,
        class_name: "icon",
        css: `
            min-width: 78px;
            min-height: 78px;
        `,
        child: Widget.Icon({
            icon,
            size: 58,
            hpack: "center", hexpand: true,
            vpack: "center", vexpand: true,
        }),
    })
}

export default (notification) => {
    const content = Widget.Box({
        class_name: "window",
        children: [
            NotificationIcon(notification),
            Widget.Box({
                hexpand: true,
                vertical: true,
                children: [
                    Widget.Box({
                        children: [
                            Widget.Label({
                                class_name: "notification-title",
                                xalign: 0,
                                justification: "left",
                                hexpand: true,
                                max_width_chars: 24,
                                truncate: "end",
                                wrap: true,
                                label: notification.summary.trim(),
                                use_markup: true,
                            }),
                            Widget.Button({
                                class_name: "notification-close-button",
                                vpack: "start",
                                child: Widget.Icon("window-close-symbolic"),
                                on_clicked: notification.close,
                            }),
                        ],
                    }),
                    Widget.Label({
                        class_name: "notification-description",
                        hexpand: true,
                        use_markup: true,
                        xalign: 0,
                        justification: "left",
                        label: notification.body.trim(),
                        max_width_chars: 24,
                        wrap: true,
                    }),
                ],
            }),
        ],
    })

    const actionsbox = notification.actions.length > 0 ? Widget.Revealer({
        transition: "slide_down",
        child: Widget.EventBox({
            child: Widget.Box({
                class_name: "actions horizontal",
                children: notification.actions.map(action => Widget.Button({
                    class_name: "action-button",
                    on_clicked: () => notification.invoke(action.id),
                    hexpand: true,
                    child: Widget.Label(action.label),
                })),
            }),
        }),
    }) : null

    const eventbox = Widget.EventBox({
        vexpand: false,
        on_primary_click: notification.dismiss,
        on_hover() {
            if (actionsbox)
                actionsbox.reveal_child = true
        },
        on_hover_lost() {
            if (actionsbox)
                actionsbox.reveal_child = true
        },
        child: Widget.Box({
            vertical: true,
            children: actionsbox ? [content, actionsbox] : [content],
        }),
    })

    return Widget.Box({
        class_name: `notification ${notification.urgency}`,
        child: eventbox,
    })
}