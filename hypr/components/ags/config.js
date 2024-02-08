import SideBar from "./js/bar/SideBar.js";
import SystemMenu from "./js/systemMenu/SystemMenu.js";
import VolumeAlert from "./js/volumeAlert/VolumeAlert.js";

const windows = () => [
    SideBar(true),
    SystemMenu,
    VolumeAlert,
];

const scss = `${App.configDir}/scss/main.scss`
const css = `${App.configDir}/style.css`
Utils.exec(`sassc ${scss} ${css}`)

export default {
    style: App.configDir + '/style.css',
    windows: windows().flat(1),
};