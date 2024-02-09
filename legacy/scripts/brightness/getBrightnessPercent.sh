#!/bin/bash

brightness=$(brightnessctl i | grep Current | awk -F "(" '{print $2}' | awk -F "%" '{print $1}')

echo $brightness