#!/bin/bash

mkdir -p $HOME/Downloads
cd $HOME/Downloads

git clone git@github.com:JohnOberhauser/xdg-desktop-portal-termfilechooser.git

cd xdg-desktop-portal-termfilechooser
meson build && ninja -C build && ninja -C build install

mkdir -p $HOME/.config/xdg-desktop-portal
cp $HOME/workspace/Varda-Theme/setup/portals.conf $HOME/.config/xdg-desktop-portal/

sudo mv /usr/local/share/xdg-desktop-portal/portals/termfilechooser.portal /usr/share/xdg-desktop-portal/portals/
sudo mv /usr/local/lib/systemd/user/xdg-desktop-portal-termfilechooser.service /usr/lib/systemd/user/
sudo mv /usr/local/share/dbus-1/services/org.freedesktop.impl.portal.desktop.termfilechooser.service /usr/share/dbus-1/services/

mkdir -p $HOME/.config/xdg-desktop-portal-termfilechooser
cp -r /usr/local/share/xdg-desktop-portal-termfilechooser/* $HOME/.config/xdg-desktop-portal-termfilechooser/

systemctl --user restart xdg-desktop-portal.service

# Setup xdg-mime default file manager
mkdir -p $HOME/.local/share/applications
cp $HOME/workspace/Varda-Theme/setup/yazi.desktop $HOME/.local/share/applications/

xdg-mime default yazi.desktop inode/directory
xdg-mime default yazi.desktop x-content/unix-software