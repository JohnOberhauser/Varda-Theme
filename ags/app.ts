import { App, Astal } from "astal/gtk3"
import style from "./scss/main.scss"
import TopBar from "./widget/bar/TopBar"
import Calendar from "./widget/calendar/Calendar"

App.start({
    css: style,
    main() {
        TopBar()
        Calendar(Astal.WindowAnchor.TOP)
    },
})
