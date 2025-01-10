#!/bin/bash

./scripts/install.sh
./scripts/installFirefoxNightly.sh
./scripts/installYay.sh
./scripts/installFromAur.sh
./scripts/installSpotify.sh
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

# run ./scripts/setupVpnConnections.sh $username $password
# where username and password are protonvpn openvpn credentials

# Firefox:
# sym link user chrome files
# Set font
# xpinstall.signatures.required = false
# install custom dark reader
#
# intellij: set font
#
# remove extra packages from archinstall
# wofi, dolphin, sddm (make sure you set up tuigreet first)