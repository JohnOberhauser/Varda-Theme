import {bind, Variable} from "astal"
import {Gtk, App} from "astal/gtk3"
import {SystemMenuWindowName} from "./SystemMenuWindow";
import {getBluetoothIcon, getBluetoothName} from "../utils/bluetooth";
import Bluetooth from "gi://AstalBluetooth";

function BluetoothDevices() {
    const bluetooth = Bluetooth.get_default()

    return <box
        vertical={true}>
        {bind(bluetooth, "devices").as((devices) => {
            if (devices.length === 0) {
                return <label
                    className="labelMedium"
                    label="No devices"/>
            }
            return devices.filter((device) => {
                return device.name != null
            }).map((device) => {
                const buttonsRevealed = Variable(false)
                const connectionState = Variable.derive([
                    bind(device, "connected"),
                    bind(device, "connecting")
                ])

                setTimeout(() => {
                    bind(App.get_window(SystemMenuWindowName)!, "visible").subscribe((visible) => {
                        if (!visible) {
                            buttonsRevealed.set(false)
                        }
                    })
                }, 1_000)

                return <box
                    vertical={true}>
                    <button
                        hexpand={true}
                        className="transparentButton"
                        onClicked={() => {
                            buttonsRevealed.set(!buttonsRevealed.get())
                        }}>
                        <label
                            halign={Gtk.Align.START}
                            className="labelSmall"
                            label={`  ${device.name}`}/>
                    </button>
                    <revealer
                        revealChild={buttonsRevealed()}
                        transitionDuration={200}
                        transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
                        <box
                            vertical={true}>
                            <button
                                hexpand={true}
                                className="primaryButton"
                                css={`margin-top: 4px;`}
                                visible={bind(device, "paired")}
                                label={connectionState((value) => {
                                    const connected = value[0]
                                    const connecting = value[1]
                                    if (connecting) {
                                        return "Connecting"
                                    } else if (connected) {
                                        return "Disconnect"
                                    } else {
                                        return "Connect"
                                    }
                                })}
                                onClicked={() => {
                                    if (device.connecting) {
                                        // do nothing
                                    } else if (device.connected) {
                                        device.disconnect_device((device, result, data) => {
                                            print("disconnected")
                                        })
                                    } else {
                                        device.connect_device((device, result, data) => {
                                            print("connected")
                                        })
                                    }
                                }}/>
                            <button
                                hexpand={true}
                                className="primaryButton"
                                css={`margin-top: 4px;`}
                                visible={bind(device, "paired")}
                                label={bind(device, "trusted").as((trusted) => {
                                    if (trusted) {
                                        return "Untrust"
                                    } else {
                                        return "Trust"
                                    }
                                })}
                                onClicked={() => {
                                    device.set_trusted(!device.trusted)
                                }}/>
                            <button
                                hexpand={true}
                                className="primaryButton"
                                css={`margin-top: 4px; margin-bottom: 4px;`}
                                label={bind(device, "paired").as((paired) => {
                                    return paired ? "Unpair" : "Pair"
                                })}
                                onClicked={() => {
                                    if (device.paired) {
                                        bluetooth.adapter.remove_device(device)
                                    } else {
                                        device.pair()
                                    }
                                }}/>
                        </box>
                    </revealer>
                </box>
            })
        })}
    </box>
}

export default function () {
    const bluetooth = Bluetooth.get_default()
    const bluetoothChooserRevealed = Variable(false)

    setTimeout(() => {
        bind(App.get_window(SystemMenuWindowName)!, "visible").subscribe((visible) => {
            if (!visible) {
                bluetoothChooserRevealed.set(false)
            }
        })
    }, 1_000)

    return <box>
        {bind(bluetooth, "isPowered").as((isPowered) => {
            if (!isPowered) return <box/>
            return <box
                vertical={true}>
                <box
                    vertical={false}
                    className="row">
                    <label
                        className="systemMenuIconButton"
                        label={getBluetoothIcon()}/>
                    <label
                        className="labelMediumBold"
                        halign={Gtk.Align.START}
                        hexpand={true}
                        label={getBluetoothName()}/>
                    <button
                        className="iconButton"
                        label={bluetoothChooserRevealed((revealed): string => {
                            if (revealed) {
                                return ""
                            } else {
                                return ""
                            }
                        })}
                        onClicked={() => {
                            bluetoothChooserRevealed.set(!bluetoothChooserRevealed.get())
                        }}/>
                </box>
                <revealer
                    className="rowRevealer"
                    revealChild={bluetoothChooserRevealed()}
                    transitionDuration={200}
                    transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
                    <box
                        vertical={true}>
                        <box
                            vertical={false}>
                            <label
                                halign={Gtk.Align.START}
                                hexpand={true}
                                label="Devices"
                                className="labelLargeBold"/>
                            <button
                                className="transparentButton"
                                css={`padding-left: 8px; padding-right: 8px;`}
                                label={bind(bluetooth.adapter, "discovering").as((discovering) => {
                                    return discovering ? "Stop scanning" : "Scan"
                                })}
                                onClicked={() => {
                                    if (bluetooth.adapter.discovering) {
                                        bluetooth.adapter.stop_discovery()
                                    } else {
                                        bluetooth.adapter.start_discovery()
                                    }
                                }}/>
                        </box>
                        <BluetoothDevices/>
                    </box>
                </revealer>
            </box>
        })}
    </box>
}