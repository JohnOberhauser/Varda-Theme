import {bind, Variable} from "astal"
import {Gtk, App} from "astal/gtk3"
import {execAsync} from "astal/process"
import {SystemMenuWindowName} from "./SystemMenuWindow";
import {getBluetoothIcon, getBluetoothName} from "../utils/bluetooth";
import Bluetooth from "gi://AstalBluetooth";

function SavedBluetoothDevices() {
    const bluetooth = Bluetooth.get_default()

    return <box
        vertical={true}>
        <label
            halign={Gtk.Align.START}
            label="Saved devices"
            className="labelLargeBold"/>
        {bind(bluetooth, "devices").as((devices) => {
            return devices.filter((device) => {
                return device.name != null
            }).map((device) => {
                const buttonsRevealed = Variable(false)
                const connectionState = Variable.derive([
                    bind(device, "connected"),
                    bind(device, "connecting")
                ])

                return <box
                    vertical={true}>
                    <button
                        hexpand={true}
                        className="iconButton"
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
                                css={`margin-top: 4px;`}
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
                <button
                    className="transparentButton"
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
                <SavedBluetoothDevices/>
            </box>
        </revealer>
    </box>
}