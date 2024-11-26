import GObject from "gi://GObject"
import { Astal, Gtk, astalify, ConstructProps, App } from "astal/gtk3"

export const CalendarWindow = "calendarWindow"

class CalendarWidget extends astalify(Gtk.Calendar) {
    static { GObject.registerClass(this) }

    constructor(props: ConstructProps<
        CalendarWidget,
        Gtk.ColorButton.ConstructorProps,
        { }
    >) {
        super(props as any)
    }
}

export default function Calendar(anchor: Astal.WindowAnchor) {
    return <window
    monitor={0}
    name={CalendarWindow}
    application={App}
    anchor={anchor}
    layer={Astal.Layer.OVERLAY}
    className="window"
    margin={5}
    visible={false}>
        <box
            css="padding: 20px;">
            <CalendarWidget
                className="calendar"/>
        </box>
    </window>
}