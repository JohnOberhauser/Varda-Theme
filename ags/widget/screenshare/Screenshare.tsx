import {App, Astal, Gdk, Gtk} from "astal/gtk3"
import {bind, Variable} from "astal"
import Hyprland from "gi://AstalHyprland"
import {execAsync} from "astal/process"

export const ScreenshareWindowName = "screenshareWindow"

const ButtonCss = `padding: 12px;`
const ButtonClass = "primaryButton"

let response: (response: any) => void = () => {}

export function updateResponse(res: (response: any) => void) {
    response = res
}

const screenShareWindows = Variable<Program[]>([])

type ScreenShareWindow = {
    windowId: string;
    windowProgram: string;
    instanceTitle: string;
};

type Program = {
    name: string;
    windows: ScreenShareWindow[];
};

function parseScreenShareString(input: string): ScreenShareWindow[] {
    // Remove the "screenshare" prefix
    const content = input.replace(/^screenshare/, "");

    // Split the string into parts based on "[HC>]"
    const parts = content.split("[HE>]").filter(part => part.trim() !== "");

    // Map each part to an object
    return parts.filter((part) => {
        return part.includes("[HC>]") && part.includes("[HT>]")
    }).map(part => {
        const [hc, htAndHe] = part.split("[HC>]");
        const [ht, he] = htAndHe.split("[HT>]");

        return {
            windowId: hc.trim(),
            windowProgram: ht?.trim() || "",
            instanceTitle: he?.trim() || "",
        };
    });
}

function groupByWindowProgram(windows: ScreenShareWindow[]): Program[] {
    const grouped: Program[] = [];

    windows.forEach(window => {
        // Find an existing group for this windowProgram
        let group = grouped.find(g => g.name === window.windowProgram);

        // If no group exists, create one
        if (!group) {
            group = { name: window.windowProgram, windows: [] };
            grouped.push(group);
        }

        // Add the window to the group
        group.windows.push(window);
    });

    return grouped;
}

export function updateWindows(input: string) {
    screenShareWindows.set(groupByWindowProgram(parseScreenShareString(input)))
}

function Monitors() {
    const hyprland = Hyprland.get_default()
    const revealed = Variable(false)

    setTimeout(() => {
        bind(App.get_window(ScreenshareWindowName)!, "visible").subscribe((visible) => {
            if (!visible) {
                revealed.set(false)
            }
        })
    }, 1_000)

    return <box
        vertical={true}>
        <box
            vertical={false}>
            <label
                hexpand={true}
                label="󰍹  Monitors"
                halign={Gtk.Align.START}
                className="labelLargeBold"/>
            <button
                className="iconButton"
                label={revealed((revealed): string => {
                    if (revealed) {
                        return ""
                    } else {
                        return ""
                    }
                })}
                onClicked={() => {
                    revealed.set(!revealed.get())
                }}/>
        </box>
        <revealer
            className="rowRevealer"
            revealChild={revealed()}
            transitionDuration={200}
            transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
            <box
                vertical={true}>
                {bind(hyprland, "monitors").as((monitors) => {
                    return monitors.map((monitor) => {
                            return <button
                                hexpand={true}
                                className={ButtonClass}
                                css={ButtonCss}
                                onClicked={() => {
                                    response(`[SELECTION]/screen:${monitor.name}`)
                                    App.toggle_window(ScreenshareWindowName)
                                }}>
                                <label
                                    halign={Gtk.Align.START}
                                    className="labelMediumBold"
                                    label={monitor.name}/>
                            </button>
                        }
                    )
                })}
            </box>
        </revealer>
    </box>
}

