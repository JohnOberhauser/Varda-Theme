import {App, Astal} from "astal/gtk3"
import EndpointControls from "./EndpointControls";
import Wp from "gi://AstalWp"
import {bind} from "astal"
import {getMicrophoneIcon, getVolumeIcon} from "../utils/audio";
import PowerOptions from "./PowerOptions";
import ThemeOptions from "./ThemeOptions";

export const SystemMenuWindowName = "systemMenuWindow"

export default function (anchor: Astal.WindowAnchor) {
    const {audio} = Wp.get_default()!
    return <window
        exclusivity={Astal.Exclusivity.NORMAL}
        anchor={anchor}
        layer={Astal.Layer.OVERLAY}
        className="window"
        name={SystemMenuWindowName}
        application={App}
        margin={5}
        visible={false}>
        <box
            vertical={true}
            css={"padding-top: 20px;"}>
            <EndpointControls
                defaultEndpoint={audio.default_speaker}
                endpointsBinding={bind(audio, "speakers")}
                getIcon={getVolumeIcon}/>
            <EndpointControls
                defaultEndpoint={audio.default_microphone}
                endpointsBinding={bind(audio, "microphones")}
                getIcon={getMicrophoneIcon}/>
            <box css={"margin-top: 20px;"}/>
            <ThemeOptions/>
            <box css={"margin-top: 20px;"}/>
            <box className="divider"/>
            <box css={"margin-top: 20px;"}/>
            <PowerOptions/>
            <box css={"margin-top: 20px;"}/>
        </box>
    </window>
}