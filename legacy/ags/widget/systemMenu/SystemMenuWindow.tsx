import {App, Astal, Gdk, Gtk} from "astal/gtk4"
import EndpointControls from "./EndpointControls";
import Wp from "gi://AstalWp"
import {bind, Variable} from "astal"
import {getMicrophoneIcon, getVolumeIcon} from "../utils/audio";
import PowerOptions from "./PowerOptions";
import MediaPlayers from "./MediaPlayers";
import NotificationHistory from "./NotificationHistory";
import NetworkControls from "./NetworkControls";
import BluetoothControls from "./BluetoothControls";
import LookAndFeelControls from "./LookAndFeelControls";
import {Bar, MenuPosition, menuPosition, selectedBar} from "../bar/Bar";

export const SystemMenuWindowName = "systemMenuWindow"

export default function () {
    const {audio} = Wp.get_default()!

    const barValues = Variable.derive([
        selectedBar(),
        menuPosition(),
    ])

    return <window
        exclusivity={Astal.Exclusivity.NORMAL}
        anchor={barValues((values) => {
            const bar = values[0]
            const menu = values[1]
            if (bar === Bar.RIGHT || ((bar === Bar.TOP || bar === Bar.BOTTOM) && menu === MenuPosition.ALTERNATE)) {
                return Astal.WindowAnchor.TOP
                    | Astal.WindowAnchor.RIGHT
                    | Astal.WindowAnchor.BOTTOM
            } else {
                return Astal.WindowAnchor.TOP
                    | Astal.WindowAnchor.LEFT
                    | Astal.WindowAnchor.BOTTOM
            }
        })}
        layer={Astal.Layer.TOP}
        cssClasses={["transparentBackground"]}
        name={SystemMenuWindowName}
        application={App}
        margin={5}
        keymode={Astal.Keymode.ON_DEMAND}
        visible={false}
        onKeyPressed={function (self, key) {
            if (key === Gdk.KEY_Escape) {
                self.hide()
            }
        }}>
        <box
            vertical={true}>
            <box
                vexpand={barValues((values) => {
                    const bar = values[0]
                    const menu = values[1]
                    return bar === Bar.BOTTOM
                        || (bar === Bar.LEFT && menu === MenuPosition.ALTERNATE)
                        || (bar === Bar.RIGHT && menu === MenuPosition.ALTERNATE)
                })}/>
            <box
                vertical={true}
                cssClasses={["focusedWindow"]}>
                <Gtk.ScrolledWindow
                    cssClasses={["scrollWindow"]}
                    vscrollbarPolicy={Gtk.PolicyType.AUTOMATIC}
                    propagateNaturalHeight={true}
                    widthRequest={400}>
                    <box
                        vertical={true}>
                        <box marginTop={20}/>
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
                        <LookAndFeelControls/>
                        {/*MediaPlayersAstal uses the astal mpris component.  It causes UI jank.  Until it gets fix
                        use MediaPlayers.  It uses a home-made mpris component that doesn't cause the jank.*/}
                        {/*<MediaPlayersAstal/>*/}
                        <MediaPlayers/>
                        <box marginTop={10}/>
                        <PowerOptions/>
                        <box marginTop={20}/>
                        <box
                            vertical={false}
                            marginStart={10}
                            marginEnd={10}>
                            <NotificationHistory/>
                        </box>
                        <box marginTop={2}/>
                    </box>
                </Gtk.ScrolledWindow>
            </box>
            <box
                vexpand={barValues((values) => {
                    const bar = values[0]
                    const menu = values[1]
                    return bar === Bar.TOP
                        || (bar === Bar.LEFT && menu === MenuPosition.DEFAULT)
                        || (bar === Bar.RIGHT && menu === MenuPosition.DEFAULT)
                })}/>
        </box>
    </window>
}