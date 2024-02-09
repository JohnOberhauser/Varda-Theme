#!/bin/bash

sleep 5

while [ true ]
do
    python $HOME/.config/hypr/scripts/weather/getWeather.py

    sleep 900 # 15 mins
done