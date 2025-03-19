import {App, Gtk} from "astal/gtk4"
import {SystemMenuWindowName} from "./SystemMenuWindow";
import {execAsync} from "astal/process"

export default function () {
    return <box
        vertical={false}
        cssClasses={["row"]}
        halign={Gtk.Align.CENTER}>
        <button
            cssClasses={["systemMenuIconButton"]}
            label="󰍃"
            onClicked={() => {
                App.toggle_window(SystemMenuWindowName)
                execAsync("uwsm stop")
            }}/>
        <button
            cssClasses={["systemMenuIconButton"]}
            label=""
            onClicked={() => {
                App.toggle_window(SystemMenuWindowName)
                execAsync("uwsm app -- hyprlock")
            }}/>
        <button
            cssClasses={["systemMenuIconButton"]}
            label=""
            onClicked={() => {
                App.toggle_window(SystemMenuWindowName)
                execAsync("systemctl reboot")
            }}/>
        <button
            cssClasses={["systemMenuIconButton"]}
            label="⏻"
            onClicked={() => {
                App.toggle_window(SystemMenuWindowName)
                execAsync("systemctl poweroff")
            }}/>
    </box>
}