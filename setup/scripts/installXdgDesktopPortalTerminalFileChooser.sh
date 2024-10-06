#!/bin/bash

mkdir -p $HOME/Downloads
cd $HOME/Downloads

git clone git@github.com:JohnOberhauser/xdg-desktop-portal-termfilechooser.git

cd xdg-desktop-portal-termfilechooser
meson build && ninja -C build && ninja -C build install
