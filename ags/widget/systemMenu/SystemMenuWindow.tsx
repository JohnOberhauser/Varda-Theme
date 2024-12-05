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

export const SystemMenuWindowName = "systemMenuWindow"

export default function () {
    const {audio} = Wp.get_default()!
    return <window
        exclusivity={Astal.Exclusivity.NORMAL}
        anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.BOTTOM}
        layer={Astal.Layer.TOP}
        css={`background: transparent;`}
        name={SystemMenuWindowName}
        application={App}
        margin={5}
        keymode={Astal.Keymode.ON_DEMAND}
        visible={false}
        clickThrough={true}>
        <box
            vertical={true}>
            <box
                className="window"
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
            <box
                vexpand={true}/>
        </box>
    </window>
}