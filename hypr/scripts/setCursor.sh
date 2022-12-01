#!/bin/sh

theme="Nordzy-cursors-white"
size=24

hyprctl setcursor $theme $size
gsettings set org.gnome.desktop.interface cursor-theme $theme
gsettings set org.gnome.desktop.interface cursor-size $size