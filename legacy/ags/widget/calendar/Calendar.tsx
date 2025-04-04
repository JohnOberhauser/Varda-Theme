import {App, Astal, Gdk, Gtk} from "astal/gtk4"
import {GLib, Variable} from "astal"
import {Bar, clockPosition, ClockPosition, selectedBar} from "../bar/Bar";

export const CalendarWindowName = "calendarWindow"

export default function () {
    const time = Variable<GLib.DateTime>(GLib.DateTime.new_now_local())
        .poll(1000, () => GLib.DateTime.new_now_local())

    const barValues = Variable.derive([
        selectedBar(),
        clockPosition(),
    ])

    return <window
        monitor={0}
        cssClasses={["focusedWindow"]}
        name={CalendarWindowName}
        application={App}
        anchor={barValues((values) => {
            const bar = values[0]
            const menu = values[1]
            switch (bar) {
                case Bar.TOP:
                    if (menu === ClockPosition.DEFAULT) {
                        return Astal.WindowAnchor.TOP
                    } else {
                        return Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT
                    }
                case Bar.LEFT:
                    if (menu === ClockPosition.DEFAULT) {
                        return Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT
                    } else {
                        return Astal.WindowAnchor.LEFT
                    }
                case Bar.RIGHT:
                    if (menu === ClockPosition.DEFAULT) {
                        return Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT
                    } else {
                        return Astal.WindowAnchor.RIGHT
                    }
                case Bar.BOTTOM:
                    if (menu === ClockPosition.DEFAULT) {
                        return Astal.WindowAnchor.BOTTOM
                    } else {
                        return Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT
                    }
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