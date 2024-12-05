import {bind, Variable} from "astal"
import {Gtk, App} from "astal/gtk3"
import {execAsync} from "astal/process"
import {SystemMenuWindowName} from "./SystemMenuWindow";
import {getBluetoothIcon, getBluetoothName} from "../utils/bluetooth";
import Bluetooth from "gi://AstalBluetooth";

function ConnectedDevices() {
    const bluetooth = Bluetooth.get_default()

    return <box
        vertical={true}>
        {bind(bluetooth, "devices").as((devices) => {
            return devices.map((device) => {
                const buttonsRevealed = Variable(false)

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
                            label={device.name}/>
                    </button>
                    <revealer
                        revealChild={buttonsRevealed()}
                        transitionDuration={200}
                        transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
                        <box
                            vertical={false}>
                            
                        </box>
                    </revealer>
                </box>
            })
        })}
    </box>
}

export default function () {
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
            <ConnectedDevices/>
        </revealer>
    </box>
}