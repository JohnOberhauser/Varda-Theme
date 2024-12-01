import Apps from "gi://AstalApps"
import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import { Variable } from "astal"

const MAX_ITEMS = 10

export const AppLauncherWindowName = "appLauncher"

function hide() {
    App.get_window(AppLauncherWindowName)!.hide()
}

function AppButton({ app }: { app: Apps.Application }) {
    return <button
        className="appButton"
        onClicked={() => { hide(); app.launch() }}>
        <box>
            <box valign={Gtk.Align.CENTER} vertical={true}>
                <label
                    className="name"
                    truncate
                    xalign={0}
                    label={app.name}
                />
            </box>
        </box>
    </button>
}

export default function () {
    const { CENTER } = Gtk.Align
    const apps = new Apps.Apps()

    const text = Variable("")
    const list = text(text => apps.fuzzy_query(text).slice(0, MAX_ITEMS))
    const onEnter = () => {
        let currentApps = apps.fuzzy_query(text.get())
        if (currentApps.length > 0) {
            apps.fuzzy_query(text.get())?.[0].launch()
        }
        hide()
    }

    return <window
        className="window"
        name={AppLauncherWindowName}
        anchor={Astal.WindowAnchor.TOP}
        exclusivity={Astal.Exclusivity.IGNORE}
        keymode={Astal.Keymode.ON_DEMAND}
        application={App}
        onShow={() => text.set("")}
        onKeyPressEvent={function (self, event: Gdk.Event) {
            if (event.get_keyval()[1] === Gdk.KEY_Escape)
                self.hide()
        }}
        margin_top={400}
        visible={false}>
        <box widthRequest={500} heightRequest={500} className="appLauncher" vertical={true}>
            <box
                vertical={false}>
                <label
                    className="searchIcon"
                    label=""/>
                <entry
                    className="searchField"
                    placeholderText="Search"
                    text={text()}
                    onChanged={self => text.set(self.text)}
                    onActivate={onEnter}
                    hexpand={true}
                />
            </box>
            <box spacing={6} vertical={true}>
                {list.as(list => list.map(app => (
                    <AppButton app={app}/>
                )))}
            </box>
            <box
                halign={CENTER}
                className="not-found"
                vertical={true}
                visible={list.as(l => l.length === 0)}>
                <label label="No match found" />
            </box>
        </box>
    </window>
}