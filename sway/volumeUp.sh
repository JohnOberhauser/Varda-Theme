#!/bin/bash

currentSink=$(pacmd list-sinks | grep "* index:")
currentSinkIndex=${currentSink: -1}

echo current sink: $currentSinkIndex

volume=$(pactl get-sink-volume $currentSinkIndex)
volume=$(cut -d "/" -f2- <<< "$volume" | sed 's/%.*//g' | sed 's/ b.*//g')

echo current volume: $volume

if [[ $volume -ge 100 ]]; then
  echo already max
elif [[ $volume -ge 95 ]]; then
  pactl set-sink-volume $currentSinkIndex 100%
  ogg123 /usr/share/sounds/gnome/default/alerts/drip.ogg
else
  pactl set-sink-volume $currentSinkIndex +5%
  ogg123 /usr/share/sounds/gnome/default/alerts/drip.ogg
fi
