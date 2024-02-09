import SideBar from "./js/bar/SideBar.js";
import SystemMenu from "./js/systemMenu/SystemMenu.js";
import VolumeAlert from "./js/alerts/VolumeAlert.js";
import BrightnessAlert from "./js/alerts/BrightnessAlert.js";
import BluetoothWindow from "./js/bluetooth/BluetoothWindow.js";

const windows = () => [
    SideBar(true),
    SystemMenu,
    VolumeAlert,
    BrightnessAlert,
    BluetoothWindow,
];

const scss = `${App.configDir}/scss/main.scss`
const css = `${App.configDir}/style.css`
Utils.exec(`sassc ${scss} ${css}`)

export default {
    style: App.configDir + '/style.css',
    windows: windows().flat(1),
};