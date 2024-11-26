import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import {Workspaces} from "./BarWidgets";

export default function TopBar() {
    return <window
        className="window"
        monitor={0}
        exclusivity={Astal.Exclusivity.EXCLUSIVE}
        margin={5}
        anchor={Astal.WindowAnchor.TOP
            | Astal.WindowAnchor.LEFT
            | Astal.WindowAnchor.RIGHT}
        application={App}>
        <centerbox
            css={`
                padding: 2px;
                min-height: 40px;
            `}>
            <box hexpand halign={Gtk.Align.START}>
                <Workspaces vertical={false}/>
            </box>
            <box>

            </box>
            <box hexpand halign={Gtk.Align.END}>

            </box>
        </centerbox>
    </window>
}
