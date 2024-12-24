#!/bin/bash

./scripts/install.sh
./scripts/installFirefoxNightly.sh
./scripts/hyprpm.sh
./scripts/setupYay.sh
./scripts/installFromAur.sh
./scripts/foldersAndSymLinks.sh
./scripts/zshSetup.sh
./scripts/startServices.sh
./scripts/setupCursor.sh
./scripts/setupYazi.sh
./scripts/setupXdgOpen.sh
./scripts/setTheme.sh varda

# things left to do

# run ./scripts/setupVpnConnections.sh $username $password
# where username and password are protonvpn openvpn credentials

# Need to set fonts in firefox, intellij
# edit firefox configs:
# xpinstall.signatures.required = false
#
# setup ufw
#
# config tuigreet
# hyprland wrapper setup in tuigreet
#
# remove extra packages from archinstall
# wofi, dolphin, sddm (make sure you set up tuigreet first)