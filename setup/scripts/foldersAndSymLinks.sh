#!/bin/bash

mkdir -p $HOME/Pictures
mkdir -p $HOME/Pictures/Screenshots
mkdir -p $HOME/Videos
mkdir -p $HOME/Videos/ScreenRecordings

rm -rf ~/.config/hypr
ln -s $HOME/workspace/Varda-Theme/hypr $HOME/.config/
touch $HOME/.config/hypr/conf/monitors.conf

ln -s $HOME/workspace/Varda-Theme/ags $HOME/.config/

ln -s $HOME/workspace/Varda-Theme/dunst $HOME/.config/

ln -s $HOME/workspace/Varda-Theme/rofi $HOME/.config/

mkdir -p $HOME/.config/btop/themes
ln -s $HOME/workspace/Varda-Theme/btop/varda.theme $HOME/.config/btop/themes/
ln -s $HOME/workspace/Varda-Theme/btop/everforest.theme $HOME/.config/btop/themes/
ln -s $HOME/workspace/Varda-Theme/btop/rosepine.theme $HOME/.config/btop/themes/

mkdir -p $HOME/.themes/SystemTheme
mkdir -p $HOME/.config/gtk-4.0
ln -s $HOME/workspace/Varda-Theme/gnome/themes/Varda/gtk-4.0 $HOME/.config/

ln -s $HOME/workspace/Varda-Theme/kitty $HOME/.config/

ln -s $HOME/workspace/Varda-Theme/nvim $HOME/.config/

ln -s $HOME/workspace/Varda-Theme/fastfetch $HOME/.config/

ln -s $HOME/workspace/Varda-Theme/yazi $HOME/.config/

