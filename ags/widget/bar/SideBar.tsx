import {App, Astal, Gtk, Gdk} from "astal/gtk4"
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

export default function () {
    return <window
        cssClasses={["transparentBackground"]}
        monitor={0}
        visible={true}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        margin={5}
        anchor={Astal.WindowAnchor.TOP
            | Astal.WindowAnchor.LEFT
            | Astal.WindowAnchor.BOTTOM}
        application={App}>
        <centerbox
            orientation={Gtk.Orientation.VERTICAL}
            cssClasses={["window", "sideBar"]}>
            <box vertical={true}>
                <MenuButton cssClasses={["sideBarMenuButton"]}/>
                <Workspaces vertical={true}/>
            </box>
            <box/>
            <box
                vertical={true}
                valign={Gtk.Align.END}>
                <ScreenRecordingButton/>
                <VolumeButton/>
                <MicrophoneButton/>
                <BluetoothButton/>
                <VpnButton/>
                <NetworkButton/>
                <BatteryButton/>
                <ClockButton cssClasses={["sideBarClockButton"]} singleLine={false}/>
            </box>
        </centerbox>
    </window>
}
