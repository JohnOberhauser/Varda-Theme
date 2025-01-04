import GObject from "gi://GObject"
import {App, Astal, astalify, ConstructProps, Gtk, Gdk} from "astal/gtk3"
import {bind, GLib, Variable} from "astal"

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
    const time = Variable<GLib.DateTime>(GLib.DateTime.new_now_local())
        .poll(1000, () => GLib.DateTime.new_now_local())

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
            css="padding: 20px;"
            vertical={true}>
            <label
                className="labelMedium"
                label={time().as((t) => {
                    return t.format("%A")!
                })}/>
            <label
                className="labelMedium"
                label={time().as((t) => {
                    return t.format("%B %-d, %Y")!
                })}/>
            <box css={`margin-top: 12px;`}/>
            <CalendarWidget
                className="calendar"/>
        </box>
    </window>
}