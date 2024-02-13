#!/bin/bash

# Didn't test this, just tracked what I did as I setup my system, so might not work

./scripts/install.sh
./scripts/setupYay.sh
./scripts/installFromAur.sh
./scripts/foldersAndSymLinks.sh
./scripts/zshSetup.sh
./scripts/waylandSession.sh
./scripts/startServices.sh
./scripts/setupCursor.sh


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