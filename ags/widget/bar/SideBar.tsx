import {App, Astal, Gtk} from "astal/gtk3"
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
    let iconCss = ""

    return <window
        className="window"
        monitor={0}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        margin={5}
        anchor={Astal.WindowAnchor.TOP
            | Astal.WindowAnchor.LEFT
            | Astal.WindowAnchor.BOTTOM}
        application={App}>
        <centerbox
            vertical={true}
            css={`
                padding: 2px;
                min-width: 40px;
            `}>
            <box vertical={true}>
                <MenuButton css={"padding-top: 6px;"}/>
                <Workspaces vertical={true}/>
            </box>
            <box/>
            <box
                vertical={true}
                valign={Gtk.Align.END}>
                <ScreenRecordingButton css={iconCss}/>
                <VolumeButton css={iconCss}/>
                <MicrophoneButton css={iconCss}/>
                <BluetoothButton css={iconCss}/>
                <VpnButton css={iconCss}/>
                <NetworkButton css={iconCss}/>
                <BatteryButton css={iconCss}/>
                <ClockButton css={"padding-bottom: 6px;"} singleLine={false}/>
            </box>
        </centerbox>
    </window>
}
