#!/bin/bash

# Define an array of valid arguments
valid_args=("varda" "everforest" "nord" "rosepine")

# Check if an argument is provided
if [ $# -eq 0 ]; then
    echo "Error: No argument provided."
    echo "Usage: $0 <${valid_args[*]}>"
    exit 1
fi

# Get the first argument
arg="$1"

# Check if the argument is valid
if [[ ! " ${valid_args[@]} " =~ " $arg " ]]; then
    echo "Error: Invalid argument '$arg'."
    echo "Expected: '${valid_args[*]}'."
    exit 1
fi

cd "$(dirname "$0")"
cd ../..

ags_theme() {
  cat ./setup/themes/$1/ags/variables.scss > ./ags/scss/variables.scss
  cat ./setup/themes/$1/themeName > ./ags/themeName
  astal "theme"
}

kitty_theme() {
  mkdir -p ./kitty/localTheme/themes
  cp ./setup/themes/$1/kitty/current-theme.conf ./kitty/localTheme/themes/$1.conf
  cp ./setup/themes/$1/kitty/current-theme.conf ./kitty/
  KITTY_CONFIG_DIRECTORY=$HOME/.config/kitty/localTheme kitty +kitten themes --reload-in=all $1
}

fastfetch_theme() {
  cp ./setup/themes/$1/fastfetch/ring.png ./fastfetch/
}

firefox_theme() {
  cp ./setup/themes/$1/firefox/chrome/* ./firefox/chrome/
  cp ./setup/themes/$1/firefox/startpage/* ./firefox/startpage/
}

cursor_theme() {
  rm -rf $HOME/.icons/systemCursor/cursors
  cp -r $HOME/workspace/Varda-Theme/setup/themes/$1/cursor/cursors $HOME/.icons/systemCursor/
  ./setup/scripts/setCursor.sh
}

gtk() {
  rm $HOME/.config/gtk-4.0
  rm -rf $HOME/.themes/SystemTheme/*
  dconf write /org/gnome/desktop/interface/font-name "'JetBrainsMono Nerd Font Medium 11'"
  dconf write /org/gnome/desktop/interface/monospace-font-name "'JetBrainsMono Nerd Font Medium 10'"
  dconf write /org/gnome/desktop/interface/document-font-name "'JetBrainsMono Nerd Font Medium 11'"
  case $1 in
    "varda")
        ln -sf $HOME/workspace/Varda-Theme/gtk/themes/Varda/gtk-4.0 $HOME/.config/
        cp -r $HOME/workspace/Varda-Theme/gtk/themes/Varda/* $HOME/.themes/SystemTheme/
      ;;
    "everforest")
        ln -sf $HOME/workspace/Varda-Theme/gtk/themes/Everforest/gtk-4.0 $HOME/.config/
        cp -r $HOME/workspace/Varda-Theme/gtk/themes/Everforest/* $HOME/.themes/SystemTheme/
      ;;
    "nord")
        ln -sf $HOME/workspace/Varda-Theme/gtk/themes/Nord/gtk-4.0 $HOME/.config/
        cp -r $HOME/workspace/Varda-Theme/gtk/themes/Nord/* $HOME/.themes/SystemTheme/
      ;;
    "rosepine")
      ln -sf $HOME/workspace/Varda-Theme/gtk/themes/Rosepine/gtk-4.0 $HOME/.config/
      cp -r $HOME/workspace/Varda-Theme/gtk/themes/Rosepine/* $HOME/.themes/SystemTheme/
    ;;
    *)
      echo "no gtk theme"
      ;;
  esac
  dconf write /org/gnome/desktop/interface/gtk-theme "'Adwaita'"
  dconf write /org/gnome/desktop/interface/gtk-theme "'SystemTheme'"
  flatpak override --user --env=GTK_THEME=SystemTheme
}

hyprpaper_setup() {
  # Base directory
  BASE_DIR="$HOME/.config/hypr/assets/wallpaper"

  # Output file where preload lines will be written
  OUTPUT_FILE="$HOME/.config/hypr/hyprpaper.conf"

  # Clear the output file
  > "$OUTPUT_FILE"

  echo "splash = false" >> "$OUTPUT_FILE"
  echo "" >> "$OUTPUT_FILE"

  for FILE in "$BASE_DIR"/*; do
      # Check if it's a regular file
      if [[ -f "$FILE" ]]; then
          # Extract the file name
          FILE_NAME=$(basename "$FILE")

          # Write the preload line to the output file
          echo "preload = $BASE_DIR/$FILE_NAME" >> "$OUTPUT_FILE"
      fi
  done

  echo "" >> "$OUTPUT_FILE"

  WALLPAPER=""

  case $1 in
    "varda")
        WALLPAPER="planet-desktop.jpg"
      ;;
    "everforest")
        WALLPAPER="forest-walkway.jpg"
      ;;
    "nord")
        WALLPAPER="winter-forest-frost.jpg"
      ;;
    "rosepine")
        WALLPAPER="lavender-fields.jpg"
    ;;
  esac

  echo "wallpaper = desc:LG Electronics LG ULTRAGEAR+ 303NTRL72662,contain:$BASE_DIR/$WALLPAPER" >> "$OUTPUT_FILE"
  echo "wallpaper = desc:BOE 0x0BCA,contain:$BASE_DIR/$WALLPAPER" >> "$OUTPUT_FILE"
  echo "wallpaper = DP-2,$BASE_DIR/$WALLPAPER" >> "$OUTPUT_FILE"
  echo "wallpaper = DP-3,$BASE_DIR/$WALLPAPER" >> "$OUTPUT_FILE"

  hyprctl hyprpaper wallpaper "desc:LG Electronics LG ULTRAGEAR+ 303NTRL72662,contain:$BASE_DIR/$WALLPAPER"
  hyprctl hyprpaper wallpaper "desc:BOE 0x0BCA,contain:$BASE_DIR/$WALLPAPER"
  hyprctl hyprpaper wallpaper "DP-2,$BASE_DIR/$WALLPAPER"
  hyprctl hyprpaper wallpaper "DP-3,$BASE_DIR/$WALLPAPER"
}

hypr() {
  cp ./setup/themes/$1/hypr/theme.conf ./hypr/conf/
  cp ./setup/themes/$1/hypr/hyprlock.conf ./hypr/
  hyprpaper_setup $1
}

zsh_theme() {
  cp ./setup/themes/$1/zsh/* ./zsh/
}

btop_theme() {
  case $1 in
      "varda")
        sed -i "s|color_theme = \".*\"|color_theme = \"$HOME/.config/btop/themes/varda.theme\"|" $HOME/.config/btop/btop.conf
        ;;
      "everforest")
        sed -i "s|color_theme = \".*\"|color_theme = \"$HOME/.config/btop/themes/everforest.theme\"|" $HOME/.config/btop/btop.conf
        ;;
      "nord")
        sed -i "s|color_theme = \".*\"|color_theme = \"/usr/share/btop/themes/nord.theme\"|" $HOME/.config/btop/btop.conf
        ;;
      "rosepine")
        sed -i "s|color_theme = \".*\"|color_theme = \"$HOME/.config/btop/themes/rosepine.theme\"|" $HOME/.config/btop/btop.conf
        ;;
      *)
        echo "no btop theme"
        ;;
    esac
}

intellij_idea() {
  # must have themes already installed
  BASE_DIR="$HOME/.config/JetBrains/"
  # Get the most recent directory based on modification time
  RECENT_DIR=$(ls -lt "$BASE_DIR" | grep Intelli | grep '^d' | head -n 1 | awk '{print $9}')
  case $1 in
    "varda")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="Varda" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="io.obez.themes.varda" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    "everforest")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="Everforest" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="io.obez.themes.everforest" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    "nord")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="Nord" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="io.obez.themes.nord" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    "rosepine")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="Rosepine" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="io.obez.themes.rosepine" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    *)
      echo "no jetbrains theme"
      ;;
  esac
}

android_studio() {
  # must have themes already installed
  BASE_DIR="$HOME/.config/Google/"
  # Get the most recent directory based on modification time
  RECENT_DIR=$(ls -lt "$BASE_DIR" | grep Android | grep '^d' | head -n 1 | awk '{print $9}')
  case $1 in
    "varda")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="Varda" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="io.obez.themes.varda" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    "everforest")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="Everforest" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="io.obez.themes.everforest" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    "nord")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="Nord" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="io.obez.themes.nord" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    "rosepine")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="Rosepine" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="io.obez.themes.rosepine" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    *)
      echo "no studio theme"
      ;;
  esac
}

ags_theme $1
kitty_theme $1
fastfetch_theme $1
firefox_theme $1
gtk $1
cursor_theme $1
hypr $1
zsh_theme $1
btop_theme $1
intellij_idea $1
android_studio $1
