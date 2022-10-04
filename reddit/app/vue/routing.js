/*=== edditor routing ===*/

// Show Page Function
const showPage = function(val) { $('#pg-' + val + '-tab').tab('show'); }

const quickCompile = function() { showPage('compile'); vm.compiled(); }

Vue.component('page-link', {
  props: ['to'],
  template: `<a :href="'#pg-' + to" :id="'pg-' + to + '-tab'" class="nav-link" data-toggle="pill" aria-selected="false" :aria-controls="'pg-' + to" role="tab"><slot></slot></a>`
});

Vue.component('page-back', {
  props: ['to'],
  methods: { showPage },
  template: `<a href="#" @click="showPage(to)" class="btn btn-outline-success mt-3 float-left text-capitalize">Previous Step: {{ to }}</a>`
});

Vue.component('page-next', {
  props: ['to'],
  methods: { showPage },
  template: `<a href="#" @click="showPage(to)" class="btn btn-outline-success mt-3 float-right text-capitalize">Next Step: {{ to }}</a>`
});

Vue.component('page', {
  props: ['name'],
  template: `<div class="tab-pane fade" role="tabpanel" :id="'pg-' + name"
    :aria-labelledby="'pg-' + name + '-tab'"><slot></slot></div>`
});
