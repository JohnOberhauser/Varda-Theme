import Apps from "gi://AstalApps"
import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import { Variable } from "astal"

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
        let listApps = apps
            .exact_query(text)
            .filter((app) => app.name.toLowerCase().includes(text.toLowerCase()))
            .sort((a, b) => {
                if (a.name === b.name) {
                    return 0
                }
                let aMatch = a.name.toLowerCase().startsWith(text.toLowerCase())
                let bMatch = b.name.toLowerCase().startsWith(text.toLowerCase())
                if (aMatch && bMatch) {
                    if (a.name > b.name) {
                        return 1
                    } else {
                        return -1
                    }
                } else if (aMatch) {
                    return -1
                } else {
                    return 1
                }
            })
        if (listApps.length - 1 < selectedIndex.get()) {
            if (listApps.length === 0) {
                selectedIndex.set(0)
            } else {
                selectedIndex.set(listApps.length - 1)
            }
        }
        return listApps
    })
    const onEnter = () => {
        if (list.get().length > 0) {
            list.get()?.[selectedIndex.get()].launch()
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
        marginTop={5}
        marginBottom={5}
        visible={false}>
        <box
            widthRequest={500}
            heightRequest={550}
            className="appLauncher"
            vertical={true}>
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
            <scrollable
                className="scrollWindow"
                vscroll={Gtk.PolicyType.AUTOMATIC}
                heightRequest={550}
                canFocus={false}>
                <box spacing={6} vertical={true}>
                    {listBinding(value => value[0].map((app, index) => (
                        <AppButton app={app} isSelected={index === value[1]}/>
                    )))}
                </box>
            </scrollable>
            <box
                halign={CENTER}
                vertical={true}
                visible={list.as(l => l.length === 0)}>
                <label
                    className="labelSmall"
                    label="No match found"/>
            </box>
        </box>
    </window>
}