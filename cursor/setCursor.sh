#!/bin/sh

theme=$(cat $HOME/workspace/Varda-Theme/cursor/theme)
size=24

hyprctl setcursor $theme $size
gsettings set org.gnome.desktop.interface cursor-theme $theme
gsettings set org.gnome.desktop.interface cursor-size $size

xrdb -merge <<< "Xcursor.theme: $theme"
xrdb -merge <<< "Xcursor.size: $size"