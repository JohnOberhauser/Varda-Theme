/*=== edditor templates: sidebar ===*/

// Less Variables Mixer
const lessVars = function() {
  let lvars = {};
  for (var v in this._data) {
    let vName = "@" + v.replace(/_/g, "-"), vData = "" + this._data[v];
    vData = vData.split('"').join();
    if (vName.indexOf('@text') > -1) vData = `"${vData}"`;
    if (vData.indexOf("'") > -1) console.log(vData);
    lvars[vName] = vData;
  }
  return lvars;
};

// File Loader
const loadFiles = function(file, callback) {
  var loader = new XMLHttpRequest();
  loader.onreadystatechange = function() {if (this.readyState == 4) callback(this.response); };
  loader.open('GET', './app/less/' + file + '.less', true);
  loader.send();
};

// Less Builder
const bLess = function(file, vars, clean, callback) {
  file = file.split('../../').join('./');
  less.render(file, { modifyVars: vars, relativeUrls: false }, function(e,o) {
    if (e) return console.log(e);
    if (clean) {
      new CleanCSS().minify(o.css, function(err, out) {
        if (!err) callback(out.styles);
        else console.log(err);
      })
    } else {
      // split out at first comment
      if (o.css && o.css.indexOf('.titlebox') > -1) {
        let styles = o.css.split('.titlebox');
        callback(".titlebox" + styles[1]);
      } else {
        callback("");
      }
    }
  });
};

// Build the theme
const compileTheme = function() {
  $('#compiled').val('');
  loadFiles('pretty', function(less1) {
    let stage1 = bLess(less1, vm.opts, false, function(css1) {
      loadFiles('theme', function(less2) {
        let stage2 = bLess(less2, vm.opts, true, function(css2) {
          loadFiles('plugins', function(less3) {
            let stage3 = bLess(less3, vm.opts, true, function(css3) {
              let template = [
                `/* eddited options v${vm.version} */`, css1,
                `/* eddited core v${vm.version} */`, css2,
                `/* eddited plugins v${vm.version} */`, css3
              ];
              $('#compiled').val(template.join('\n\n'));
              yay('Theme Compiled!');
            })
          })
        })
      })
    })
  });

};

Vue.component('compile-theme', {
  methods: { updateConfig },
  template: `<div class="import">
    <textarea id="compiled" rows="15" class="form-control"></textarea>
    <button class="btn btn-block btn-success mt-3" @click="updateConfig()">Compile</button>
  </div>`
})
