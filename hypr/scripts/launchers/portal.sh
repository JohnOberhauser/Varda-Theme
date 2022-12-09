#!/bin/bash

# not using for now
# http://wiki.hyprland.org/FAQ/#some-of-my-apps-take-a-really-long-time-to-open

sleep 2
killall xdg-desktop-portal-wlr
killall xdg-desktop-portal
/usr/lib/xdg-desktop-portal-wlr &
sleep 2
/usr/lib/xdg-desktop-portal &