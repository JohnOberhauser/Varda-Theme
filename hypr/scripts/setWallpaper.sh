#!/bin/bash

# Check if an argument is provided
if [ $# -eq 0 ]; then
    echo "Error: No argument provided."
    echo "Usage: $0 <${valid_args[*]}>"
    exit 1
fi

# Get the first argument
arg="$1"

case $1 in
  "varda")
      hyprctl hyprpaper wallpaper "desc:LG Electronics LG ULTRAGEAR+ 303NTRL72662,contain:~/workspace/Varda-Theme/setup/themes/varda/hypr/wallpaper/planet-desktop.jpg"
      hyprctl hyprpaper wallpaper "desc:BOE 0x0BCA,contain:~/workspace/Varda-Theme/setup/themes/varda/hypr/wallpaper/planet-laptop.jpg"
      hyprctl hyprpaper wallpaper "DP-2,~/workspace/Varda-Theme/setup/themes/varda/hypr/wallpaper/planet-desktop.jpg"
      hyprctl hyprpaper wallpaper "DP-3,~/workspace/Varda-Theme/setup/themes/varda/hypr/wallpaper/planet-desktop.jpg"
    ;;
  "everforest")
      hyprctl hyprpaper wallpaper "desc:LG Electronics LG ULTRAGEAR+ 303NTRL72662,contain:~/workspace/Varda-Theme/setup/themes/everforest/hypr/wallpaper/forest-walkway.jpg"
      hyprctl hyprpaper wallpaper "desc:BOE 0x0BCA,contain:~/workspace/Varda-Theme/setup/themes/everforest/hypr/wallpaper/forest-walkway.jpg"
      hyprctl hyprpaper wallpaper "DP-2,~/workspace/Varda-Theme/setup/themes/everforest/hypr/wallpaper/forest-walkway.jpg"
      hyprctl hyprpaper wallpaper "DP-3,~/workspace/Varda-Theme/setup/themes/everforest/hypr/wallpaper/forest-walkway.jpg"
    ;;
  "nord")
      hyprctl hyprpaper wallpaper "desc:LG Electronics LG ULTRAGEAR+ 303NTRL72662,contain:~/workspace/Varda-Theme/setup/themes/nord/hypr/wallpaper/winter-forest-frost.jpg"
      hyprctl hyprpaper wallpaper "desc:BOE 0x0BCA,contain:~/workspace/Varda-Theme/setup/themes/nord/hypr/wallpaper/winter-forest-frost.jpg"
      hyprctl hyprpaper wallpaper "DP-2,~/workspace/Varda-Theme/setup/themes/nord/hypr/wallpaper/winter-forest-frost.jpg"
      hyprctl hyprpaper wallpaper "DP-3,~/workspace/Varda-Theme/setup/themes/nord/hypr/wallpaper/winter-forest-frost.jpg"
    ;;
  "rosepine")
      hyprctl hyprpaper wallpaper "desc:LG Electronics LG ULTRAGEAR+ 303NTRL72662,contain:~/workspace/Varda-Theme/setup/themes/rosepine/hypr/wallpaper/lavender-fields.jpg"
      hyprctl hyprpaper wallpaper "desc:BOE 0x0BCA,contain:~/workspace/Varda-Theme/setup/themes/rosepine/hypr/wallpaper/lavender-fields.jpg"
      hyprctl hyprpaper wallpaper "DP-2,~/workspace/Varda-Theme/setup/themes/rosepine/hypr/wallpaper/lavender-fields.jpg"
      hyprctl hyprpaper wallpaper "DP-3,~/workspace/Varda-Theme/setup/themes/rosepine/hypr/wallpaper/lavender-fields.jpg"
  ;;
esac