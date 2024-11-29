const Gio = imports.gi.Gio;
const scss = `${App.configDir}/scss/main.scss`
const css = `${App.configDir}/style.css`

export var buildCss = function() {
    Utils.exec(`sassc ${scss} ${css}`)
}

export var setupStyleUpdater = function() {
    Utils.monitorFile(`${App.configDir}/scss/variables.scss`, (file, event) => {
        if (event === Gio.FileMonitorEvent.CHANGES_DONE_HINT) {
            buildCss()
            App.applyCss(App.configDir + '/style.css')
        }
    })
}
