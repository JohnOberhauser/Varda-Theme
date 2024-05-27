#!/bin/bash

mkdir -p $HOME/Pictures
mkdir -p $HOME/Pictures/Screenshots

rm -rf ~/.config/hypr
ln -s $HOME/workspace/Varda-Theme/hypr $HOME/.config/
touch $HOME/.config/hypr/conf/monitors.conf

ln -s $HOME/workspace/Varda-Theme/dunst $HOME/.config/

mkdir -p $HOME/.config/bpytop/themes
ln -s $HOME/workspace/Varda-Theme/bpytop/varda.theme $HOME/.config/bpytop/themes/

mkdir -p $HOME/.themes
mkdir -p $HOME/.icons
cp -r $HOME/workspace/Varda-Theme/gnome/themes/Varda $HOME/.themes/
cp -r $HOME/workspace/Varda-Theme/gnome/icons/Varda $HOME/.icons/
mkdir -p $HOME/.config/gtk-4.0
ln -s $HOME/workspace/Varda-Theme/gnome/themes/Varda/gtk-4.0/* $HOME/.config/gtk-4.0/

mkdir -p $HOME/.config/Kvantum  # must be capital K
ln -s $HOME/workspace/Varda-Theme/kvantum/Varda $HOME/.config/Kvantum/

mkdir -p $HOME/.config/kitty
ln -s $HOME/workspace/Varda-Theme/kitty/kitty.conf $HOME/.config/kitty/

ln -s $HOME/workspace/Varda-Theme/fastfetch $HOME/.config/

ln -s $HOME/workspace/Varda-Theme/yazi $HOME/.config/