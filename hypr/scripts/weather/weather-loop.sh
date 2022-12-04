#!/bin/bash

while [ true ]
do
    $HOME/.config/hypr/scripts/weather/writeWeather.sh

    sleep 900 # 15 mins
done