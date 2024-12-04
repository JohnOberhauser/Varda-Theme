import AstalNetwork from "gi://AstalNetwork"
import {getAccessPointIcon, getNetworkIconBinding, getNetworkNameBinding} from "../utils/network";
import {bind, Variable} from "astal"
import {Gtk} from "astal/gtk3"
import {execAsync} from "astal/process"

function PasswordEntry(
    {
        accessPoint,
        passwordEntryRevealed
    }: {
        accessPoint: AstalNetwork.AccessPoint,
        passwordEntryRevealed: Variable<boolean>
    }
) {
    const text = Variable("")

    const connect = () => {
        execAsync(["bash", "-c", `echo '${text.get()}' | nmcli device wifi connect "${accessPoint.ssid}" --ask`])
            .catch((error) => {
                print(error)
            })
            .then((value) => {
                print(value)
            })
            .finally(() => {
                passwordEntryRevealed.set(false)
            })
    }

    const passwordEntry = <box
        vertical={true}>
        <label
            halign={Gtk.Align.START}
            className="networkPasswordLabel"
            label="Password"/>
        <entry
            className="networkPasswordEntry"
            text={text()}
            onChanged={self => text.set(self.text)}
            onActivate={() => connect()}/>
    </box>

    return <box
        vertical={true}>
        {accessPoint.flags !== 0 ? passwordEntry : null}
        <button
            className="iconButton"
            hexpand={true}
            label="Connect"
            onClicked={() => connect()}/>
    </box>
}

export default function () {
    const network = AstalNetwork.get_default()

    const networkChooserRevealed = Variable(false)

    return <box
        vertical={true}>
        <box
            vertical={false}
            className="row">
            <label
                className="systemMenuIconButton"
                label={getNetworkIconBinding()}/>
            <label
                className="currentNetworkLabel"
                halign={Gtk.Align.START}
                hexpand={true}
                label={getNetworkNameBinding()}/>
            <button
                className="iconButton"
                label={networkChooserRevealed((revealed): string => {
                    if (revealed) {
                        return ""
                    } else {
                        return ""
                    }
                })}
                onClicked={() => {
                    networkChooserRevealed.set(!networkChooserRevealed.get())
                    if (networkChooserRevealed.get()) {
                        network.wifi.scan()
                    }
                }}/>
        </box>
        <revealer
            className="audioRevealer"
            revealChild={networkChooserRevealed()}
            transitionDuration={200}
            transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
            <box
                vertical={true}>
                {bind(network.wifi, "activeAccessPoint").as((activeAccessPoint) => {
                    return <button
                        label="Disconnect"
                        onClicked={() => {
                            execAsync(["bash", "-c", `nmcli connection delete "${activeAccessPoint.ssid}"`])
                        }}/>
                })}
                {bind(network.wifi, "scanning").as((scanning) => {
                    if (scanning) {
                        return <label
                            halign={Gtk.Align.START}
                            className="networkScanningLabel"
                            label="Scanning…"/>
                    } else {
                        const accessPoints = network.wifi.accessPoints

                        const accessPointsUi = accessPoints.filter((value) => {
                            return value.ssid != null && value.ssid
                        }).sort((a, b) => {
                            if (a.strength > b.strength) {
                                return -1
                            } else {
                                return 1
                            }
                        }).map((accessPoint) => {
                            const passwordEntryRevealed = Variable(false)

                            return <box
                                vertical={true}>
                                <box
                                    vertical={false}>
                                    <button
                                        hexpand={true}
                                        className="iconButton"
                                        onClicked={() => {
                                            passwordEntryRevealed.set(!passwordEntryRevealed.get())
                                        }}>
                                        <label
                                            halign={Gtk.Align.START}
                                            className="networkSelectionLabel"
                                            label={`${getAccessPointIcon(accessPoint)} ${accessPoint.ssid}`}/>
                                    </button>
                                </box>
                                <revealer
                                    revealChild={passwordEntryRevealed()}
                                    transitionDuration={200}
                                    transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
                                    <PasswordEntry accessPoint={accessPoint} passwordEntryRevealed={passwordEntryRevealed}/>
                                </revealer>
                            </box>
                        })

                        return <box
                            vertical={true}>
                            <label
                                halign={Gtk.Align.START}
                                className="networkScanningLabel"
                                label="Available networks"/>
                            {accessPointsUi}
                        </box>
                    }
                })}
            </box>
        </revealer>
    </box>
}
