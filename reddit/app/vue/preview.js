/*=== edditor templates: sidebar ===*/

// Define CSS
const previewStyles = function() {
  var marginWidth = this.enable_body_margin ? this.width_body_margin : '0px';
  return {
    base: {
      color: this.color_text,
      backgroundColor: this.color_background
    },
    submenu: {
      color: this.color_submenu_text,
      backgroundColor: this.color_submenu
    },
    thumbnail: {
      height: this.height_thumbnail,
      width: this.width_thumbnail,
      lineHeight: this.height_thumbnail,
      backgroundColor: this.color_thumbnail
    },
    locked: { color: this.color_locked },
    lockedBorder: { borderBottom: '2px solid ' + this.color_locked },
    upvote: { color: this.color_upvote },
    downvote: { color: this.color_downvote },
    stickied: { color: this.color_stickied },
    nsfw: { color: this.color_nsfw },
    redFlair: { backgroundColor: this.color_red_flair },
    greenFlair: { backgroundColor: this.color_green_flair },
    link: { color: this.color_link },
    visited: { color: this.color_visited },
    button: {
      color: this.color_button_text,
      backgroundColor: this.color_button
    },
    obutton: {
      color: this.color_button,
      border: '1px solid ' + this.color_button
    },
    header: { 'preview': 1, 'head': 1,
      'subfade': this.enable_submenu_fade
    },
    headerBox: {
      height: this.header_box_height,
      lineHeight: this.header_box_height,
      color: this.header_box_text_color,
      backgroundColor: this.header_box_bg_color,
      backgroundImage: this.header_box_bg_image ? 'url("./dist/header.jpg")' : 'none'
    },
    headerBoxClass: { 'hbox': 1,
      'animated': (this.header_box_bg_scroll && !this.header_box_bg_scroll_hover),
      'animated-hover': (this.header_box_bg_scroll && this.header_box_bg_scroll_hover)
    },
    headline: {
      color: this.headline_box_text_color,
      backgroundColor: this.headline_box_bg_color
    },
    bodyMargin: {
      backgroundColor: this.color_background,
      border: marginWidth + ' solid ' + this.color_body_margin
    },
    content: { width: "calc(100% - " + this.width_sidebar + " - 5px) !important" },
    sidebar: { width: this.width_sidebar },
    sidebarImage: {
      height: this.sidebar_image_height,
      display: this.enable_sidebar_image ? 'block' : 'none'
    },
    submitBtn: { 'text-center': 1, 'mt-1': 1,
      'col-6': this.enable_split_submit_buttons,
      'col-12': !this.enable_split_submit_buttons
    }
  }
};

Vue.component('preview-colors', {
  props: ['css'],
  template: `<div class="preview" :style="css.base">
    <div class="sb" :style="css.submenu">
      MY SUBREDDITS - HOME - ALL - MOD - ETC
    </div>
    <div><div :style="css.lockedBorder" class="mb-2 locked">
      <span :style="css.locked" class="mr-1">■</span> Locked
    </div></div>
    <div class="prv votes pt-2">
      <div :style="css.upvote">▲</div>
      <div :style="css.downvote">▼</div>
    </div>
    <div :style="css.thumbnail" class="mt-1 prv text-center">Thumb</div>
    <div class="prv link pt-2 ml-3">
      <span :style="css.link">A Sample Link</span>
      <strong :style="css.stickied" class="ml-2">Stickied</strong>
      <span :style="css.redFlair" class="badge ml-2">Red Flair</span><br />
      <span :style="css.visited">A Visited Link</span>
      <span :style="css.nsfw" class="ml-2">NSFW</span>
      <span :style="css.greenFlair" class="badge ml-2">Green Flair</span>
    </div>
    <div class="prv buttons ml-3">
      <div :style="css.button" class="box mb-1">A Sample Button</div>
      <div :style="css.obutton" class="box">A Sample Button</div>
    </div>
  </div>`
});

Vue.component('preview-header', {
  props: ['css'],
  template: `<div :class="css.header">
    <div class="sb" :style="css.submenu">
      MY SUBREDDITS - HOME - ALL - MOD - ETC
    </div>
    <div :style="css.headerBox" :class="css.headerBoxClass"><slot></slot></div>
    <slot name="more"></slot>
  </div>`
});

Vue.component('preview-headline', {
  props: ['css'],
  template: `<div :style="css.headline" class="headline mb-3"><slot></slot></div>`
});

Vue.component('preview-sidebar', {
  props: ['css'],
  template: `<div class="preview sidebar mb-3" :style="[css.base, css.sidebar]">
    <strong>Sidebar</strong>
    <div class="img" :style="css.sidebarImage"></div>
    <slot></slot>
  </div>`
})
