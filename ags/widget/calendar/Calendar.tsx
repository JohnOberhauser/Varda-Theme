import GObject from "gi://GObject"
import {App, Astal, astalify, ConstructProps, Gtk, Gdk} from "astal/gtk3"
import {bind} from "astal"

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
        layer={Astal.Layer.TOP}
        margin={5}
        visible={false}
        keymode={Astal.Keymode.ON_DEMAND}
        onKeyPressEvent={function (self, event: Gdk.Event) {
            if (event.get_keyval()[1] === Gdk.KEY_Escape) {
                self.hide()
            }
        }}
        setup={(self) => {
            bind(self, "hasToplevelFocus").subscribe((hasFocus) => {
                if (hasFocus) {
                    self.className = "focusedWindow"
                } else {
                    self.className = "window"
                }
            })
        }}>
        <box
            css="padding: 20px;">
            <CalendarWidget
                className="calendar"/>
        </box>
    </window>
}