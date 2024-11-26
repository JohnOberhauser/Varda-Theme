import SideBar from "./js/bar/SideBar.js";
import SystemMenu from "./js/systemMenu/SystemMenu.js";
import VolumeAlert from "./js/alerts/VolumeAlert.js";
import BrightnessAlert from "./js/alerts/BrightnessAlert.js";
import BluetoothWindow from "./js/bluetooth/BluetoothWindow.js";
import OverviewWindow from "./js/overview/OverviewWindow.js";
import NotificationPopups from "./js/notification/NotificationPopups.js";
import {buildCss, setupStyleUpdater} from "./styleManager.js";

buildCss()
setupStyleUpdater()

App.config({
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
        OverviewWindow(
            ['bottom', 'left']
        ),
        NotificationPopups(
            ['top', 'right']
        ),
    ],
});