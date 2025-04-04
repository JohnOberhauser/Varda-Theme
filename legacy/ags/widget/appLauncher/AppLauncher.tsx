import Apps from "gi://AstalApps"
import { App, Astal, Gdk, Gtk } from "astal/gtk4"
import { Variable } from "astal"
import {execAsync} from "astal/process"
import Pango from "gi://Pango?version=1.0";

export const AppLauncherWindowName = "appLauncher"

function hide() {
    App.get_window(AppLauncherWindowName)!.hide()
}

function launchApp(app: Apps.Application) {
    execAsync(`uwsm app -- ${app.entry}`)
        .catch((error) => {
            print(error)
        })
}

interface AppButtonProps {
    app: Apps.Application;
    isSelected: boolean;
    indexInList: number;
    selectedIndexVariable: Variable<number>;
}

function AppButton({ app, isSelected, indexInList, selectedIndexVariable }: AppButtonProps) {
    return <button
        canFocus={false}
        cssClasses={isSelected ? ["selectedAppButton"] : ["appButton"]}
        onHoverEnter={() => {
            // Uncomment to select the hovered app.
            // selectedIndexVariable.set(indexInList)
        }}
        onClicked={() => {
            hide()
            launchApp(app)
        }}>
        <box>
            <box valign={Gtk.Align.CENTER} vertical={true}>
                <label
                    cssClasses={["name"]}
                    xalign={0}
                    label={app.name}
                    ellipsize={Pango.EllipsizeMode.END}
                />
            </box>
        </box>
    </button>
}

export default function () {
    const { CENTER } = Gtk.Align
    let apps = new Apps.Apps()

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
            const app = list.get()?.[selectedIndex.get()]
            if (app !== null) {
                launchApp(app)
            }
        }
        hide()
    }
    const listBinding = Variable.derive([
        list,
        selectedIndex
    ])
    let textEntryBox: Gtk.Entry | null = null

    return <window
        name={AppLauncherWindowName}
        anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.BOTTOM}
        exclusivity={Astal.Exclusivity.IGNORE}
        keymode={Astal.Keymode.EXCLUSIVE}
        layer={Astal.Layer.TOP}
        application={App}
        onShow={() => {
            apps = new Apps.Apps()
            text.set("")
            selectedIndex.set(0)
            if (textEntryBox != null) {
                textEntryBox.text = ""
            }
        }}
        onKeyPressed={function (self, key) {
            if (key === Gdk.KEY_Escape) {
                self.hide()
            } else if (key === Gdk.KEY_Down && list.get().length >= selectedIndex.get()) {
                selectedIndex.set(selectedIndex.get() + 1)
            } else if (key === Gdk.KEY_Up && selectedIndex.get() != 0) {
                selectedIndex.set(selectedIndex.get() - 1)
            }
        }}
        cssClasses={["transparentBackground"]}
        marginTop={200}
        marginBottom={200}
        visible={false}>
        <box
            vertical={true}>
            <box
                cssClasses={["focusedWindow"]}>
                <box
                    widthRequest={500}
                    cssClasses={["appLauncher"]}
                    vertical={true}>
                    <box
                        vertical={false}>
                        <label
                            cssClasses={["searchIcon"]}
                            label=""/>
                        <entry
                            cssClasses={["searchField"]}
                            placeholderText="Search"
                            onChanged={self => text.set(self.text)}
                            onActivate={onEnter}
                            hexpand={true}
                            setup={(self) => {
                                textEntryBox = self
                            }}
                        />
                    </box>
                    <Gtk.ScrolledWindow
                        cssClasses={["scrollWindow"]}
                        vscrollbarPolicy={Gtk.PolicyType.AUTOMATIC}
                        propagateNaturalHeight={true}
                        canFocus={false}>
                        <box spacing={6} vertical={true}>
                            {listBinding(value => value[0].map((app, index) => (
                                <AppButton
                                    app={app}
                                    isSelected={index === value[1]}
                                    indexInList={index}
                                    selectedIndexVariable={selectedIndex}/>
                            )))}
                            <box
                                halign={CENTER}
                                vertical={true}
                                marginBottom={8}
                                visible={list.as(l => l.length === 0)}>
                                <label
                                    cssClasses={["labelSmall"]}
                                    label="No match found"/>
                            </box>
                            <box/>
                        </box>
                    </Gtk.ScrolledWindow>
                </box>
            </box>
            <box
                vexpand={true}/>
        </box>
    </window>
}