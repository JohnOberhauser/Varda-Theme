#!/bin/bash

handle() {
  case $1 in
    workspace*) $HOME/.config/hypr/scripts/workspaces/updateWorkspaceIcons.sh ;;
  esac
}

socat -U - UNIX-CONNECT:/tmp/hypr/$HYPRLAND_INSTANCE_SIGNATURE/.socket2.sock | while read -r line; do handle "$line"; done