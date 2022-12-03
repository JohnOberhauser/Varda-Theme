#!/bin/sh

# also set cursor size in wrapper file (for me it's ~/.local/bin/hyprland-wrapper.sh)
theme="Nordzy-cursors-white"
size=24

hyprctl setcursor $theme $size
gsettings set org.gnome.desktop.interface cursor-theme $theme
gsettings set org.gnome.desktop.interface cursor-size $size