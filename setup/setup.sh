#!/bin/bash

./scripts/install.sh
./scripts/installFirefoxNightly.sh
./scripts/installYay.sh
./scripts/installFromAur.sh
./scripts/installSpotify.sh
./scripts/installFonts.sh
./scripts/setupFoldersAndSymLinks.sh
./scripts/setupZsh.sh
./scripts/startServices.sh
./scripts/setupUfw.sh
./scripts/setupCursor.sh
./scripts/setupYazi.sh
./scripts/setupXdgOpen.sh
../themes/setTheme.sh varda
./scripts/setupTuigreet.sh

# things left to do
#
# Install system wide wireguard vpn
#
# Firefox:
# sym link user chrome directory and the user.js file
# Set font
# install custom dark reader
#
# intellij:
# set font
# install varda.jar theme plugin
#
# remove extra packages from archinstall
# wofi, dolphin, sddm (make sure you set up tuigreet first)