import {Gtk} from "astal/gtk3"
import {execAsync} from "astal/process"
import {monitorFile, readFile} from "astal/file"
import {Variable} from "astal"

let buttonsEnabled = true
const selectedThemeName = Variable(readFile("./themeName"))

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
    {pixelAdjustment, theme, icon}:
    {pixelAdjustment: number, theme: string, icon: string}
) {
    const leftPadding = 18 - pixelAdjustment
    const rightPadding = 18 + pixelAdjustment
    return <button
        className={selectedThemeName((themeName) =>
            themeName === theme ? "themeButtonSelected" : "themeButton")}
        css={`padding: 8px ${rightPadding}px 8px ${leftPadding}px;`}
        label={icon}
        onClicked={() => {
            setTheme(theme)
        }}/>
}

export default function () {
    monitorFile("./themeName", () => {
        selectedThemeName.set(readFile("./themeName"))
    })

    return <box
        vertical={false}
        className="row"
        halign={Gtk.Align.CENTER}
        spacing={8}>
        <ThemeButton pixelAdjustment={3} theme={"varda"} icon={""}/>
        <ThemeButton pixelAdjustment={1} theme={"everforest"} icon={"󰌪"}/>
        <ThemeButton pixelAdjustment={2} theme={"nord"} icon={""}/>
        <ThemeButton pixelAdjustment={5} theme={"rosepine"} icon={""}/>
        <ThemeButton pixelAdjustment={2} theme={"bloodrust"} icon={"󰚌"}/>
    </box>
}