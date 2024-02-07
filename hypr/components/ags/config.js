import SideBar from "./js/bar/SideBar.js";
import { monitorFile } from 'resource:///com/github/Aylur/ags/utils.js';

const windows = () => [
    SideBar,
];

// main scss file
const scss = `${App.configDir}/scss/main.scss`

// target css file
const css = `${App.configDir}/style.css`

// make sure sassc is installed on your system
Utils.exec(`sassc ${scss} ${css}`)

export default {
    style: App.configDir + '/style.css',
    windows: windows().flat(1),
};