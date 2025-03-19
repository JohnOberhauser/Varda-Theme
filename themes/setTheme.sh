#!/bin/bash

# Define an array of valid arguments
valid_args=("varda" "everforest" "nord" "rosepine" "bloodrust")

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

# set the directory to the root Varda-Theme dir
cd "$(dirname "$0")"
cd ..

ags_theme() {
  cat ./themes/$1/ags/variables.scss > ./ags/scss/variables.scss
  cat ./themes/$1/themeName > ./ags/themeName

  astal "theme"
}

kitty_theme() {
  mkdir -p ./kitty/localTheme/themes
  cp ./themes/$1/kitty/current-theme.conf ./kitty/localTheme/themes/$1.conf
  cp ./themes/$1/kitty/current-theme.conf ./kitty/
  KITTY_CONFIG_DIRECTORY=$HOME/.config/kitty/localTheme kitty +kitten themes --reload-in=all $1
}

fastfetch_theme() {
  cp ./themes/$1/fastfetch/ring.png ./fastfetch/
}

firefox_theme() {
  cp ./themes/$1/firefox/chrome/* ./firefox/chrome/
  cp ./themes/$1/firefox/startpage/* ./firefox/startpage/

  # Dark reader
  colors_file="./themes/$1/firefox/darkreader_colors"
  template_file="./firefox/startpage/darkreader/settings_template.json"
  output_file="./firefox/startpage/darkreader/settings.json"
  # Read the colors from the first file
  bg=$(grep '^bg:' "$colors_file" | cut -d':' -f2)
  fg=$(grep '^fg:' "$colors_file" | cut -d':' -f2)
  # Replace the placeholders in the second file
  sed -e "s/\${bg}/$bg/g" -e "s/\${fg}/$fg/g" "$template_file" > "$output_file"
}

cursor_theme() {
  rm -rf $HOME/.icons/systemCursor/cursors
  cp -r ./themes/$1/cursor/cursors $HOME/.icons/systemCursor/
  ./themes/setCursor.sh
}

gtk() {
  rm $HOME/.config/gtk-4.0
  rm -rf $HOME/.themes/SystemTheme/*
  dconf write /org/gnome/desktop/interface/font-name "'JetBrainsMono Nerd Font Medium 11'"
  dconf write /org/gnome/desktop/interface/monospace-font-name "'JetBrainsMono Nerd Font Medium 10'"
  dconf write /org/gnome/desktop/interface/document-font-name "'JetBrainsMono Nerd Font Medium 11'"
  ln -sf $HOME/workspace/Varda-Theme/themes/$1/gtk/gtk-4.0 $HOME/.config/
  cp -r $HOME/workspace/Varda-Theme/themes/$1/gtk/* $HOME/.themes/SystemTheme/
  dconf write /org/gnome/desktop/interface/gtk-theme "'Adwaita'"
  dconf write /org/gnome/desktop/interface/gtk-theme "'SystemTheme'"
  flatpak override --user --env=GTK_THEME=SystemTheme
}

hypr() {
  COLORS_FILE="./themes/$1/hypr/hypr_colors"
  WALLPAPER_CACHE_PATH="$HOME/workspace/Varda-Theme/themes/$1/wallpaper/currentName.txt"
  WALLPAPER_DIR="$(dirname "$WALLPAPER_CACHE_PATH")"
  # Check if the file exists and is non-empty
  if [[ -s "$WALLPAPER_CACHE_PATH" ]]; then
    # Read the wallpaper path from the file
    potentialWallpaper="$(< "$WALLPAPER_CACHE_PATH")"

    # Check if that file actually exists
    if [[ -f "$potentialWallpaper" ]]; then
      WALLPAPER="$potentialWallpaper"
    else
      # Fallback: pick the first .jpg or .png in WALLPAPER_DIR
      WALLPAPER="$(
        ls -1 "$WALLPAPER_DIR"/*.jpg "$WALLPAPER_DIR"/*.png 2>/dev/null | head -n1
      )"
    fi
  else
    # If currentName.txt is missing or empty, do the same fallback
    WALLPAPER="$(
      ls -1 "$WALLPAPER_DIR"/*.jpg "$WALLPAPER_DIR"/*.png 2>/dev/null | head -n1
    )"
  fi
  # Read the colors from the first file
  BG=$(grep '^bg:' "$COLORS_FILE" | cut -d':' -f2)
  FG=$(grep '^fg:' "$COLORS_FILE" | cut -d':' -f2)
  PRIMARY=$(grep '^primary:' "$COLORS_FILE" | cut -d':' -f2)
  ERROR=$(grep '^error:' "$COLORS_FILE" | cut -d':' -f2)

  # Hyprland theme
  THEME_TEMPLATE="./hypr/conf/theme_template.conf"
  THEME_OUTPUT="./hypr/conf/theme.conf"
  # Replace the placeholders in the second file
  sed -e "s|\${bg}|$BG|g" -e "s|\${fg}|$FG|g" -e "s|\${primary}|$PRIMARY|g" -e "s|\${error}|$ERROR|g" "$THEME_TEMPLATE" > "$THEME_OUTPUT"

  # Hyprpaper
  $HOME/workspace/Varda-Theme/themes/setWallpaper.sh $WALLPAPER

  # Hyprlock
  HYPRLOCK_TEMPLATE="./hypr/hyprlock_template.conf"
  HYPRLOCK_OUTPUT="./hypr/hyprlock.conf"
  # Replace the placeholders in the second file
  sed -e "s|\${bg}|$BG|g" -e "s|\${fg}|$FG|g" -e "s|\${error}|$ERROR|g" -e "s|\${bg_path}|$WALLPAPER|g" "$HYPRLOCK_TEMPLATE" > "$HYPRLOCK_OUTPUT"
}

zsh_theme() {
  cp ./themes/$1/zsh/* ./zsh/
}

btop_theme() {
  mkdir -p $HOME/.config/btop/themes
  ln -sf $HOME/workspace/Varda-Theme/themes/$1/btop/$1.theme $HOME/.config/btop/themes/
  sed -i "s|color_theme = \".*\"|color_theme = \"$HOME/.config/btop/themes/$1.theme\"|" $HOME/.config/btop/btop.conf
  pkill -SIGUSR2 btop
}

intellij_idea() {
  # must have themes already installed
  BASE_DIR="$HOME/.config/JetBrains/"
  # Get the most recent directory based on modification time
  RECENT_DIR=$(ls -lt "$BASE_DIR" | grep Intelli | grep '^d' | head -n 1 | awk '{print $9}')
  # the scheme name is capitalized theme name
  SCHEME=$(echo "$1" | awk '{print toupper(substr($0,1,1)) substr($0,2)}')
  sed -i "s/<global_color_scheme name=\".*\" \/>/<global_color_scheme name=\"$SCHEME\" \/>/" "$BASE_DIR/$RECENT_DIR/options/colors.scheme.xml"
  sed -i "s/<laf themeId=\".*\" \/>/<laf themeId=\"io.obez.themes.$1\" \/>/" "$BASE_DIR/$RECENT_DIR/options/laf.xml"
}

android_studio() {
  # must have themes already installed
  BASE_DIR="$HOME/.config/Google/"
  # Get the most recent directory based on modification time
  RECENT_DIR=$(ls -lt "$BASE_DIR" | grep Android | grep '^d' | head -n 1 | awk '{print $9}')
  # the scheme name is capitalized theme name
  SCHEME=$(echo "$1" | awk '{print toupper(substr($0,1,1)) substr($0,2)}')
  sed -i "s/<global_color_scheme name=\".*\" \/>/<global_color_scheme name=\"$SCHEME\" \/>/" "$BASE_DIR/$RECENT_DIR/options/colors.scheme.xml"
  sed -i "s/<laf themeId=\".*\" \/>/<laf themeId=\"io.obez.themes.$1\" \/>/" "$BASE_DIR/$RECENT_DIR/options/laf.xml"
}

darktable() {
  mkdir -p $HOME/.config/darktable/
  cp ./themes/$1/darktable/user.css $HOME/.config/darktable/
}

# Update current theme
echo $1 > $HOME/workspace/Varda-Theme/themes/currentTheme.txt

# Immediately visible first
ags_theme $1
hypr $1
kitty_theme $1
btop_theme $1
cursor_theme $1
gtk $1

# Then the rest
fastfetch_theme $1
firefox_theme $1
zsh_theme $1
intellij_idea $1
android_studio $1
darktable $1
