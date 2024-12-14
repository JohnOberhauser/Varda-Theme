import {App, Astal, Gdk} from "astal/gtk3"
import {bind, Variable} from "astal"
import Hyprland from "gi://AstalHyprland"
import {execAsync} from "astal/process"

export const ScreenshareWindowName = "screenshotWindow"

const ButtonWidth = 400
const ButtonCss = `padding: 12px;`

let response: (response: any) => void = () => {}

export function updateResponse(res: (response: any) => void) {
    response = res
}

const screenShareWindows = Variable<ScreenShareWindow[]>([])

type ScreenShareWindow = {
    HC: string;
    HT: string;
    HE: string;
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
            HC: hc.trim(),
            HT: ht?.trim() || "",
            HE: he?.trim() || "",
        };
    });
}

export function updateWindows(input: string) {
    screenShareWindows.set(parseScreenShareString(input))
}

function Region() {
    return <button
        widthRequest={ButtonWidth}
        className="primaryButton"
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
            className="labelMediumBold"
            label="Region"/>
    </button>
}

export default function () {
    const hyprland = Hyprland.get_default()

    return <window
        monitor={0}
        name={ScreenshareWindowName}
        application={App}
        layer={Astal.Layer.OVERLAY}
        keymode={Astal.Keymode.EXCLUSIVE}
        className="focusedWindow"
        margin={5}
        visible={false}
        onKeyPressEvent={function (self, event: Gdk.Event) {
            if (event.get_keyval()[1] === Gdk.KEY_Escape) {
                self.hide()
                response(`[SELECTION]/`)
            }
        }}>
        <box
            vertical={true}
            css="padding: 20px;"
            spacing={6}>
            <label
                label="Monitors"
                className="labelMedium"/>
            {bind(hyprland, "monitors").as((monitors) => {
                return monitors.map((monitor) => {
                        return <button
                            widthRequest={ButtonWidth}
                            className="primaryButton"
                            css={ButtonCss}
                            onClicked={() => {
                                response(`[SELECTION]/screen:${monitor.name}`)
                                App.toggle_window(ScreenshareWindowName)
                            }}>
                            <label
                                className="labelMediumBold"
                                label={monitor.name}/>
                        </button>
                    }
                )
            })}
            <box className="divider" css={`margin: 12px 0 12px 0`}/>
            <label
                label="Clients"
                className="labelMedium"/>
            {screenShareWindows((clients) => {
                return clients.map((client) => {
                        return <button
                            widthRequest={ButtonWidth}
                            className="primaryButton"
                            css={ButtonCss}
                            onClicked={() => {
                                response(`[SELECTION]/window:${client.HC}`)
                                App.toggle_window(ScreenshareWindowName)
                            }}>
                            <box
                                vertical={true}>
                                <label
                                    className="labelMediumBold"
                                    label={`${client.HE}`}
                                    truncate={true}/>
                                <label
                                    className="labelMedium"
                                    label={`${client.HT}`}
                                    truncate={true}/>
                            </box>
                        </button>
                    }
                )
            })}
            <box className="divider" css={`margin: 12px 0 12px 0`}/>
            <Region/>
        </box>
    </window>
}