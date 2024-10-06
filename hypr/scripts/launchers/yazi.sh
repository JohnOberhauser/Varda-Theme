#!/bin/bash

# Starts a new kitty window with yazi running
# Must first set the edit
# Then we do the same thing we do at the bottom of zshrc for launching yazi
kitty zsh -c '
  export EDITOR="nvim";
  tmp="$(mktemp -t yazi-cwd.XXXXX)";
  yazi "$@" --cwd-file="$tmp";
  cwd="$(cat "$tmp")";
  if [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
    cd "$cwd";
  fi;
  rm -f "$tmp";
  zsh;
'
