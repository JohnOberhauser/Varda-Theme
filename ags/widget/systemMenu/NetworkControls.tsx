import AstalNetwork from "gi://AstalNetwork"
import {getAccessPointIcon, getNetworkIconBinding, getNetworkNameBinding} from "../utils/network";
import {bind, Variable} from "astal"
import {Gtk} from "astal/gtk3"
import {execAsync} from "astal/process"

function ssidInRange(ssid: string) {
    const network = AstalNetwork.get_default()

    return network.wifi.accessPoints.find((accessPoint) => {
        return accessPoint.ssid === ssid
    }) != null
}

function updateConnections(connections: Variable<string[]>) {
    execAsync(["bash", "-c", `nmcli -t -f NAME,TYPE connection show`])
        .catch((error) => {
            print(error)
        })
        .then((value) => {
            print(value)
            if (typeof value !== "string") {
                return
            }

            const names = value
                .split("\n")
                .filter((line) => line.includes("802-11-wireless"))
                .map((line) => line.split(":")[0].trim())
                .sort((a, b) => {
                    const aInRange = ssidInRange(a)
                    const bInRange = ssidInRange(b)
                    if (aInRange && bInRange) {
                        return 0
                    } else if (aInRange) {
                        return -1
                    } else {
                        return 1
                    }
                });

            connections.set(names)
        })
}

function getConnections() {
    const connections = Variable<string[]>([])
    updateConnections(connections)
    return connections
}

function deleteConnection(ssid: string, connections: Variable<string[]>) {
    execAsync(["bash", "-c", `nmcli connection delete "${ssid}"`])
        .finally(() => {
            updateConnections(connections)
        })
}

function PasswordEntry(
    {
        accessPoint,
        passwordEntryRevealed,
        connections
    }: {
        accessPoint: AstalNetwork.AccessPoint,
        passwordEntryRevealed: Variable<boolean>,
        connections: Variable<string[]>
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
                updateConnections(connections)
            })
    }

    const passwordEntry = <box
        vertical={true}>
        <label
            halign={Gtk.Align.START}
            className="labelSmall"
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

function Connections({connections}: {connections: Variable<string[]>}) {
    const network = AstalNetwork.get_default()

    return <box
        vertical={true}>
        <label
            halign={Gtk.Align.START}
            className="labelLargeBold"
            label="Saved networks"/>
        {connections((connectionsValue) => {
            return connectionsValue.map((connection) => {
                const buttonsRevealed = Variable(false)
                let label: string
                let canConnect: boolean
                const accessPoint = network.wifi.accessPoints.find((accessPoint) => {
                    return accessPoint.ssid === connection
                })
                if (accessPoint != null) {
                    label = `${getAccessPointIcon(accessPoint)}  ${connection}`
                    canConnect = network.wifi.activeAccessPoint.ssid !== connection;
                } else {
                    label = connection
                    canConnect = false
                }

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
                            label={label}/>
                    </button>
                    <revealer
                        revealChild={buttonsRevealed()}
                        transitionDuration={200}
                        transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
                        <box
                            vertical={false}>
                            {canConnect && <button
                                hexpand={true}
                                className="iconButton"
                                label="Connect"
                                onClicked={() => {
                                    execAsync(`nmcli c up ${connection}`)
                                        .catch((error) => {
                                            print(error)
                                        })
                                        .finally(() => {
                                            updateConnections(connections)
                                        })
                                }}/>}
                            <button
                                hexpand={true}
                                className="iconButton"
                                label="Forget"
                                onClicked={() => {
                                    deleteConnection(connection, connections)
                                }}/>
                        </box>
                    </revealer>
                </box>
            })
        })}
    </box>
}

export default function () {
    const network = AstalNetwork.get_default()
    const connections = getConnections()

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
                className="labelMediumBold"
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
                        network.wifi?.scan()
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
                {network.wifi && bind(network.wifi, "activeAccessPoint").as((activeAccessPoint) => {
                    return <button
                        className="iconButton"
                        css={`margin-bottom: 12px;`}
                        label="Forget"
                        onClicked={() => {
                            deleteConnection(activeAccessPoint.ssid, connections)
                        }}/>
                })}
                {network.wifi ?
                    <Connections connections={connections}/>
                    : <label
                        label="Wifi not available"
                        className="labelLargeBold"/>
                }
                <box css={`margin-top: 12px;`}/>
                {network.wifi && bind(network.wifi, "scanning").as((scanning) => {
                    if (scanning) {
                        return <label
                            halign={Gtk.Align.START}
                            className="labelLargeBold"
                            css={`margin-bottom: 4px;`}
                            label="Scanning…"/>
                    } else {
                        updateConnections(connections)
                        const accessPoints = network.wifi.accessPoints

                        const accessPointsUi = accessPoints.filter((value) => {
                            return value.ssid != null
                                && connections.get().find((connection) => {
                                    return value.ssid === connection
                                }) == null
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
                                            className="labelSmall"
                                            label={`${getAccessPointIcon(accessPoint)}  ${accessPoint.ssid}`}/>
                                    </button>
                                </box>
                                <revealer
                                    revealChild={passwordEntryRevealed()}
                                    transitionDuration={200}
                                    transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
                                    <PasswordEntry
                                        accessPoint={accessPoint}
                                        passwordEntryRevealed={passwordEntryRevealed}
                                        connections={connections}/>
                                </revealer>
                            </box>
                        })

                        return <box
                            vertical={true}>
                            <label
                                halign={Gtk.Align.START}
                                className="labelLargeBold"
                                label="Available networks"/>
                            {accessPointsUi}
                        </box>
                    }
                })}
            </box>
        </revealer>
    </box>
}
