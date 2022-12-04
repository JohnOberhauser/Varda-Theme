#!/bin/bash

CACHE_FILE="$HOME/.cache/hypr-weather"

$HOME/.config/hypr/scripts/weather/getWeather.sh > $CACHE_FILE
echo "wrote to $CACHE_FILE"