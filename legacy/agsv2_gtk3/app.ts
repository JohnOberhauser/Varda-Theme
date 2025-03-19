import { App, Astal } from "astal/gtk3"
import style from "./scss/main.scss"
import TopBar from "./widget/bar/TopBar"
import Calendar from "./widget/calendar/Calendar"
import SystemMenuWindow from "./widget/systemMenu/SystemMenuWindow";
import {BrightnessAlert, ChargingAlertSound, VolumeAlert} from "./widget/alerts/Alerts";
import SideBar from "./widget/bar/SideBar";
import {exec} from "astal/process"
import NotificationPopups from "./widget/notification/NotificationPopups";
import AppLauncher, {AppLauncherWindowName} from "./widget/appLauncher/AppLauncher";
import Screenshot, {ScreenshotWindowName} from "./widget/screenshot/Screenshot";
import Screenshare, {ScreenshareWindowName, updateResponse, updateWindows} from "./widget/screenshare/Screenshare";
import Hyprland from "gi://AstalHyprland"

App.start({
    css: style,
    main(...args: Array<string>) {
        const hyprland = Hyprland.get_default()
        const mainMonitor = hyprland.monitors.find((monitor) => monitor.id === 0)
        const ratio = mainMonitor?.width && mainMonitor?.height
            ? mainMonitor.width / mainMonitor.height
            : 1

        print(`Screen ratio: ${ratio}`)

        if (args.includes("sidebar")) {
            SideBar()
            Calendar(Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT)
        } else if (args.includes("topbar")) {
            TopBar()
            Calendar(Astal.WindowAnchor.TOP)
        } else if (ratio > 2) {
            SideBar()
            Calendar(Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT)
        } else {
            TopBar()
            Calendar(Astal.WindowAnchor.TOP)
        }
        SystemMenuWindow()
        VolumeAlert()
        BrightnessAlert()
        ChargingAlertSound()
        App.get_monitors().map(NotificationPopups)
        AppLauncher()
        Screenshot()
        Screenshare()
    },
    requestHandler(request: string, res: (response: any) => void) {
        if (request === "theme") {
            exec("sass ./scss/main.scss ./style.css")
            App.apply_css("./style.css")
            res("ags theme applied")
        } else if (request === "appLauncher") {
            App.toggle_window(AppLauncherWindowName)
            res("app launcher toggled")
        } else if (request === "screenshot") {
            App.toggle_window(ScreenshotWindowName)
            res("screenshot toggled")
        } else if (request.startsWith("screenshare")) {
            print(request.startsWith("screenshare"))
            updateWindows(request)
            updateResponse(res)
            App.toggle_window(ScreenshareWindowName)
        } else {
            res("command not found")
        }
    }
})
