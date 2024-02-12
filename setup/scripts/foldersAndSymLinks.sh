#!/bin/bash

mkdir -p $HOME/Pictures
mkdir -p $HOME/Pictures/Screenshots

rm -rf ~/.config/hypr
ln -s $HOME/workspace/Varda-theme/hypr $HOME/.config/

ln -s $HOME/workspace/Varda-theme/dunst $HOME/.config/

mkdir -p $HOME/.config/bpytot/themes
ln -s $HOME/workspace/Varda-theme/bpytop/varda.theme $HOME/.config/bpytop/themes/

mkdir -p $HOME/.themes
mkdir -p $HOME/.icons
cp -r $HOME/workspace/Varda-theme/gnome/themes/Varda $HOME/.themes/
cp -r $HOME/workspace/Varda-theme/gnome/icons/Varda $HOME/.icons/
mkdir -p $HOME/.config/gtk-4.0
ln -s $HOME/workspace/Varda-theme/gnome/themes/Varda/gtk-4.0/* $HOME/.config/gtk-4.0/

mkdir -p $HOME/.config/Kvantum  # must be capital K
ln -s $HOME/workspace/Varda-theme/kvantum/Varda $HOME/.config/Kvantum/

mkdir -p $HOME/.config/kitty
ln -s $HOME/workspace/Varda-theme/kitty/kitty.conf $HOME/.config/kitty/

ln -s $HOME/workspace/Varda-theme/fastfetch $HOME/.config/

ln -s $HOME/workspace/Varda-theme/yazi $HOME/.config/