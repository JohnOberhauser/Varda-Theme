import { App } from "astal/gtk3"
import style from "./scss/main.scss"
import TopBar from "./widget/TopBar"

App.start({
    css: style,
    main() {
        TopBar()
    },
})
