import { App, Astal } from "astal/gtk3"
import style from "./scss/main.scss"
import TopBar from "./widget/bar/TopBar"
import Calendar from "./widget/calendar/Calendar"
import SystemMenuWindow from "./widget/systemMenu/SystemMenuWindow";
import {BrightnessAlert, VolumeAlert} from "./widget/alerts/Alerts";
import SideBar from "./widget/bar/SideBar";
import {exec} from "astal/process"
import NotificationPopups from "./widget/notification/NotificationPopups";
import AppLauncher, {AppLauncherWindowName} from "./widget/appLauncher/AppLauncher";

App.start({
    css: style,
    main(...args: Array<string>) {
        if (args.includes("sidebar")) {
            SideBar()
            Calendar(Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT)
        } else {
            TopBar()
            Calendar(Astal.WindowAnchor.TOP)
        }
        SystemMenuWindow()
        VolumeAlert()
        BrightnessAlert()
        App.get_monitors().map(NotificationPopups)
        AppLauncher()
    },
    requestHandler(request: string, res: (response: any) => void) {
        if (request == "theme") {
            exec("sass ./scss/main.scss ./style.css")
            App.apply_css("./style.css")
            res("ags theme applied")
        } else if (request == "appLauncher") {
            App.toggle_window(AppLauncherWindowName)
            res("app launcher toggled")
        }
    }
})
