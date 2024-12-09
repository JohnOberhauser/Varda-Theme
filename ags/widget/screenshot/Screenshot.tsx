import {App, Astal, Gtk, Gdk} from "astal/gtk3"
import {execAsync} from "astal/process"

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
        layer={Astal.Layer.OVERLAY}
        keymode={Astal.Keymode.EXCLUSIVE}
        className="focusedWindow"
        margin={5}
        visible={false}
        onKeyPressEvent={function (self, event: Gdk.Event) {
            if (event.get_keyval()[1] === Gdk.KEY_Escape) {
                self.hide()
            }
        }}>
        <box
            vertical={false}
            css="padding: 20px;">
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
    </window>
}