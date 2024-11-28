import { App, Astal } from "astal/gtk3"
import style from "./scss/main.scss"
import TopBar from "./widget/bar/TopBar"
import Calendar from "./widget/calendar/Calendar"
import SystemMenuWindow from "./widget/systemMenu/SystemMenuWindow";
import {BrightnessAlert, VolumeAlert} from "./widget/alerts/Alerts";
import SideBar from "./widget/bar/SideBar";

App.start({
    css: style,
    main(...args: Array<string>) {
        if (args.includes("sidebar")) {
            SideBar()
            Calendar(Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT)
            SystemMenuWindow(Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT)
        } else {
            TopBar()
            Calendar(Astal.WindowAnchor.TOP)
            SystemMenuWindow(Astal.WindowAnchor.TOP | Astal.WindowAnchor.RIGHT)
        }
        VolumeAlert()
        BrightnessAlert()
    },
})
