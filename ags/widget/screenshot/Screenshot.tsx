import {App, Astal, Gdk, Gtk} from "astal/gtk3"
import {execAsync} from "astal/process"
import {bind, Variable, GLib} from "astal"
import Divider from "../common/Divider";

export const isRecording = Variable(false)

export const ScreenshotWindowName = "screenshotWindow"

type AudioSource = {
    name: string;
    description: string;
    isMonitor: boolean;
};

const audioOptions = Variable<AudioSource[]>([])

let screenshotDir = ""
let screenRecordingDir = ""

function setDirectories() {
    execAsync([
        "bash",
        "-c",
        `
    mkdir -p $(xdg-user-dir PICTURES)/Screenshots
    echo $(xdg-user-dir PICTURES)/Screenshots
    `
    ]).then((value) => {
        screenshotDir = value
    })

    execAsync([
        "bash",
        "-c",
        `
        mkdir -p $(xdg-user-dir VIDEOS)/ScreenRecordings
        echo $(xdg-user-dir VIDEOS)/ScreenRecordings
        `
    ]).then((value) => {
        screenRecordingDir = value
    })
}

function updateAudioOptions() {
    execAsync([
        "bash",
        "-c",
        `pactl list sources | grep -E "Name:|Description"`
    ]).catch((error) => {
        print(error)
    }).then((value) => {
        if (typeof value !== "string") {
            return
        }

        // Split the input into lines
        const lines = value.split('\n');

        // Initialize an empty array to hold the result
        const result: AudioSource[] = [];

        // Iterate through the lines in pairs (Name, Description)
        for (let i = 0; i < lines.length; i += 2) {
            // Ensure the line is not empty and follows the expected format
            const nameLine = lines[i].trim();
            const descriptionLine = lines[i + 1]?.trim();

            // Match the "Name" prefix
            if (nameLine.startsWith("Name: ") && descriptionLine?.startsWith("Description: ")) {
                // Extract the name and description values
                const name = nameLine.replace("Name: ", "");
                const description = descriptionLine.replace("Description: ", "");
                const isMonitor = nameLine.includes("monitor")

                // Add to the result array
                result.push({ name, description, isMonitor });
            }
        }

        audioOptions.set(result)
    })
}

function showScreenshotNotification(filePath: string) {
    showNotification(filePath, "Screenshot")
}

function showScreenRecordingNotification(filePath: string) {
    showNotification(filePath, "Screen Recording")
}

function showNotification(
    filePath: string,
    appName: string
) {
    execAsync([
        "bash",
        "-c",
        `
        ACTION="viewScreenshot"
        # Send a notification with an action to view the file
        notify-send "File saved at ${filePath}" \
            --app-name="${appName}" \
            --action=$ACTION="View in Files" |
        while read -r action; do
            if [[ "$action" == $ACTION ]]; then
                xdg-open "$(dirname "${filePath}")"
            fi
        done
    `
    ]).catch((error) => {
        print(error)
    }).then((value) => {
        print(value)
    })
}

function ScreenshotButton(
    {
        icon,
        label,
        onClicked
    } : {
        icon: string,
        label: string,
        onClicked: () => void
    }
) {
    return <button
        widthRequest={130}
        className="primaryButton"
        css={`margin: 0 8px 0 8px;`}
        onClicked={onClicked}>
        <box
            vertical={true}>
            <label
                className="labelLargeBold"
                css={`font-size: 34px; padding-right: 6px`}
                label={icon}/>
            <label
                label={label}/>
        </box>
    </button>
}

