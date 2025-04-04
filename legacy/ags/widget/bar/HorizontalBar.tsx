import {App, Astal, Gtk} from "astal/gtk4"
import {
    BatteryButton,
    BluetoothButton,
    ClockButton,
    MenuButton,
    MicrophoneButton,
    NetworkButton,
    ScreenRecordingButton,
    VolumeButton,
    VpnButton,
    Workspaces
} from "./BarWidgets";
import {Bar, ClockPosition, clockPosition, menuPosition, MenuPosition, selectedBar} from "./Bar";

export default function () {
    return <window
        visible={selectedBar((bar) => {
            return bar === Bar.TOP || bar === Bar.BOTTOM
        })}
        cssClasses={["transparentBackground"]}
        monitor={0}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        margin={5}
        anchor={selectedBar((bar) => {
            if (bar === Bar.TOP) {
                return Astal.WindowAnchor.TOP
                    | Astal.WindowAnchor.LEFT
                    | Astal.WindowAnchor.RIGHT
            } else {
                return Astal.WindowAnchor.BOTTOM
                    | Astal.WindowAnchor.LEFT
                    | Astal.WindowAnchor.RIGHT
            }
        })}
        application={App}>
        <centerbox
            orientation={Gtk.Orientation.HORIZONTAL}
            cssClasses={["window", "topBar"]}>
            <box halign={Gtk.Align.START}>
                {menuPosition((position) => {
                    if (position === MenuPosition.DEFAULT) {
                        return <MenuButton cssClasses={[]}/>
                    } else {
                        return <box/>
                    }
                })}
                <Workspaces vertical={false}/>
            </box>
            <box>
                {clockPosition((position) => {
                    if (position === ClockPosition.DEFAULT) {
                        return <ClockButton cssClasses={[]} singleLine={true}/>
                    } else {
                        return <box/>
                    }
                })}
            </box>
            <box halign={Gtk.Align.END}>
                <ScreenRecordingButton/>
                <VolumeButton/>
                <MicrophoneButton/>
                <BluetoothButton/>
                <VpnButton/>
                <NetworkButton/>
                <BatteryButton/>
                {clockPosition((position) => {
                    if (position === ClockPosition.ALTERNATE) {
                        return <ClockButton cssClasses={[]} singleLine={true}/>
                    } else {
                        return <box/>
                    }
                })}
                {menuPosition((position) => {
                    if (position === MenuPosition.ALTERNATE) {
                        return <MenuButton cssClasses={[]}/>
                    } else {
                        return <box/>
                    }
                })}
            </box>
        </centerbox>
    </window>
}
