import {Gtk} from "astal/gtk3"
import {execAsync} from "astal/process"
import {monitorFile, readFile} from "astal/file"
import {Variable} from "astal"

export default function () {
    const selectedThemeName = Variable(readFile("./themeName"))
    monitorFile("./themeName", () => {
        selectedThemeName.set(readFile("./themeName"))
    })

    return <box
        vertical={false}
        className="row"
        halign={Gtk.Align.CENTER}>
        <button
            className={selectedThemeName((themeName) =>
                themeName === "varda" ? "themeButtonSelected" : "themeButton")}
            label=""
            onClicked={() => {
                execAsync("/home/john/workspace/Varda-Theme/setup/scripts/setTheme.sh varda")
            }}/>
        <button
            className={selectedThemeName((themeName) =>
                themeName === "everforest" ? "themeButtonSelected" : "themeButton")}
            label="󰌪"
            onClicked={() => {
                execAsync("/home/john/workspace/Varda-Theme/setup/scripts/setTheme.sh everforest")
            }}/>
        <button
            className={selectedThemeName((themeName) =>
                themeName === "nord" ? "themeButtonSelected" : "themeButton")}
            label=""
            onClicked={() => {
                execAsync("/home/john/workspace/Varda-Theme/setup/scripts/setTheme.sh nord")
            }}/>
        <button
            className={selectedThemeName((themeName) =>
                themeName === "rosepine" ? "themeButtonSelected" : "themeButton")}
            label="󰡶"
            onClicked={() => {
                execAsync("/home/john/workspace/Varda-Theme/setup/scripts/setTheme.sh rosepine")
            }}/>
    </box>
}