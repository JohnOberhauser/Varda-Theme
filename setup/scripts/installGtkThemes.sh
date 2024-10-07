#!/bin/bash

mkdir -p $HOME/Downloads
cd $HOME/Downloads

mkdir -p $HOME/.themes
mkdir -p $HOME/.icons

wget -O everforest-theme.zip https://github.com/Fausto-Korpsvart/Everforest-GTK-Theme/archive/refs/heads/master.zip && aunpack everforest-theme.zip && rm everforest-theme.zip
wget -O Nordzy.tar.gz https://github.com/alvatip/Nordzy-icon/releases/download/1.8.7/Nordzy.tar.gz && aunpack Nordzy.tar.gz && rm Nordzy.tar.gz

cp -r $HOME/Downloads/Everforest-GTK-Theme-master/icons/Everforest-Dark $HOME/.icons/
cp -r $HOME/workspace/Varda-Theme/gnome/themes/Everforest-Dark $HOME/.themes/

cp -r $HOME/workspace/Varda-Theme/gnome/themes/Varda $HOME/.themes/
cp -r $HOME/workspace/Varda-Theme/gnome/icons/Varda $HOME/.icons/

cp -r $HOME/Downloads/Nordzy $HOME/.icons/
cp -r $HOME/workspace/Varda-Theme/gnome/themes/Nordic $HOME/.themes/