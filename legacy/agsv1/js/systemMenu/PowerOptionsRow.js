import {Window} from "../Windows.js"

const hyprland = await Service.import('hyprland')

const dispatch = cmd => hyprland.sendMessage(`dispatch ${cmd}`);

const LogoutButton = Widget.Button({
    class_name: "systemMenuIconButton",
    label: "󰍃",
    onClicked: () => {
        App.toggleWindow(Window.SystemMenu)
        Utils.exec("pkill Hyprland")
    },
})

const LockButton = Widget.Button({
    class_name: "systemMenuIconButton",
    label: "",
    onClicked: () => {
        App.toggleWindow(Window.SystemMenu)
        Utils.execAsync('bash -c "loginctl lock-session"')
    },
})

const RebootButton = Widget.Button({
    class_name: "systemMenuIconButton",
    label: "",
    onClicked: () => {
        App.toggleWindow(Window.SystemMenu)
        Utils.execAsync('bash -c "reboot"')
    },
})

const ShutdownButton = Widget.Button({
    class_name: "systemMenuIconButton",
    label: "⏻",
    onClicked: () => {
        App.toggleWindow(Window.SystemMenu)
        Utils.execAsync('bash -c "shutdown now"')
    },
})

export const PowerOptionsRow = Widget.Box({
    vertical: false,
    className: "row",
    hpack: "center",
    children: [
        LogoutButton,
        LockButton,
        RebootButton,
        ShutdownButton,
    ]
})