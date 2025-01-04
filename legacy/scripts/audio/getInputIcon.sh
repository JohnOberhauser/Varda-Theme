#!/bin/bash

inputName=$($HOME/.config/hypr/scripts/audio/getDefaultInputName.sh)


if [[ $inputName == *"Yeti"* ]]; then
    echo ""
elif [[ $inputName == *"Buds"* ]]; then
    echo "󰥰"
else
    echo "󰋎"
fi
