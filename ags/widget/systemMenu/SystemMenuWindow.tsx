import {App, Astal} from "astal/gtk3"
import EndpointControls from "./EndpointControls";
import Wp from "gi://AstalWp"
import {bind} from "astal"
import {Gtk} from "astal/gtk3"
import {getMicrophoneIcon, getVolumeIcon} from "../utils/audio";
import PowerOptions from "./PowerOptions";
import ThemeOptions from "./ThemeOptions";
import MediaPlayers from "./MediaPlayers";
import NotificationHistory from "./NotificationHistory";
import NetworkControls from "./NetworkControls";
import BluetoothControls from "./BluetoothControls";
import Notifd from "gi://AstalNotifd"

export const SystemMenuWindowName = "systemMenuWindow"

export default function () {
    const notifications = Notifd.get_default()
    const {audio} = Wp.get_default()!
    return <window
        exclusivity={Astal.Exclusivity.NORMAL}
        anchor={bind(notifications, "notifications").as((notifications) => {
            return notifications.length > 0 ? Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.BOTTOM : Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT
        })}
        // anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT}
        layer={Astal.Layer.TOP}
        className="window"
        name={SystemMenuWindowName}
        application={App}
        margin={5}
        keymode={Astal.Keymode.ON_DEMAND}
        visible={false}>
        <box
            vexpand={bind(notifications, "notifications").as((notifications) => {
                return notifications.length > 0
            })}
            // valign={bind(notifications, "notifications").as((notifications) => {
            //     return notifications.length > 0 ? Gtk.Align.FILL : Gtk.Align.START
            // })}
            vertical={true}>
            <box css={"margin-top: 20px;"}/>
            <NetworkControls/>
            <BluetoothControls/>
            <EndpointControls
                defaultEndpoint={audio.default_speaker}
                endpointsBinding={bind(audio, "speakers")}
                getIcon={getVolumeIcon}/>
            <EndpointControls
                defaultEndpoint={audio.default_microphone}
                endpointsBinding={bind(audio, "microphones")}
                getIcon={getMicrophoneIcon}/>
            <MediaPlayers/>
            <box css={"margin-top: 20px;"}/>
            <ThemeOptions/>
            <box css={"margin-top: 20px;"}/>
            <box className="divider"/>
            <box css={"margin-top: 20px;"}/>
            <PowerOptions/>
            <box css={"margin-top: 20px;"}/>
            <NotificationHistory/>
        </box>
    </window>
}