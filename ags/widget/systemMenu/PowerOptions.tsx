import {App, Gtk} from "astal/gtk3"
import {SystemMenuWindowName} from "./SystemMenuWindow";
import {execAsync} from "astal/process"

export default function () {
    return <box
        vertical={false}
        className="row"
        halign={Gtk.Align.CENTER}>
        <button
            className="systemMenuIconButton"
            label="󰍃"
            onClicked={() => {
                App.toggle_window(SystemMenuWindowName)
                execAsync("pkill Hyprland")
            }}/>
        <button
            className="systemMenuIconButton"
            label=""
            onClicked={() => {
                App.toggle_window(SystemMenuWindowName)
                execAsync('bash -c "loginctl lock-session"')
            }}/>
        <button
            className="systemMenuIconButton"
            label=""
            onClicked={() => {
                App.toggle_window(SystemMenuWindowName)
                execAsync('bash -c "reboot"')
            }}/>
        <button
            className="systemMenuIconButton"
            label="⏻"
            onClicked={() => {
                App.toggle_window(SystemMenuWindowName)
                execAsync('bash -c "shutdown now"')
            }}/>
    </box>
}