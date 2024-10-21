#!/bin/bash

./scripts/install.sh
./scripts/installFirefoxNightly.sh
./scripts/hyprpm.sh
./scripts/setupYay.sh
./scripts/installFromAur.sh
./scripts/foldersAndSymLinks.sh
./scripts/zshSetup.sh
./scripts/waylandSession.sh
./scripts/startServices.sh
./scripts/setupCursor.sh
./scripts/setupYazi.sh
./scripts/setupLoupe.sh
./scripts/setTheme.sh varda


xdg-mime default firefox-nightly.desktop x-scheme-handler/http
xdg-mime default firefox-nightly.desktop x-scheme-handler/https

# things left to do

# Need to set fonts in firefox, intellij
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