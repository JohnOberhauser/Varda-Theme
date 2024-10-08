#!/bin/bash

mkdir -p $HOME/Downloads
cd $HOME/Downloads

wget -O Nordzy-cursors-white.tar.gz https://github.com/alvatip/Nordzy-cursors/releases/latest/download/Nordzy-cursors-white.tar.gz
aunpack Nordzy-cursors-white.tar.gz
rm Nordzy-cursors-white.tar.gz

wget -O everforest-cursor.tar.bz2 https://github.com/talwat/everforest-cursors/releases/latest/download/everforest-cursors-variants.tar.bz2
aunpack everforest-cursor.tar.bz2
rm everforest-cursor.tar.bz2

mkdir -p $HOME/.icons/default

mv Nordzy-cursors-white $HOME/.icons
mv everforest-cursor/everforest-cursors $HOME/.icons

cp -r $HOME/workspace/Varda-Theme/setup/cursor/* $HOME/.icons/

# give flatpak permission to read from the .icons folder, and set the cursor path
flatpak override --user --env=XCURSOR_PATH=~/.icons
flatpak override --user --filesystem=/home/$USER/.icons/:ro