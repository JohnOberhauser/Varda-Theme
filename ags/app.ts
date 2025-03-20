import { App } from "astal/gtk4"
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
import {selectedBar, Bar, getBarFromName, BarDetails} from "./widget/bar/Bar";
import {readFile} from "astal/file";

App.start({
    css: style,
    main(...args: Array<string>) {
        const hyprland = Hyprland.get_default()
        const mainMonitor = hyprland.monitors.find((monitor) => monitor.id === 0)
        const ratio = mainMonitor?.width && mainMonitor?.height
            ? mainMonitor.width / mainMonitor.height
            : 1
        const savedBar = getBarFromName(readFile("./bar").trim())

        print(`Screen ratio: ${ratio}`)
        print(`Saved bar: ${savedBar && BarDetails[savedBar].name}`)

        if (args.includes("sidebar")) {
            selectedBar.set(Bar.SIDE)
        } else if (args.includes("topbar")) {
            selectedBar.set(Bar.TOP)
        } else if (savedBar !== null) {
            selectedBar.set(savedBar)
        } else if (ratio > 2) {
            selectedBar.set(Bar.SIDE)
        } else {
            selectedBar.set(Bar.TOP)
        }

        SideBar()
        TopBar()
        Calendar()
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
