#!/bin/bash

mkdir -p $HOME/.icons/default

cp -r $HOME/workspace/Varda-Theme/setup/cursor/* $HOME/.icons/

# give flatpak permission to read from the .icons folder, and set the cursor path
flatpak override --user --env=XCURSOR_PATH=~/.icons
flatpak override --user --filesystem=/home/$USER/.icons/:ro