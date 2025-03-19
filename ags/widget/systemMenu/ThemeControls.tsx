import {App, Gtk} from "astal/gtk4"
import {execAsync} from "astal/process"
import {monitorFile, readFile} from "astal/file"
import {bind, Variable} from "astal"
import {SystemMenuWindowName} from "./SystemMenuWindow";
import Pango from "gi://Pango?version=1.0";
import {createScaledTexture} from "../utils/images";

interface ThemeProps {
    name: string;
    icon: string;
    pixelAdjustment: number;
}

enum Theme {
    BLOOD_RUST,
    EVER_FOREST,
    NORD,
    ROSE_PINE,
    VARDA,
}

const ThemeDetails: Record<Theme, ThemeProps> = {
    [Theme.BLOOD_RUST]: { name: "bloodrust", icon: "󰚌", pixelAdjustment: 2 },
    [Theme.EVER_FOREST]: { name: "everforest", icon: "󰌪", pixelAdjustment: 1 },
    [Theme.NORD]: { name: "nord", icon: "", pixelAdjustment: 2 },
    [Theme.ROSE_PINE]: { name: "rosepine", icon: "", pixelAdjustment: 5 },
    [Theme.VARDA]: { name: "varda", icon: "", pixelAdjustment: 3 },
};

const selectedTheme = Variable(Theme.VARDA)
const files: Variable<string[][]> = Variable([])
const numberOfColumns = 2
let buttonsEnabled = true

function getThemeFromName(themeName: string): Theme | null {
    switch (themeName) {
        case "bloodrust":
            return Theme.BLOOD_RUST
        case "everforest":
            return Theme.EVER_FOREST
        case "nord":
            return Theme.NORD
        case "rosepine":
            return Theme.ROSE_PINE
        case "varda":
            return Theme.VARDA
        default:
            return null
    }
}

function setTheme(theme: string) {
    if (!buttonsEnabled) {
        return
    }
    buttonsEnabled = false
    execAsync(`/home/john/workspace/Varda-Theme/themes/setTheme.sh ${theme}`)
        .finally(() => {
            buttonsEnabled = true
        })
}

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

function updateMargins(box: Gtk.Box, theme: Theme) {
    let pixelAdjustment = ThemeDetails[theme].pixelAdjustment
    const leftPadding = 15 - pixelAdjustment
    const rightPadding = 15 + pixelAdjustment

    box.marginStart = leftPadding
    box.marginEnd = rightPadding
}

function ThemeButton(
    {theme}:
    {theme: Theme}
) {
    const leftPadding = 18 - ThemeDetails[theme].pixelAdjustment
    const rightPadding = 18 + ThemeDetails[theme].pixelAdjustment
    return <button
        cssClasses={selectedTheme((selectedTheme) =>
            selectedTheme === theme ? ["themeButtonSelected"] : ["themeButton"])}
        onClicked={() => {
            setTheme(ThemeDetails[theme].name)
        }}>
        <label
            marginTop={8}
            marginBottom={8}
            marginStart={leftPadding}
            marginEnd={rightPadding}
            label={ThemeDetails[theme].icon}/>
    </button>
}

function ThemeOptions() {
    return <box
        vertical={false}
        cssClasses={["row"]}
        halign={Gtk.Align.CENTER}
        spacing={12}>
        <ThemeButton theme={Theme.VARDA}/>
        <ThemeButton theme={Theme.EVER_FOREST}/>
        <ThemeButton theme={Theme.NORD}/>
        <ThemeButton theme={Theme.ROSE_PINE}/>
        <ThemeButton theme={Theme.BLOOD_RUST}/>
    </box>
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
                // 140x70 is a magic number that scales well and doesn't cause unwanted expansion of the scroll window
                const texture = createScaledTexture(140, 70, path)

                return <button
                    cssClasses={["wallpaperButton"]}
                    onClicked={() => {
                        setWallpaper(path)
                    }}>
                    <Gtk.Picture
                        cssClasses={["wallpaper"]}
                        keepAspectRatio={true}
                        contentFit={Gtk.ContentFit.COVER}
                        paintable={texture}/>
                </button>
            })
        })}
    </box>
}

export default function () {
    selectedTheme.set(getThemeFromName(readFile("./themeName")) ?? Theme.VARDA)
    monitorFile("./themeName", () => {
        const newTheme = getThemeFromName(readFile("./themeName"))
        if (newTheme !== null) {
            selectedTheme.set(newTheme)
        }
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
            cssClasses={["row"]}>
            <box
                marginTop={10}
                marginBottom={10}
                setup={(self) => {
                    updateMargins(self, selectedTheme.get())
                    selectedTheme.subscribe((theme) => {
                        updateMargins(self, theme)
                    })
                }}>
                <label
                    cssClasses={["systemMenuIconLabel"]}
                    label={selectedTheme((theme) => {
                        return ThemeDetails[theme].icon
                    })}/>
            </box>
            <label
                cssClasses={["labelMediumBold"]}
                halign={Gtk.Align.START}
                hexpand={true}
                ellipsize={Pango.EllipsizeMode.END}
                label="Theme"/>
            <button
                cssClasses={["iconButton"]}
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
            cssClasses={["rowRevealer"]}
            revealChild={wallpaperChooserRevealed()}
            transitionDuration={200}
            transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
            <box
                vertical={true}>
                <ThemeOptions/>
                <box marginTop={20}/>
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