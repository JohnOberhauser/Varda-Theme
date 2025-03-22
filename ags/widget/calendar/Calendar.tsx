import {App, Astal, Gtk, Gdk} from "astal/gtk4"
import {GLib, Variable} from "astal"
import {selectedBar, Bar} from "../bar/Bar";

export const CalendarWindowName = "calendarWindow"

export default function () {
    const time = Variable<GLib.DateTime>(GLib.DateTime.new_now_local())
        .poll(1000, () => GLib.DateTime.new_now_local())

    return <window
        monitor={0}
        cssClasses={["focusedWindow"]}
        name={CalendarWindowName}
        application={App}
        anchor={selectedBar((bar) => {
            switch (bar) {
                case Bar.TOP:
                    return Astal.WindowAnchor.TOP
                case Bar.LEFT:
                    return Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT
                case Bar.RIGHT:
                    return Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT
                case Bar.BOTTOM:
                    return Astal.WindowAnchor.BOTTOM
            }
        })}
        layer={Astal.Layer.TOP}
        margin={5}
        visible={false}
        keymode={Astal.Keymode.ON_DEMAND}
        onKeyPressed={function (self, key) {
            if (key === Gdk.KEY_Escape) {
                self.hide()
            }
        }}>
        <box
            cssClasses={["calendarBox"]}
            vertical={true}>
            <label
                cssClasses={["labelMedium"]}
                label={time().as((t) => {
                    return t.format("%A")!
                })}/>
            <label
                cssClasses={["labelMedium"]}
                label={time().as((t) => {
                    return t.format("%B %-d, %Y")!
                })}/>
            <Gtk.Calendar
                marginTop={12}
                cssClasses={["calendar"]}/>
        </box>
    </window>
}