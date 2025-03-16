import {App, Gtk} from "astal/gtk3"
import {execAsync} from "astal/process"
import {monitorFile, readFile} from "astal/file"
import {bind, Variable} from "astal"
import {SystemMenuWindowName} from "./SystemMenuWindow";

const selectedThemeName = Variable(readFile("./themeName"))
const files: Variable<string[]> = Variable([])

function updateFiles() {
    execAsync(["bash", "-c", `ls /home/john/workspace/Varda-Theme/themes/${selectedThemeName.get()}/wallpaper`])
        .catch((error) => {
            print(error)
        })
        .then((value) => {
            if (typeof value !== "string") {
                return
            }

            files.set(
                value
                    .split("\n")
                    .filter((line) => line.includes("jpg") || line.includes("png"))
            )
        })
}

function setWallpaper(path: string) {
    execAsync(["bash", "-c", `/home/john/workspace/Varda-Theme/themes/setWallpaper.sh ${path}`])
        .catch((error) => {
            print(error)
        })
}

export default function () {
    updateFiles()
    selectedThemeName.subscribe((value) => {
        if (value != "") {
            updateFiles()
        }
    })

    monitorFile("./themeName", () => {
        selectedThemeName.set(readFile("./themeName"))
    })

    const wallpaperChooserRevealed = Variable(false)

    setTimeout(() => {
        bind(App.get_window(SystemMenuWindowName)!, "visible").subscribe((visible) => {
            if (!visible) {
                wallpaperChooserRevealed.set(false)
            }
        })
    }, 1_000)

    return <box
        vertical={true}>
        <box
            vertical={false}
            className="row">
            <label
                className="systemMenuIconButton"
                label="󰸉"/>
            <label
                className="labelMediumBold"
                halign={Gtk.Align.START}
                hexpand={true}
                truncate={true}
                label="Wallpaper"/>
            <button
                className="iconButton"
                label={wallpaperChooserRevealed((revealed): string => {
                    if (revealed) {
                        return ""
                    } else {
                        return ""
                    }
                })}
                onClicked={() => {
                    wallpaperChooserRevealed.set(!wallpaperChooserRevealed.get())
                }}/>
        </box>
        <revealer
            className="rowRevealer"
            revealChild={wallpaperChooserRevealed()}
            transitionDuration={200}
            transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
            <box
                vertical={true}>
                {files((filesList) => {
                    if (filesList.length === 0) {
                        return <box/>
                    }
                    return filesList.map((file) => {
                        const path = `/home/john/workspace/Varda-Theme/themes/${selectedThemeName.get()}/wallpaper/${file}`
                        return <button
                            className="wallpaper"
                            css={`
                                background-image: url("${path}");
                            `}
                            onClicked={() => {
                                setWallpaper(path)
                            }}/>
                    })
                })}
            </box>
        </revealer>
    </box>
}