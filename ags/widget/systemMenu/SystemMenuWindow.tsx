import { App, Astal, Gtk } from "astal/gtk3"
import {EndpointControls} from "./VolumeControls";
import Wp from "gi://AstalWp"
import { bind } from "astal"
import {getMicrophoneIcon, getVolumeIcon} from "../utils/audio";

export const SystemMenuWindowName = "systemMenuWindow"

export default function(anchor: Astal.WindowAnchor) {
    const {audio} = Wp.get_default()!
    return <window
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
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
            </box>
    </window>
}