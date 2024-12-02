import Apps from "gi://AstalApps"
import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import { Variable } from "astal"

const MAX_ITEMS = 10

export const AppLauncherWindowName = "appLauncher"

function hide() {
    App.get_window(AppLauncherWindowName)!.hide()
}

function AppButton({ app, isSelected }: { app: Apps.Application, isSelected: boolean }) {
    return <button
        canFocus={false}
        className={isSelected ? "selectedAppButton" : "appButton"}
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

    const selectedIndex = Variable(0)
    const text = Variable("")
    const list = text(text => {
        let listApps = apps.fuzzy_query(text).slice(0, MAX_ITEMS)
        if (listApps.length - 1 < selectedIndex.get()) {
            selectedIndex.set(listApps.length - 1)
        }
        return listApps
    })
    const onEnter = () => {
        let currentApps = apps.fuzzy_query(text.get())
        if (currentApps.length > 0) {
            currentApps?.[selectedIndex.get()].launch()
        }
        hide()
    }
    const listBinding = Variable.derive([
        list,
        selectedIndex
    ])

    return <window
        className="focusedWindow"
        name={AppLauncherWindowName}
        anchor={Astal.WindowAnchor.TOP}
        exclusivity={Astal.Exclusivity.IGNORE}
        keymode={Astal.Keymode.EXCLUSIVE}
        application={App}
        onShow={() => {
            text.set("")
            selectedIndex.set(0)
        }}
        onKeyPressEvent={function (self, event: Gdk.Event) {
            if (event.get_keyval()[1] === Gdk.KEY_Escape) {
                self.hide()
            } else if (event.get_keyval()[1] === Gdk.KEY_Down && list.get().length >= selectedIndex.get()) {
                selectedIndex.set(selectedIndex.get() + 1)
            } else if (event.get_keyval()[1] === Gdk.KEY_Up && selectedIndex.get() != 0) {
                selectedIndex.set(selectedIndex.get() - 1)
            }
        }}
        margin_top={200}
        visible={false}>
        <box widthRequest={500} heightRequest={550} className="appLauncher" vertical={true}>
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
                {listBinding(value => value[0].map((app, index) => (
                    <AppButton app={app} isSelected={index === value[1]}/>
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