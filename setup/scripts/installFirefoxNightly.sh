#!/bin/bash

mkdir -p $HOME/Downloads
cd $HOME/Downloads

wget -O firefox-nightly.tar.bz2 "https://download.mozilla.org/?product=firefox-nightly-latest-ssl&os=linux64&lang=en-US"
tar -xjf firefox-nightly.tar.bz2

mv firefox ~/.local/share/firefox-nightly
cp $HOME/workspace/Varda-Theme/setup/installFiles/firefox-nightly.desktop $HOME/.local/share/applications/