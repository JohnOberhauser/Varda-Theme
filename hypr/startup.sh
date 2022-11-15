#!/bin/bash

$HOME/.config/hypr/scripts/launchers/waybar.sh
$HOME/.config/hypr/scripts/launchers/swaybg.sh



/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP &