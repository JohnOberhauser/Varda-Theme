import SideBar from "./js/bar/SideBar.js";

const windows = () => [
    SideBar(true),
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