import SideBar from "./js/bar/SideBar.js";
import SystemMenu from "./js/systemMenu/SystemMenu.js";
import VolumeAlert from "./js/alerts/VolumeAlert.js";
import BrightnessAlert from "./js/alerts/BrightnessAlert.js";
import BluetoothWindow from "./js/bluetooth/BluetoothWindow.js";

const scss = `${App.configDir}/scss/main.scss`
const css = `${App.configDir}/style.css`
Utils.exec(`sassc ${scss} ${css}`)

export default {
    style: App.configDir + '/style.css',
    windows: [
        SideBar,
        SystemMenu(
            ['top', 'left']
        ),
        VolumeAlert,
        BrightnessAlert,
        BluetoothWindow(
            ['bottom', 'left']
        ),
    ],
};