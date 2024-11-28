import { App, Astal, Gtk } from "astal/gtk3"
import {SpeakerVolume} from "./VolumeControls";

export const SystemMenuWindowName = "systemMenuWindow"

export default function(anchor: Astal.WindowAnchor) {
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
                    <SpeakerVolume/>
            </box>
    </window>
}