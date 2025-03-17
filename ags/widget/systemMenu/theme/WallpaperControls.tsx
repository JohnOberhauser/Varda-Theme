import {App, Gtk} from "astal/gtk3"
import {execAsync} from "astal/process"
import {monitorFile, readFile} from "astal/file"
import {bind, Variable} from "astal"
import {SystemMenuWindowName} from "../SystemMenuWindow";
import ThemeOptions from "./ThemeOptions";
import Divider from "../../common/Divider";
import {getThemeFromName, Theme, ThemeDetails} from "./Theme";

const selectedTheme = Variable(Theme.VARDA)
const files: Variable<string[][]> = Variable([])
const numberOfColumns = 2

function chunkIntoColumns<T>(arr: T[], numCols: number): T[][] {
    // Create numCols empty arrays
    const columns: T[][] = Array.from({ length: numCols }, () => []);

    // Distribute each item into the correct column
    arr.forEach((item, i) => {
        const colIndex = i % numCols;
        columns[colIndex].push(item);
    });

    return columns;
}

function updateFiles() {
    execAsync(["bash", "-c", `ls /home/john/workspace/Varda-Theme/themes/${ThemeDetails[selectedTheme.get()].name}/wallpaper`])
        .catch((error) => {
            print(error)
        })
        .then((value) => {
            if (typeof value !== "string") {
                return
            }

            files.set(
                chunkIntoColumns(
                    value
                        .split("\n")
                        .filter((line) => line.includes("jpg") || line.includes("png")),
                    numberOfColumns
                )
            )
        })
}

function setWallpaper(path: string) {
    execAsync(["bash", "-c", `/home/john/workspace/Varda-Theme/themes/setWallpaper.sh ${path}`])
        .catch((error) => {
            print(error)
        })
}

function WallpaperColumn(
    {
        column,
    }: {
        column: number
    }
) {
    return <box
        hexpand={true}
        vertical={true}>
        {files((filesList) => {
            if (filesList.length === 0) {
                return null
            }
            return filesList[column].map((file) => {
                const path = `/home/john/workspace/Varda-Theme/themes/${ThemeDetails[selectedTheme.get()].name}/wallpaper/${file}`
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
}

export default function () {
    selectedTheme.set(getThemeFromName(readFile("./themeName")))
    monitorFile("./themeName", () => {
        selectedTheme.set(getThemeFromName(readFile("./themeName")))
    })

    updateFiles()
    selectedTheme.subscribe(() => {
        updateFiles()
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
                css={selectedTheme((theme) => {
                    let pixelAdjustment = ThemeDetails[theme].pixelAdjustment
                    const leftPadding = 15 - pixelAdjustment
                    const rightPadding = 15 + pixelAdjustment

                    return `
                        padding: 10px ${rightPadding}px 10px ${leftPadding}px;
                    `
                })}
                label={selectedTheme((theme) => {
                    return ThemeDetails[theme].icon
                })}/>
            <label
                className="labelMediumBold"
                halign={Gtk.Align.START}
                hexpand={true}
                truncate={true}
                label="Theme"/>
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
                <ThemeOptions/>
                {/*<box css={"margin-top: 20px;"}/>*/}
                {/*<Divider css={"margin: 0 40px 0 40px;"}/>*/}
                <box css={"margin-top: 20px;"}/>
                <box
                    vertical={false}>
                    {Array.from({length: numberOfColumns}).map((_, index) => {
                        return <WallpaperColumn column={index}/>
                    })}
                </box>
            </box>
        </revealer>
    </box>
}