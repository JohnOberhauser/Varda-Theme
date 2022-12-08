#!/bin/bash

position=$(echo "$(playerctl metadata mpris:length) / 1000000 * $1 / 100" | bc)

echo $position

playerctl position $position