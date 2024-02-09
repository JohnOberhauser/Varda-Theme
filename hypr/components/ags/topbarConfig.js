import SystemMenu from "./js/systemMenu/SystemMenu.js";
import VolumeAlert from "./js/alerts/VolumeAlert.js";
import BrightnessAlert from "./js/alerts/BrightnessAlert.js";
import BluetoothWindow from "./js/bluetooth/BluetoothWindow.js";
import TopBar from "./js/bar/TopBar.js";
import OverviewWindow from "./js/overview/OverviewWindow.js";

const scss = `${App.configDir}/scss/main.scss`
const css = `${App.configDir}/style.css`
Utils.exec(`sassc ${scss} ${css}`)

export default {
    style: App.configDir + '/style.css',
    windows: [
        TopBar,
        SystemMenu(
            ['top', 'right']
        ),
        VolumeAlert,
        BrightnessAlert,
        BluetoothWindow(
            ['top', 'right']
        ),
        OverviewWindow(
            ['top']
        )
    ],
};