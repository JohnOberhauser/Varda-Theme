#!/bin/bash

hyprctl dispatch workspace $1
#hyprctl dispatch workspace "1$1"

$HOME/.config/hypr/scripts/workspaces/updateWorkspaceIcons.sh