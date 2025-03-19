import {App, Astal} from "astal/gtk4"
import EndpointControls from "./EndpointControls";
import Wp from "gi://AstalWp"
import {bind} from "astal"
import {Gtk, Gdk} from "astal/gtk4"
import {getMicrophoneIcon, getVolumeIcon} from "../utils/audio";
import PowerOptions from "./PowerOptions";
import MediaPlayers from "./MediaPlayers";
import NotificationHistory from "./NotificationHistory";
import NetworkControls from "./NetworkControls";
import BluetoothControls from "./BluetoothControls";
import Divider from "../common/Divider";
import ThemeControls from "./ThemeControls";

export const SystemMenuWindowName = "systemMenuWindow"

export default function () {
    const {audio} = Wp.get_default()!

    let window: Gtk.Window

    return <window
        exclusivity={Astal.Exclusivity.NORMAL}
        anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.BOTTOM}
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
        }}
        setup={(self) => {
            window = self
        }}>
        <box
            vertical={true}>
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
                        <ThemeControls/>

                        {/*Disabling Media players since it seems to cause heavy lag when I use spotify-player (tui spotify)*/}
                        {/*Also requires gvfs package installed*/}
                        {/*<MediaPlayers/>*/}
                        {/*<box css={"margin-top: 20px;"}/>*/}
                        {/*<Divider css={"margin: 0 60px 0 60px;"}/>*/}

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
                vexpand={true}/>
        </box>
    </window>
}