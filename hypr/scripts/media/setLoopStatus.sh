#!/bin/bash

if [[ $1 == "稜" ]]; then
    playerctl loop track
elif [[ $1 == "綾" ]]; then
    playerctl loop playlist
else
    playerctl loop none
fi