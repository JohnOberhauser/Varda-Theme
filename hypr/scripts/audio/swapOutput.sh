#!/bin/bash

wpctl set-default $($HOME/.config/hypr/scripts/audio/getNonDefaultOutputId.sh)

$HOME/.config/hypr/scripts/audio/updateVolumeIcon.sh
