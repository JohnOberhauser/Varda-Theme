#!/bin/bash

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

ln -s $HOME/workspace/zsh/varda.zsh-theme $HOME/.oh-my-zsh/themes/
ln -s $HOME/workspace/Varda-theme/zsh/zshrc $HOME/.zshrc