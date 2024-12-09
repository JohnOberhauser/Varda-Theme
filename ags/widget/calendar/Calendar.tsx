import GObject from "gi://GObject"
import {App, Astal, astalify, ConstructProps, Gtk} from "astal/gtk3"

export const CalendarWindowName = "calendarWindow"

class CalendarWidget extends astalify(Gtk.Calendar) {
    static {
        GObject.registerClass(this)
    }

    constructor(props: ConstructProps<
        CalendarWidget,
        Gtk.ColorButton.ConstructorProps,
        {}
    >) {
        super(props as any)
    }
}

export default function (anchor: Astal.WindowAnchor) {
    return <window
        monitor={0}
        name={CalendarWindowName}
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