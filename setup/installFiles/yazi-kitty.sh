#!/bin/bash

# Starts a new kitty window with yazi running
# Must first set the edit
# Then we do the same thing we do at the bottom of zshrc for launching yazi
kitty zsh -c '
  export EDITOR="nvim";
  eval "$(zoxide init zsh)"
  tmp="$(mktemp -t yazi-cwd.XXXXX)";

  # Function to manually handle argument passing
  run_yazi() {
    yazi "$@" --cwd-file="$tmp";
  }

  run_yazi "$@"; # Pass arguments to the function

  cwd="$(cat "$tmp")";
  if [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
    z "$cwd";
  fi;

  rm -f "$tmp";
  zsh;
' dummy "$@"
