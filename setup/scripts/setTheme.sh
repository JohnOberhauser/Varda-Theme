#!/bin/bash

# Define an array of valid arguments
valid_args=("varda" "everforest" "nord")

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
  cp ./setup/themes/$1/ags/variables.scss ./ags/scss/
  nohup ./hypr/scripts/launchers/ags.sh > /dev/null 2>&1 &
}

kitty_theme() {
  cp ./setup/themes/$1/kitty/nmtui_colors.conf ./kitty/
  cp ./setup/themes/$1/kitty/current-theme.conf ./kitty/
  kitty @ set-colors ~/.config/kitty/current-theme.conf
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
          ln -sf $HOME/workspace/Varda-Theme/gtkQt/gtk/themes/Varda/gtk-4.0 $HOME/.config/
          cp -r $HOME/workspace/Varda-Theme/gtkQt/gtk/themes/Varda/* $HOME/.themes/SystemTheme/
          dconf write /org/gnome/desktop/interface/gtk-theme "'Adwaita'"
          dconf write /org/gnome/desktop/interface/gtk-theme "'SystemTheme'"
          flatpak override --user --env=GTK_THEME=SystemTheme
        ;;
      "everforest")
          ln -sf $HOME/workspace/Varda-Theme/gtkQt/gtk/themes/Everforest/gtk-4.0 $HOME/.config/
          cp -r $HOME/workspace/Varda-Theme/gtkQt/gtk/themes/Everforest/* $HOME/.themes/SystemTheme/
          dconf write /org/gnome/desktop/interface/gtk-theme "'Adwaita'"
          dconf write /org/gnome/desktop/interface/gtk-theme "'SystemTheme'"
          flatpak override --user --env=GTK_THEME=SystemTheme
        ;;
      "nord")
          ln -sf $HOME/workspace/Varda-Theme/gtkQt/gtk/themes/Nord/gtk-4.0 $HOME/.config/
          cp -r $HOME/workspace/Varda-Theme/gtkQt/gtk/themes/Nord/* $HOME/.themes/SystemTheme/
          dconf write /org/gnome/desktop/interface/gtk-theme "'Adwaita'"
          dconf write /org/gnome/desktop/interface/gtk-theme "'SystemTheme'"
          flatpak override --user --env=GTK_THEME=SystemTheme
        ;;
      *)
        echo "no gtk theme"
        ;;
    esac
}

hypr() {
  cp ./setup/themes/$1/hypr/theme.conf ./hypr/conf/
  cp ./setup/themes/$1/hypr/hyprlock.conf ./hypr/
  cp ./setup/themes/$1/hypr/hyprpaper.conf ./hypr/
  pkill hyprpaper
  nohup hyprpaper > /dev/null 2>&1 &
}

rofi_theme() {
  cp ./setup/themes/$1/rofi/* ./rofi/shared/
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
rofi_theme $1
zsh_theme $1
btop_theme $1
intellij_idea $1
android_studio $1
