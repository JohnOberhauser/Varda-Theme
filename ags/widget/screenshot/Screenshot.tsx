import {App, Astal, Gdk} from "astal/gtk3"
import {execAsync} from "astal/process"
import {bind, Variable} from "astal"
import Divider from "../common/Divider";

export const isRecording = Variable(false)

export const ScreenshotWindowName = "screenshotWindow"

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
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                sleep 0.7
                                grim $HOME/Pictures/Screenshots/$(date +'%s_grim.png')
                                play $HOME/.config/hypr/assets/sounds/camera-shutter.ogg
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        })
                    }}/>
                <ScreenshotButton
                    icon={"󰹑"}
                    label={"Monitor"}
                    onClicked={() => {
                        App.toggle_window(ScreenshotWindowName)
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                grim -g "$(slurp -o)" $HOME/Pictures/Screenshots/$(date +'%s_grim.png')
                                play $HOME/.config/hypr/assets/sounds/camera-shutter.ogg
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        })
                    }}/>
                <ScreenshotButton
                    icon={""}
                    label={"Area"}
                    onClicked={() => {
                        App.toggle_window(ScreenshotWindowName)
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                grim -g "$(slurp)" $HOME/Pictures/Screenshots/$(date +'%s_grim.png')
                                play $HOME/.config/hypr/assets/sounds/camera-shutter.ogg
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        })
                    }}/>
            </box>
            <Divider css={`margin: 20px 0 10px 0;`}/>
            <label
                className="labelLargeBold"
                css={`margin-bottom: 8px;`}
                label="Screen Record"/>
            <box
                vertical={false}>
                <ScreenshotButton
                    icon={""}
                    label={"All"}
                    onClicked={() => {
                        App.toggle_window(ScreenshotWindowName)
                        isRecording.set(true)
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                wf-recorder --file=$(xdg-user-dir VIDEOS)/ScreenRecordings/$(date +'%s_record.mkv')
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        }).finally(() => {
                            isRecording.set(false)
                        })
                    }}/>
                <ScreenshotButton
                    icon={"󰹑"}
                    label={"Monitor"}
                    onClicked={() => {
                        App.toggle_window(ScreenshotWindowName)
                        isRecording.set(true)
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                wf-recorder --file=$(xdg-user-dir VIDEOS)/ScreenRecordings/$(date +'%s_record.mkv') -g "$(slurp -o)"
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        }).finally(() => {
                            isRecording.set(false)
                        })
                    }}/>
                <ScreenshotButton
                    icon={""}
                    label={"Area"}
                    onClicked={() => {
                        App.toggle_window(ScreenshotWindowName)
                        isRecording.set(true)
                        execAsync(
                            [
                                "bash",
                                "-c",
                                `
                                wf-recorder --file=$(xdg-user-dir VIDEOS)/ScreenRecordings/$(date +'%s_record.mkv') -g "$(slurp)"
                                `
                            ]
                        ).catch((error) => {
                            print(error)
                        }).finally(() => {
                            isRecording.set(false)
                        })
                    }}/>
            </box>
        </box>
    </window>
}