#!/bin/bash

portalOutput=$(wpctl status | sed -n '/Sinks:/,$p' | grep xdg-desktop-portal-hyprland)

if [[ $portalOutput == "" ]]; then
    eww -c $HOME/.config/hypr/components/eww update screen_sharing_reveal=false
else
    eww -c $HOME/.config/hypr/components/eww update screen_sharing_reveal=true
fi