function Windows() {
    const revealed = Variable(false)

    setTimeout(() => {
        bind(App.get_window(ScreenshareWindowName)!, "visible").subscribe((visible) => {
            if (!visible) {
                revealed.set(false)
            }
        })
    }, 1_000)

    return <box
        vertical={true}>
        <box
            vertical={false}>
            <label
                hexpand={true}
                label="  Windows"
                halign={Gtk.Align.START}
                className="labelLargeBold"/>
            <button
                className="iconButton"
                label={revealed((revealed): string => {
                    if (revealed) {
                        return ""
                    } else {
                        return ""
                    }
                })}
                onClicked={() => {
                    revealed.set(!revealed.get())
                }}/>
        </box>
        <revealer
            className="rowRevealer"
            revealChild={revealed()}
            transitionDuration={200}
            transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
            <box
                vertical={true}
                spacing={12}>
                {screenShareWindows((programs) => {
                    return programs
                        .sort((a, b) => {
                            if (a.name > b.name) {
                                return 1
                            } else {
                                return -1
                            }
                        })
                        .map((program) => {
                            return <box
                                vertical={true}
                                spacing={6}>
                                <label
                                    halign={Gtk.Align.CENTER}
                                    className="labelLargeBold"
                                    label={program.name}/>
                                {program.windows
                                    .sort((a, b) => {
                                        if (a.instanceTitle > b.instanceTitle) {
                                            return 1
                                        } else {
                                            return -1
                                        }
                                    })
                                    .map((instance) => {
                                        return <button
                                            hexpand={true}
                                            className={ButtonClass}
                                            css={ButtonCss}
                                            onClicked={() => {
                                                response(`[SELECTION]/window:${instance.windowId}`)
                                                App.toggle_window(ScreenshareWindowName)
                                            }}>
                                            <box
                                                vertical={true}>
                                                <label
                                                    halign={Gtk.Align.START}
                                                    className="labelMediumBold"
                                                    label={`${instance.instanceTitle}`}
                                                    truncate={true}/>
                                            </box>
                                        </button>
                                    })
                                }
                            </box>
                        })
                })}
            </box>
        </revealer>
    </box>
}

function Region() {
    const revealed = Variable(false)

    setTimeout(() => {
        bind(App.get_window(ScreenshareWindowName)!, "visible").subscribe((visible) => {
            if (!visible) {
                revealed.set(false)
            }
        })
    }, 1_000)

    return <box
        vertical={true}>
        <box
            vertical={false}>
            <label
                hexpand={true}
                label="  Other"
                halign={Gtk.Align.START}
                className="labelLargeBold"/>
            <button
                className="iconButton"
                label={revealed((revealed): string => {
                    if (revealed) {
                        return ""
                    } else {
                        return ""
                    }
                })}
                onClicked={() => {
                    revealed.set(!revealed.get())
                }}/>
        </box>

        <revealer
            className="rowRevealer"
            revealChild={revealed()}
            transitionDuration={200}
            transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
            <button
                hexpand={true}
                className={ButtonClass}
                css={ButtonCss}
                onClicked={() => {
                    execAsync("slurp -f \"%o %x %y %w %h\"")
                        .catch((error) => {
                            print(error)
                            response(`[SELECTION]/region:`)
                        })
                        .then((value) => {
                            if (typeof value === "string") {
                                const [name, x, y, w, h] = value.split(" ")
                                response(`[SELECTION]/region:${name}@${x},${y},${w},${h}`)
                            } else {
                                response(`[SELECTION]/region:`)
                            }
                        })
                        .finally(() => {
                            App.toggle_window(ScreenshareWindowName)
                        })
                }}>
                <label
                    halign={Gtk.Align.START}
                    className="labelMediumBold"
                    label="Region"/>
            </button>
        </revealer>
    </box>
}

export default function () {
    let window: Gtk.Window

    return <window
        monitor={0}
        name={ScreenshareWindowName}
        anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.BOTTOM}
        application={App}
        layer={Astal.Layer.TOP}
        keymode={Astal.Keymode.EXCLUSIVE}

        css={`background: transparent;`}
        margin={5}
        visible={false}
        onKeyPressEvent={function (self, event: Gdk.Event) {
            if (event.get_keyval()[1] === Gdk.KEY_Escape) {
                self.hide()
                response(`[SELECTION]/`)
            }
        }}
        setup={(self) => {
            window = self
        }}>
        <box
            vertical={true}
            css={`padding: 2px`}>
            <box
                vexpand={true}/>
            <box
                setup={(self) => {
                    setTimeout(() => {
                        bind(window, "hasToplevelFocus").subscribe((hasFocus) => {
                            if (hasFocus) {
                                self.className = "focusedWindow"
                            } else {
                                self.className = "window"
                            }
                        })
                    }, 1_000)
                }}>
                <scrollable
                    widthRequest={500}
                    className="scrollWindow"
                    vscroll={Gtk.PolicyType.AUTOMATIC}
                    propagateNaturalHeight={true}>
                    <box
                        vertical={true}
                        css="padding: 20px;"
                        spacing={30}>
                        <Monitors/>
                        <Windows/>
                        <Region/>
                    </box>
                </scrollable>
            </box>
            <box
                vexpand={true}/>
        </box>
    </window>
}