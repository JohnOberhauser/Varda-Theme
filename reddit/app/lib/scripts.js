/*=== edditor scripts ===*/

// Success Message
const yay = function(msg) {
  $(".alert-success").text(msg).fadeTo(3000, 500).slideUp(500, function(){
    $(".alert-success").slideUp(500);
  });
};

// Error Message
const nay = function(msg) {
  $(".alert-warning").text(msg).fadeTo(3000, 500).slideUp(500, function(){
    $(".alert-warning").slideUp(500);
  });
};

// Start Vue
var vm = new Vue({
  el: "#edditor",
  data: {
    color_background: "#ffffff",
    color_text: "#191a23",
    color_submenu: "#3d3d3d",
    color_submenu_text: "#ffffff",
    color_link: "#3d3d3d",
    color_button: "#3d3d3d",
    color_button_text: "#ffffff",
    color_upvote: "#f44336",
    color_downvote: "#0071c5",
    color_thumbnail: "#f1f1f1",
    color_nsfw: "#d86a62",
    color_locked: "#ead340",
    color_stickied: "#399b76",
    color_visited: "#aaaaaa",
    color_red_flair: "#d86a62",
    color_green_flair: "#399b76",
    width_sidebar: "300px",
    width_thumbnail: "80px",
    height_thumbnail: "60px",
    text_subscribers: "Users",
    text_here_now: "Browsing",
    text_sub_prefix: "r/",
    enable_body_margin: false,
    enable_submenu_fade: true,
    width_body_margin: "25px",
    color_body_margin: "#bfbfbf",
    enable_header_box: true,
    header_box_height: "250px",
    header_box_bg_color: "#ffffff",
    header_box_text_color: "#ffffff",
    header_box_bg_image: true,
    header_box_bg_scroll: false,
    header_box_bg_scroll_hover: true,
    text_header_box: "r/eddited - make it your own",
    enable_tabmenu_dropdown: false,
    enable_sidebar_image: true,
    sidebar_image_height: "206px",
    enable_headline_box: true,
    headline_box_bg_color: "#3d3d3d",
    headline_box_text_color: "#ffffff",
    enable_split_submit_buttons: true,
    enable_nsfw_thumbnails: false,
    version: "1.0.2"
  },
  computed: {
    css: previewStyles,
    exported: exportCfg,
    opts: lessVars
  },
  methods: {
    showPage,
    quickCompile,
    imported: importCfg,
    updated: updateCfg,
    compiled: compileTheme
  }
});
