#!/bin/bash

./scripts/install.sh
./scripts/installFirefoxNightly.sh
./scripts/hyprpm.sh
./scripts/setupYay.sh
./scripts/installFromAur.sh
./scripts/foldersAndSymLinks.sh
./scripts/zshSetup.sh
./scripts/startServices.sh
./scripts/setupUfw.sh
./scripts/setupCursor.sh
./scripts/setupYazi.sh
./scripts/setupXdgOpen.sh
./scripts/setTheme.sh varda
./scripts/setupTuigreet.sh

# things left to do

# run ./scripts/setupVpnConnections.sh $username $password
# where username and password are protonvpn openvpn credentials

# Firefox:
# Set font
# xpinstall.signatures.required = false
# install custom dark reader
#
# intellij: set font
#
# remove extra packages from archinstall
# wofi, dolphin, sddm (make sure you set up tuigreet first)