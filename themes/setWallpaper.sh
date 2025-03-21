#!/usr/bin/bash

path=$1

hyprctl hyprpaper unload all

hyprctl hyprpaper preload $path

hyprctl hyprpaper wallpaper "desc:LG Electronics LG ULTRAGEAR+ 303NTRL72662,contain:$path"
hyprctl hyprpaper wallpaper "desc:BOE 0x0BCA,contain:$path"
hyprctl hyprpaper wallpaper "DP-2,$path"
hyprctl hyprpaper wallpaper "DP-3,$path"

# Rebuild hyprpaper.conf
OUTPUT_FILE="$HOME/.config/hypr/hyprpaper.conf"

# Clear the output file
> "$OUTPUT_FILE"

echo "splash = false" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "preload = $path" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "wallpaper = desc:LG Electronics LG ULTRAGEAR+ 303NTRL72662,contain:$path" >> "$OUTPUT_FILE"
echo "wallpaper = desc:BOE 0x0BCA,contain:$path" >> "$OUTPUT_FILE"
echo "wallpaper = DP-2,$path" >> "$OUTPUT_FILE"
echo "wallpaper = DP-3,$path" >> "$OUTPUT_FILE"

# Update theme's cached wallpaper
CURRENT_THEME=$(cat $HOME/workspace/Varda-Theme/themes/currentTheme.txt)
echo $1 > $HOME/workspace/Varda-Theme/themes/$CURRENT_THEME/wallpaper/currentName.txt

echo $path
# Update hyprlock wallpaper
sed -i "s|.*path.*|    path = ${path}|" "$HOME/.config/hypr/hyprlock.conf"