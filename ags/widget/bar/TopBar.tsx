import {App, Astal, Gtk} from "astal/gtk4"
import {
    BatteryButton,
    BluetoothButton,
    ClockButton,
    MenuButton,
    MicrophoneButton,
    NetworkButton,
    ScreenRecordingButton,
    VolumeButton, VpnButton,
    Workspaces
} from "./BarWidgets";
import {selectedBar, Bar} from "./Bar";

export default function () {
    return <window
        visible={selectedBar((bar) => {
            return bar === Bar.TOP
        })}
        cssClasses={["transparentBackground"]}
        monitor={0}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        margin={5}
        anchor={Astal.WindowAnchor.TOP
            | Astal.WindowAnchor.LEFT
            | Astal.WindowAnchor.RIGHT}
        application={App}>
        <centerbox
            orientation={Gtk.Orientation.HORIZONTAL}
            cssClasses={["window", "topBar"]}>
            <box halign={Gtk.Align.START}>
                <MenuButton cssClasses={[]}/>
                <Workspaces vertical={false}/>
            </box>
            <box>
                <ClockButton cssClasses={[]} singleLine={true}/>
            </box>
            <box halign={Gtk.Align.END}>
                <ScreenRecordingButton/>
                <VolumeButton/>
                <MicrophoneButton/>
                <BluetoothButton/>
                <VpnButton/>
                <NetworkButton/>
                <BatteryButton/>
            </box>
        </centerbox>
    </window>
}
