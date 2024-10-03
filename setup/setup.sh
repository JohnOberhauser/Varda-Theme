#!/bin/bash

./scripts/install.sh
./scripts/installFirefoxNightly.sh
./scripts/hyprpm.sh
./scripts/setupYay.sh
./scripts/installFromAur.sh
./scripts/installGtkThemes.sh
./scripts/foldersAndSymLinks.sh
./scripts/zshSetup.sh
./scripts/waylandSession.sh
./scripts/startServices.sh
./scripts/setupCursor.sh


xdg-mime default firefox.desktop x-scheme-handler/http
xdg-mime default firefox.desktop x-scheme-handler/https

# things left to do

# set theme and cursor in gnome tweaks
# Need to set fonts in gnome tweaks, firefox, intellij
#
# setup ufw
#
# config tuigreet
# hyprland wrapper setup in tuigreet
#
# edit firefox configs
#
#
# remove extra packages from archinstall
# wofi, dolphin, sddm (make sure you set up tuigreet first)