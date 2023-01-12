#!/bin/bash

wpctl set-default $($HOME/.config/hypr/scripts/audio/getNonDefaultInputId.sh)

$HOME/.config/hypr/scripts/audio/updateInputIcon.sh
