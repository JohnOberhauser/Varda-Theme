import SystemMenu from "./js/systemMenu/SystemMenu.js";
import VolumeAlert from "./js/alerts/VolumeAlert.js";
import BrightnessAlert from "./js/alerts/BrightnessAlert.js";
import BluetoothWindow from "./js/bluetooth/BluetoothWindow.js";
import TopBar from "./js/bar/TopBar.js";
import OverviewWindow from "./js/overview/OverviewWindow.js";
import NotificationPopups from "./js/notification/NotificationPopups.js";
import {buildCss, setupStyleUpdater} from "./styleManager.js";

buildCss()
setupStyleUpdater()

App.config({
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
        ),
        NotificationPopups(
            ['top', 'right']
        ),
    ],
});