export default function () {
    const selectedAudio = Variable<AudioSource | null>(null)
    const audioRevealed = Variable(false)
    setDirectories()
    updateAudioOptions()

    setTimeout(() => {
        bind(App.get_window(ScreenshotWindowName)!, "visible").subscribe((visible) => {
            if (!visible) {
                selectedAudio.set(null)
                audioRevealed.set(false)
            } else {
                updateAudioOptions()
            }
        })
    }, 1_000)

    return <window
        monitor={0}
        name={ScreenshotWindowName}
        application={App}
        layer={Astal.Layer.TOP}
        keymode={Astal.Keymode.EXCLUSIVE}
        margin={5}
        visible={false}
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
            vertical={true}
            css="padding: 20px;">
            <label
                className="labelLargeBold"
                css={`margin-bottom: 8px;`}
                label="Screenshot"/>
            <box
                vertical={false}>
                <ScreenshotButton
                    icon={""}
                    label={"All"}
                    onClicked={() => {
                        App.toggle_window(ScreenshotWindowName)
                        const time = GLib.DateTime.new_now_local().format("%Y_%m_%d_%H_%M_%S")!
                        const path = `${screenshotDir}/${time}_screenshot.png`
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                sleep 0.7
                                grim ${path}
                                play $HOME/.config/hypr/assets/sounds/camera-shutter.ogg
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        }).finally(() => {
                            showScreenshotNotification(path)
                        })
                    }}/>
                <ScreenshotButton
                    icon={"󰹑"}
                    label={"Monitor"}
                    onClicked={() => {
                        App.toggle_window(ScreenshotWindowName)
                        const time = GLib.DateTime.new_now_local().format("%Y_%m_%d_%H_%M_%S")!
                        const path = `${screenshotDir}/${time}_screenshot.png`
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                grim -g "$(slurp -o)" ${path}
                                play $HOME/.config/hypr/assets/sounds/camera-shutter.ogg
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        }).finally(() => {
                            showScreenshotNotification(path)
                        })
                    }}/>
                <ScreenshotButton
                    icon={""}
                    label={"Area"}
                    onClicked={() => {
                        App.toggle_window(ScreenshotWindowName)
                        const time = GLib.DateTime.new_now_local().format("%Y_%m_%d_%H_%M_%S")!
                        const path = `${screenshotDir}/${time}_screenshot.png`
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                grim -g "$(slurp)" ${path}
                                play $HOME/.config/hypr/assets/sounds/camera-shutter.ogg
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        }).finally(() => {
                            showScreenshotNotification(path)
                        })
                    }}/>
            </box>
            <Divider css={`margin: 20px 0 10px 0;`}/>
            <label
                className="labelLargeBold"
                css={`margin-bottom: 8px;`}
                label="Screen Record"/>
            <box
                vertical={false}
                className="row">
                <label
                    className="labelLargeBold"
                    css={`margin-right: 20px;`}
                    label={selectedAudio().as((value) => {
                        if (value === null) {
                            return "󰝟"
                        } else {
                            return value.isMonitor ? "󰕾" : ""
                        }
                    })}/>
                <label
                    className="labelMediumBold"
                    halign={Gtk.Align.START}
                    hexpand={true}
                    truncate={true}
                    label={selectedAudio().as((value) => {
                        if (value === null) {
                            return "No Audio"
                        } else {
                            return value.description
                        }
                    })}/>
                <button
                    className="iconButton"
                    label={audioRevealed((revealed): string => {
                        if (revealed) {
                            return ""
                        } else {
                            return ""
                        }
                    })}
                    onClicked={() => {
                        audioRevealed.set(!audioRevealed.get())
                    }}/>
            </box>
            <revealer
                className="rowRevealer"
                revealChild={audioRevealed()}
                transitionDuration={200}
                transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
                <box
                    vertical={true}>
                    {audioOptions().as((options) => {
                        return options.map((option) => {
                            return <button
                                hexpand={true}
                                className="iconButton"
                                onClicked={() => {
                                    selectedAudio.set(option)
                                    audioRevealed.set(false)
                                }}>
                                <label
                                    halign={Gtk.Align.START}
                                    className="labelSmall"
                                    truncate={true}
                                    label={`${option.isMonitor ? "󰕾" : ""}  ${option.description}`}/>
                            </button>
                        })
                    })}
                </box>
            </revealer>
            <box
                vertical={false}
                css={`margin-top: 8px;`}>
                <ScreenshotButton
                    icon={""}
                    label={"All"}
                    onClicked={() => {
                        isRecording.set(true)
                        const time = GLib.DateTime.new_now_local().format("%Y_%m_%d_%H_%M_%S")!
                        const path = `${screenRecordingDir}/${time}_record.mkv`
                        const audioParam = selectedAudio.get() !== null ? `--audio=${selectedAudio.get()!.name}` : ""
                        const command = `wf-recorder --file=${path} ${audioParam}`
                        print(command)
                        App.toggle_window(ScreenshotWindowName)
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                ${command}
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        }).finally(() => {
                            isRecording.set(false)
                            showScreenRecordingNotification(path)
                        })
                    }}/>
                <ScreenshotButton
                    icon={"󰹑"}
                    label={"Monitor"}
                    onClicked={() => {
                        isRecording.set(true)
                        const time = GLib.DateTime.new_now_local().format("%Y_%m_%d_%H_%M_%S")!
                        const path = `${screenRecordingDir}/${time}_record.mkv`
                        const audioParam = selectedAudio.get() !== null ? `--audio=${selectedAudio.get()!.name}` : ""
                        const command = `wf-recorder --file=${path} -g "$(slurp -o)" ${audioParam}`
                        print(command)
                        App.toggle_window(ScreenshotWindowName)
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                ${command}
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        }).finally(() => {
                            isRecording.set(false)
                            showScreenRecordingNotification(path)
                        })
                    }}/>
                <ScreenshotButton
                    icon={""}
                    label={"Area"}
                    onClicked={() => {
                        isRecording.set(true)
                        const time = GLib.DateTime.new_now_local().format("%Y_%m_%d_%H_%M_%S")!
                        const path = `${screenRecordingDir}/${time}_record.mkv`
                        const audioParam = selectedAudio.get() !== null ? `--audio=${selectedAudio.get()!.name}` : ""
                        const command = `wf-recorder --file=${path} -g "$(slurp)" ${audioParam}`
                        print(command)
                        App.toggle_window(ScreenshotWindowName)
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                ${command}
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        }).finally(() => {
                            isRecording.set(false)
                            showScreenRecordingNotification(path)
                        })
                    }}/>
            </box>
        </box>
    </window>
}