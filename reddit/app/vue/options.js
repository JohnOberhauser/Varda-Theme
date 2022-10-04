/*=== edditor templates: settings ===*/
const updateConfig = function(val) { this.$emit('input', val); };

// Color Conf
Vue.component('color', {
  props: ['value', 'label'],
  methods: { updateConfig },
  template: `<div class="col-12 col-md-6 col-lg-3 mb-3 cfg">
    <div class="input-group">
      <input type="text" class="form-control"
        :value="value" @input="updateConfig($event.target.value)">
      <span class="input-group-append">
        <input type="color" :style="{ backgroundColor: value }"
        :value="value" @change="updateConfig($event.target.value)">
      </span>
    </div>
    <div class="label" v-if="label">{{ label }}</div>
  </div>`
});

// Text Conf
Vue.component('string', {
  props: ['value', 'label'],
  methods: { updateConfig },
  template: `<div class="col-12 col-md-6 col-lg-3 mb-3 cfg">
    <div class="input-group">
      <input type="text" class="form-control"
        :value="value" @input="updateConfig($event.target.value)">
    </div>
    <label class="label">{{ label }}</label>
  </div>`
});

// Toggle Conf
Vue.component('toggle', {
  props: ['value', 'label', 'big'],
  methods: { updateConfig },
  template: `<div class="col-12 mb-3 cfg">
    <div class="toggle d-inline-block">
      <span class="input-group mr-3">
        <span class="input-group-prepend">
          <span class="input-group-text">
            <input type="checkbox"
              :checked="value" @change="updateConfig($event.target.checked)">
          </span>
        </span>
        <span class="input-group-append">
          <span class="input-group-text">{{ label }}</span>
        </span>
      </span>
    </div>
    <slot></slot>
  </div>`
});
