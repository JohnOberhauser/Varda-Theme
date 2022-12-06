#!/bin/sh

# also set cursor size in wrapper file (for me it's ~/.local/bin/hyprland-wrapper.sh)

# for GDM create a file /etc/dconf/db/gdm.d/10-cursor-settings
# place this text in that file:
# [org/gnome/desktop/interface]
# cursor-theme='theme-name'

# then run this
# sudo -u gdm dbus-launch gsettings set org.gnome.desktop.interface cursor-theme 'theme-name'

theme="Nordzy-cursors-white"
size=24

hyprctl setcursor $theme $size
gsettings set org.gnome.desktop.interface cursor-theme $theme
gsettings set org.gnome.desktop.interface cursor-size $size

# give flatpak permission to read from the .icons folder, and set the cursor path
flatpak override --user --env=XCURSOR_PATH=~/.icons
flatpak override --user --filesystem=/home/$USER/.icons/:ro
