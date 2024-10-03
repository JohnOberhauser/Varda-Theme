#!/bin/bash

mkdir -p $HOME/Downloads
cd $HOME/Downloads

mkdir -p $HOME/.themes
mkdir -p $HOME/.icons

wget -O everforest-theme.zip https://github.com/Fausto-Korpsvart/Everforest-GTK-Theme/archive/refs/heads/master.zip && unzip -q -o everforest-theme.zip -d ~/Downloads && rm everforest-theme.zip

cp -r $HOME/Downloads/Everforest-GTK-Theme-master/icons/Everforest-Dark $HOME/.icons/
cp -r $HOME/workspace/Varda-Theme/gnome/themes/Everforest-Dark $HOME/.themes/

cp -r $HOME/workspace/Varda-Theme/gnome/themes/Varda $HOME/.themes/
cp -r $HOME/workspace/Varda-Theme/gnome/icons/Varda $HOME/.icons/