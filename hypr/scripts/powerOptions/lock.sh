#!/bin/bash

swayidle -w \
    timeout 20 'hyprctl dispatch dpms off' \
    resume 'hyprctl dispatch dpms on' \
    > /dev/null 2>&1 &

gtklock

pkill swayidle