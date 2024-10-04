#!/bin/bash

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

gtk() {
  case $1 in
      "varda")
          rm $HOME/.config/gtk-4.0
          ln -sf $HOME/workspace/Varda-Theme/gnome/themes/Varda/gtk-4.0 $HOME/.config/
          dconf write /org/gnome/desktop/interface/gtk-theme "'Varda'"
          dconf write /org/gnome/desktop/interface/icon-theme "'Varda'"
        ;;
      "everforest")
          rm $HOME/.config/gtk-4.0
          ln -sf $HOME/workspace/Varda-Theme/gnome/themes/Everforest-Dark/gtk-4.0 $HOME/.config/
          dconf write /org/gnome/desktop/interface/gtk-theme "'Everforest-Dark'"
          dconf write /org/gnome/desktop/interface/icon-theme "'Everforest-Dark'"
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

intellij_idea() {
  # must have themes already installed
  BASE_DIR="$HOME/.config/JetBrains/"
  # Get the most recent directory based on modification time
  RECENT_DIR=$(ls -lt "$BASE_DIR" | grep Intelli | grep '^d' | head -n 1 | awk '{print $9}')
  case $1 in
    "varda")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="Varda" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="cd7dc880-8ceb-43fd-bd9c-eef716d928ac" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    "everforest")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="_@user_Everforest" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="com.github.shubham076.everforest" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
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
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="cd7dc880-8ceb-43fd-bd9c-eef716d928ac" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    "everforest")
      sed -i 's/<global_color_scheme name=".*" \/>/<global_color_scheme name="Everforest" \/>/' $BASE_DIR/$RECENT_DIR/options/colors.scheme.xml
      sed -i 's/<laf themeId=".*" \/>/<laf themeId="com.github.shubham076.everforest" \/>/' $BASE_DIR/$RECENT_DIR/options/laf.xml
      ;;
    *)
      echo "no studio theme"
      ;;
  esac
}

btop_theme() {
  case $1 in
      "varda")
        sed -i "s|color_theme = \".*\"|color_theme = \"$HOME/.config/btop/themes/varda.theme\"|" $HOME/.config/btop/btop.conf
        ;;
      "everforest")
        sed -i "s|color_theme = \".*\"|color_theme = \"/usr/share/btop/themes/everforest-dark-hard.theme\"|" $HOME/.config/btop/btop.conf
        ;;
      *)
        echo "no btop theme"
        ;;
    esac
}

ags_theme $1
kitty_theme $1
fastfetch_theme $1
firefox_theme $1
gtk $1
hypr $1
rofi_theme $1
intellij_idea $1
android_studio $1
btop_theme $1