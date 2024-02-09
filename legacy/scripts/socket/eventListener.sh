#!/bin/bash

handle() {
  echo $1
  case $1 in
    workspace*) $HOME/.config/hypr/scripts/workspaces/updateWorkspaceIcons.sh ;;
    screencast*) $HOME/.config/hypr/scripts/video/checkIfScreenSharing.sh ;;
  esac
}

socat -U - UNIX-CONNECT:/tmp/hypr/$HYPRLAND_INSTANCE_SIGNATURE/.socket2.sock | while read -r line; do handle "$line"; done