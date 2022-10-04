/*=== edditor presets ===*/

// Define Presets
const presets = {

  "default": {
    "color_background": "#ffffff",
    "color_text": "#191a23",
    "color_submenu": "#3d3d3d",
    "color_submenu_text": "#ffffff",
    "color_link": "#3d3d3d",
    "color_button": "#3d3d3d",
    "color_button_text": "#ffffff",
    "color_upvote": "#f44336",
    "color_downvote": "#0071c5",
    "color_thumbnail": "#f1f1f1",
    "color_nsfw": "#d86a62",
    "color_locked": "#ead340",
    "color_stickied": "#399b76",
    "color_visited": "#aaaaaa",
    "color_red_flair": "#d86a62",
    "color_green_flair": "#399b76",
    "width_sidebar": "300px",
    "width_thumbnail": "80px",
    "height_thumbnail": "60px",
    "text_subscribers": "Users",
    "text_here_now": "Browsing",
    "text_sub_prefix": "r/",
    "enable_submenu_fade": true,
    "enable_body_margin": false,
    "width_body_margin": "25px",
    "color_body_margin": "#bfbfbf",
    "enable_header_box": true,
    "header_box_height": "250px",
    "header_box_bg_color": "#ffffff",
    "header_box_text_color": "#ffffff",
    "header_box_bg_image": true,
    "header_box_bg_scroll": false,
    "header_box_bg_scroll_hover": true,
    "text_header_box": "r/eddited - make it your own",
    "enable_tabmenu_dropdown": false,
    "enable_sidebar_image": true,
    "sidebar_image_height": "206px",
    "enable_headline_box": true,
    "headline_box_bg_color": "#3d3d3d",
    "headline_box_text_color": "#ffffff",
    "enable_split_submit_buttons": true,
    "enable_nsfw_thumbnails": false,
  },

  "noplugins": {
    "enable_body_margin": false,
    "enable_header_box": false,
    "header_box_bg_image": true,
    "enable_tabmenu_dropdown": false,
    "enable_submenu_fade": false,
    "enable_sidebar_image": false,
    "enable_headline_box": false,
    "enable_split_submit_buttons": false,
    "enable_nsfw_thumbnails": false
  },

  "red": {
    "color_submenu": "#c63e4e",
    "color_link": "#c63e4e",
    "color_button": "#c63e4e",
    "color_nsfw": "#c63e4e",
    "color_red_flair": "#c63e4e",
    "headline_box_bg_color": "#c63e4e",
    "color_body_margin": "#bfbfbf",
    "text_header_box": "r/eddited - red"
  },

  "green": {
    "color_submenu": "#299a29",
    "color_link": "#299a29",
    "color_button": "#299a29",
    "color_stickied": "#299a29",
    "color_green_flair": "#299a29",
    "headline_box_bg_color": "#299a29",
    "color_body_margin": "#bfbfbf",
    "text_header_box": "r/eddited - green"
  },

  "blue": {
    "color_submenu": "#0071c5",
    "color_link": "#0071c5",
    "color_button": "#0071c5",
    "headline_box_bg_color": "#0071c5",
    "text_header_box": "r/eddited - blue"
  },

  "dark": {
    "color_background": "#262626",
    "color_text": "#9aa3a8",
    "color_link": "#bec3c7",
    "color_visited": "#66767d",
    "color_thumbnail": "#2f2f2f",
    "color_locked": "#ece159",
    "color_upvote": "#e67f23",
    "color_downvote": "#00558b",
    "color_button": "#bec3c7",
    "color_button_text": "#262626",
    "color_submenu": "#0c0c0c",
    "color_submenu_text": "#bec3c7",
    "color_nsfw": "#f15355",
    "color_stickied": "#29ac60",
    "color_red_flair": "#f15355",
    "color_green_flair": "#29ac60",
    "headline_box_bg_color": "#0c0c0c",
    "headline_box_text_color": "#bec3c7",
    "text_header_box": "r/eddited - dark"
  },

  "space": {
    "enable_body_margin": true,
    "width_body_margin": "35px",
    "color_body_margin": "#1d1c33",
    "color_background": "#303a52",
    "color_text": "#c3cee6",
    "color_link": "#bddee2",
    "color_visited": "#6e7c9c",
    "color_thumbnail": "#10101d",
    "color_locked": "#f3a683",
    "color_upvote": "#e77e66",
    "color_downvote": "#778aeb",
    "color_button": "#64cddb",
    "color_button_text": "#303a52",
    "color_submenu": "#786ea6",
    "color_submenu_text": "#ffffff",
    "color_nsfw": "#e66767",
    "color_stickied": "#3ec1d4",
    "color_red_flair": "#e66767",
    "color_green_flair": "#3ec1d4",
    "headline_box_bg_color": "#786ea6",
    "headline_box_text_color": "#ffffff",
    "header_box_bg_image": false,
    "header_box_bg_color": "#10101d",
    "enable_sidebar_image": false,
    "text_header_box": "r/eddited - spacefaring"
  }

};

// Define Updated
const updateCfg = function() {
  let updating = $('#loadPreset select').val();
  if (presets.hasOwnProperty(updating)) {
    $('#import').val(JSON.stringify(presets[updating]));
    this.imported();
    showPage('colors');
  }
};

Vue.component('preset-loader', {
  methods: { updateConfig },
  template: `<span class="input-group" id="loadPreset">
    <select class="custom-select input-sm">
      <option value="default" selected>Reset to default</option>
      <option value="noplugins">Disable All Plugins</option>
      <option value="red">Red Accent</option>
      <option value="green">Green Accent</option>
      <option value="blue">Blue Accent</option>
      <option value="dark">Eddited Dark</option>
      <option value="space">Spacefaring (Dark Purple)</option>
    </select>
    <span class="input-group-append">
      <button class="btn btn-info btn-sm" type="button" @click="updateConfig()">Load</button>
    </span>
  </span>`
});
