/*=== edditor import/export ===*/

// Define Exported
const exportCfg = function() {
  let cfg = {};
  for (var val in this._data) {
    if (val != 'version') {
      cfg[val] = this._data[val];
    }
  }
  return cfg;
};

// Define Imported
const importCfg = function() {
  let done = 0, total = -1, importing = $('#import').val();
  if (!importing) return nay("Nothing to import!");
  try { var processing = JSON.parse(importing); }
  catch (e) { return e.name == 'SyntaxError' ? nay('Syntax Error!') : nay(e.message); }
  for (var count in this._data) total += 1;

  // is array
  if (importing.charAt(0) == "[") {
    for (var ac = 0;ac < processing.length;ac++) {
      let varData = processing[ac].data;
      let varName = processing[ac].name.replace('@', '').replace(/-/g, "_");
      if (this.hasOwnProperty(varName)) {
        this[varName] = varData; done += 1;
      }
    }
  // else if is object
  } else if (importing.charAt(0) == "{") {
    for (var ao in processing) {
      if (this.hasOwnProperty(ao)) {
        this[ao] = processing[ao]; done += 1;
      }
    }
  } else return nay("Unrecognized input.");

  return yay(`Imported ${done} out of ${total} options.`);
};

Vue.component('export-settings', {
  props: ['config'],
  methods: { highlight: function(el) { el.focus(); el.select(); } },
  template: `<div class="export" @click="highlight($event.target)">
    <textarea class="form-control" rows="10" readonly>{{ config }}</textarea>
  </div>`
});

Vue.component('import-settings', {
  methods: { load: function() { this.$emit('input'); } },
  template: `<div class="import">
    <textarea id="import" rows="10" class="form-control"></textarea>
    <button class="btn btn-outline-success mt-3" @click="load()">
      Load settings
    </button>
  </div>`
});
