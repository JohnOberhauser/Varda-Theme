import {Gtk} from "astal/gtk3"
import {execAsync} from "astal/process"
import {monitorFile, readFile} from "astal/file"
import {Variable} from "astal"
import {getThemeFromName, Theme, ThemeDetails} from "./Theme";

let buttonsEnabled = true
const selectedTheme = Variable(Theme.VARDA)

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

function ThemeButton(
    {theme}:
    {theme: Theme}
) {
    const leftPadding = 18 - ThemeDetails[theme].pixelAdjustment
    const rightPadding = 18 + ThemeDetails[theme].pixelAdjustment
    return <button
        className={selectedTheme((selectedTheme) =>
            selectedTheme === theme ? "themeButtonSelected" : "themeButton")}
        css={`padding: 8px ${rightPadding}px 8px ${leftPadding}px;`}
        label={ThemeDetails[theme].icon}
        onClicked={() => {
            setTheme(ThemeDetails[theme].name)
        }}/>
}

export default function () {
    selectedTheme.set(getThemeFromName(readFile("./themeName")))
    monitorFile("./themeName", () => {
        selectedTheme.set(getThemeFromName(readFile("./themeName")))
    })

    return <box
        vertical={false}
        className="row"
        halign={Gtk.Align.CENTER}
        spacing={8}>
        <ThemeButton theme={Theme.VARDA}/>
        <ThemeButton theme={Theme.EVER_FOREST}/>
        <ThemeButton theme={Theme.NORD}/>
        <ThemeButton theme={Theme.ROSE_PINE}/>
        <ThemeButton theme={Theme.BLOOD_RUST}/>
    </box>
}