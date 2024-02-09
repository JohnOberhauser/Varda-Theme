#!/bin/bash

NON_DEFAULT_OUTPUT_IDS=$($HOME/.config/hypr/scripts/audio/getNonDefaultOutputId.sh)
DEFAULT_OUTPUT_ID=$($HOME/.config/hypr/scripts/audio/getDefaultOutputId.sh)

set=false

echo "current output $DEFAULT_OUTPUT_ID"

for id in $NON_DEFAULT_OUTPUT_IDS
do
  echo "checking output"
  echo $id
  if [[ $id -gt $DEFAULT_OUTPUT_ID ]]; then
    wpctl set-default $id
    set=true
    echo "set output $id"
    break
  fi
done

if [[ $set = false ]]; then
  NEW_ID=$(echo $NON_DEFAULT_OUTPUT_IDS | awk '{print $1}')
  echo "set output $NEW_ID"
  wpctl set-default $NEW_ID
fi

$HOME/.config/hypr/scripts/audio/updateVolumeIcon.sh
