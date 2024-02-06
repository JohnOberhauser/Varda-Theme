import SideBar from "./js/bar/SideBar.js";
import { monitorFile } from 'resource:///com/github/Aylur/ags/utils.js';

const windows = () => [
    SideBar,
];

monitorFile(
    `${App.configDir}/css/main.css`,
    function() {
        App.resetCss();
        App.applyCss(`${App.configDir}/css/main.css`);
    },
);

export default {
    style: App.configDir + '/css/main.css',
    windows: windows().flat(1),
};