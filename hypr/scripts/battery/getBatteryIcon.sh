#!/bin/bash

info=$(acpi -b)

battery=$(echo $info | awk -F ", " '{print $2}' | awk -F "%" '{print $1}')

isCharging=$(echo $info | grep Charging)

if [[ $isCharging == *"Charging"* ]]; then
    if [[ $battery -le 10 ]]; then
        echo "󰢜"
    elif [[ $battery -le 20 ]]; then
        echo "󰂆"
    elif [[ $battery -le 30 ]]; then
        echo "󰂇"
    elif [[ $battery -le 40 ]]; then
        echo "󰂈"
    elif [[ $battery -le 50 ]]; then
        echo "󰢝"
    elif [[ $battery -le 60 ]]; then
        echo "󰂉"
    elif [[ $battery -le 70 ]]; then
        echo "󰢞"
    elif [[ $battery -le 80 ]]; then
        echo "󰂊"
    elif [[ $battery -le 90 ]]; then
        echo "󰂋"
    else
        echo "󰂅"
    fi
else
    if [[ $battery -le 10 ]]; then
        echo "󰁺"
    elif [[ $battery -le 20 ]]; then
        echo "󰁻"
    elif [[ $battery -le 30 ]]; then
        echo "󰁼"
    elif [[ $battery -le 40 ]]; then
        echo "󰁽"
    elif [[ $battery -le 50 ]]; then
        echo "󰁾"
    elif [[ $battery -le 60 ]]; then
        echo "󰁿"
    elif [[ $battery -le 70 ]]; then
        echo "󰂀"
    elif [[ $battery -le 80 ]]; then
        echo "󰂁"
    elif [[ $battery -le 90 ]]; then
        echo "󰂂"
    else
        echo "󰁹"
    fi
fi


