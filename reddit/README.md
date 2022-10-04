# r/eddited
A back-to-basics subreddit theme. Flat, minimal, with a focus on content, eddited is arguably reddit's cleanest and most customizable subreddit theme.  

[![GitHub release](https://img.shields.io/github/release/12px/eddited.svg)]()
[![David](https://img.shields.io/david/12px/eddited.svg)]()
[![David](https://img.shields.io/david/dev/12px/eddited.svg)]()
[![Github All Releases](https://img.shields.io/github/downloads/12px/eddited/total.svg)]()

#### Contents
- [Quick Install](#quick-install)
- [Customizer](#customizer)
- [Options](#options)
  - [Colors](#colors)
  - [Options](#options)
  - [Plugins](#plugins)


## Quick Install
- Download the [**latest release zip**](https://github.com/12px/eddited/releases/latest) and extract.
- Upload **header.jpg** and **sidebar.jpg** to your subreddit.
- Paste the contents of **theme.css** into your stylesheet settings.

## Customizer
If you want to build a custom version, but don't want to learn how to compile LESS, there is a handy web compiler located at [12px.io/eddited](http://12px.io/eddited)  

#### Config
Changing any values here will update the them on compile.

#### Load/Save
The text in the first box is your current setup, save that to a text file to backup your theme settings. To restore, copy the contents of your file into the second box and hit *Restore*.

#### Compile
Once you're done modifying the config to your liking, hit *compile* to build your custom theme. Paste the contents of the text box into your stylesheet.

## Options
### Colors

- `@color-accent`  
Blue by default; The main accent color of the site.  

- `@color-background`  
White by default; Background color.  

- `@color-text`  
Black by default; Main font color.  

- `@color-text-subtle`  
A lighter/darker version of the main font color, to blend in easier with the background.

- `@color-shadow`  
Should be marginally lighter/darker than *@color-background*

- `@color-border`  
Follows the same guide as *@color-shadow* but even lighter/darker.

- `@color-link`  
The color for the links on the page. Most often matches *@color-accent*

- `@color-button`  
The color for the buttons on the page. Most often matches *@color-accent*

- `@color-button-text`  
A readable color for button text, most often *@color-background*

- `@color-thumbnail`  
The background for thumbnails. Most often matches *@color-shadow*

- `@color-upvote`  
Most often an orange color.

- `@color-downvote`  
Most often a blue color.

- `@color-nsfw`  
The NSFW badge/thumbnail color. Most often red.

- `@color-locked`  
Locked badge/thumbnail color. Most often gold.

- `@color-stickied`  
Sticked thread color, most often green.

- `@color-visited`  
Color for visited links, should be a subtle color like *@color-text-subtle*

- `@color-red-flair`  
The color for red flairs, most often matches *@color-nsfw*

- `@color-green-flair`  
The color for green flairs, most often matches *@color-stickied*

### Options

- `@width-sidebar`  
The width of the sidebar.

- `@width-thumbnail / @height-thumbnail`  
Change the size/aspect ratio of the thumbnail

- `@text-submit-link`  
Submit Link button text; "Show" by default

- `@text-submit-text`  
Submit Text button text; "Tell" by default

- `@text-subscribers`  
Subscribers text; "Users" by default

- `@text-here-now`  
Here Now text; "Browsing" by default

- `@text-sub-prefix`
The prefix for subreddit name.


### Plugins

#### Header box
- `@enable-header-box`  
This enables/disabled the header image area above the main reddit page.  

- `@header-box-height`  

- `@header-box-bg-color`  

- `@header-box-text-color`  

- `@header-box-bg-image`  
Use a background image in the header box. Filename 'header'

- `@text-header-box`  
The splash text. "r/eddited - clean. simple."


#### Sidebar Image
- `@enable-sidebar-image`  
Enable an image in the sidebar. Filename 'sidebar'

- `@sidebar-image-height`


#### Sidebar Popout
- `@enable-sidebar-popout`  
Hide certain information until sidebar hover.

#### Headline
Text is the first H1 element in the sidebar.  
`# This will show up as a headline`

- `@enable-headline-box`  
Enables the box below the header.

- `@headline-box-bg-color`  

- `@headline-box-text-color`  

#### Split Submit Buttons
- `@enable-split-submit-buttons`


#### NSFW thumbnails
- `@enable-nsfw-thumbnails`
