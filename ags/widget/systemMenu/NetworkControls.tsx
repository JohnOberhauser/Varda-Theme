import AstalNetwork from "gi://AstalNetwork"
import {getAccessPointIcon, getNetworkIconBinding, getNetworkNameBinding} from "../utils/network";
import {bind, Variable} from "astal"
import {Gtk} from "astal/gtk3"

export default function () {
    const network = AstalNetwork.get_default()
    network.wifi.scan()

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
                <label
                    label={bind(network.wifi, "scanning").as((scanning) => {
                        if (scanning) {
                            return "scanning"
                        } else {
                            return "not scanning"
                        }
                    })}/>
                {bind(network.wifi, "accessPoints").as((accessPoints) => {
                    return accessPoints.filter((value) => {
                        return value.ssid != null
                    }).sort((a, b) => {
                        if (a.strength > b.strength) {
                            return -1
                        } else {
                            return 1
                        }
                    }).map((accessPoint) => {
                        return <box
                            vertical={false}>
                            <label
                                className="networkSelectionLabel"
                                label={`${getAccessPointIcon(accessPoint)} ${accessPoint.ssid}`}/>
                        </box>
                    })
                })}
            </box>
        </revealer>
    </box>
}