#!/bin/bash

if [[ $1 == "time" ]]; then
    echo $(date "+%I:%M")
elif [[ $1 == "timeNewLine" ]]; then
    echo $(date "+%I\n%M")
elif [[ $1 == "timeWithLabel" ]]; then
    echo $(date "+%I:%M %p")
elif [[ $1 == "day" ]]; then
    echo $(date "+%A")
elif [[ $1 == "date" ]]; then
    echo $(date "+%B %d, %Y")
fi
