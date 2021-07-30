#!/bin/bash

currentSink=$(pacmd list-sinks | grep "* index:")
currentSinkIndex=${currentSink: -1}

pactl set-sink-mute $currentSinkIndex toggle
