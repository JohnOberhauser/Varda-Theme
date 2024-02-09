#!/bin/bash

if [[ $1 == "󰑖" ]]; then
    playerctl loop track
elif [[ $1 == "󰑗" ]]; then
    playerctl loop playlist
else
    playerctl loop none
fi