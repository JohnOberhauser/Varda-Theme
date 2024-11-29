import {Window} from "../Windows.js";

const bluetooth = await Service.import('bluetooth')

export const BluetoothSettingsButton = (css) => Widget.Button({
    class_name: "primaryButton",
    label: "Settings",
    css: css,
    onClicked: () => {
        App.toggleWindow(Window.Bluetooth)
        Utils.execAsync('bash -c "blueman-manager &> /dev/null &"')
    },
})

const ConnectButton = (device) => {
    let label
    if (device.connected) {
        label = "Disconnect"
    } else {
        label = "Connect"
    }
    return Widget.Button({
        class_name: "primaryButton",
        label: label,
        onClicked: () => {
            let command
            if (device.connected) {
                command = "$HOME/.config/hypr/scripts/bluetooth/connectDevice.sh \"" + device.name + "\" true"
            } else {
                command = "$HOME/.config/hypr/scripts/bluetooth/connectDevice.sh \"" + device.name + "\" false"
            }
            Utils.execAsync(['bash', '-c', command])
                .then(out => console.log(out))
                .catch(err => console.log(err))
        },
    })
}

export const ConnectedDevices = Widget.Box({
    vertical: true,
    setup: self => self.hook(
        bluetooth,
        self => {
            self.children = bluetooth
                .devices
                .filter((device) => device.name != null && device.name.trim() !== "")
                .map(({ icon_name, device }) => {
                return Widget.Box({
                    vertical: true,
                    css: "margin-bottom: 20px;",
                    children: [
                        Widget.Label({
                            label: device.name,
                            className: "labelMedium",
                            css: "margin-bottom: 4px;",
                        }),
                        ConnectButton(device),
                    ]
                })
            });

            self.visible = bluetooth.devices.length > 0;
        },
    ),
})
