#!/bin/bash

mkdir -p $HOME/Downloads
cd $HOME/Downloads
wget -c https://github.com/alvatip/Nordzy-cursors/releases/download/1.0.0/Nordzy-cursors-white.tar.gz -O - | tar -xz

cp -r Nordzy-cursors-white $HOME/.icons
sudo cp -r Nordzy-cursors-white /usr/share/icons

mkdir -p $HOME/.icons/default

cp $HOME/workspace/Varda-Theme/setup/cursor/index.theme $HOME/.icons/default/
sudo rm /usr/share/icons/default/index.theme
sudo cp $HOME/workspace/Varda-Theme/setup/cursor/index.theme /usr/share/icons/default/