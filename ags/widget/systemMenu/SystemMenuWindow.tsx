import {App, Astal} from "astal/gtk3"
import EndpointControls from "./EndpointControls";
import Wp from "gi://AstalWp"
import {bind} from "astal"
import {getMicrophoneIcon, getVolumeIcon} from "../utils/audio";
import PowerOptions from "./PowerOptions";
import ThemeOptions from "./ThemeOptions";
import MediaPlayers from "./MediaPlayers";
import NotificationHistory from "./NotificationHistory";
import NetworkControls from "./NetworkControls";

export const SystemMenuWindowName = "systemMenuWindow"

export default function (anchor: Astal.WindowAnchor) {
    const {audio} = Wp.get_default()!
    return <window
        exclusivity={Astal.Exclusivity.NORMAL}
        anchor={anchor}
        layer={Astal.Layer.TOP}
        className="window"
        name={SystemMenuWindowName}
        application={App}
        margin={5}
        keymode={Astal.Keymode.ON_DEMAND}
        visible={false}>
        <box
            vertical={true}>
            <box css={"margin-top: 20px;"}/>
            <NetworkControls/>
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
            <box css={"margin-top: 20px;"}/>
        </box>
    </window>
}