#!/bin/bash

if [ -z "$1" ]; then
    index=1
else
    index="$1"
fi

while [ $index -le 10 ]
do
    echo "hiding $index"
    eww -c $HOME/.config/hypr/components/eww update bluetoothDevice$(echo $index)Visible=false
    index=$((index+1))
done