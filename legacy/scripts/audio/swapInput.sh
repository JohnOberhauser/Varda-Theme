#!/bin/bash

NON_DEFAULT_INPUT_IDS=$($HOME/.config/hypr/scripts/audio/getNonDefaultInputId.sh)
DEFAULT_INPUT_ID=$($HOME/.config/hypr/scripts/audio/getDefaultInputId.sh)

set=false

echo "current output $DEFAULT_INPUT_ID"

for id in $NON_DEFAULT_INPUT_IDS
do
  echo "checking input"
  echo $id
  if [[ $id -gt $DEFAULT_INPUT_ID ]]; then
    wpctl set-default $id
    set=true
    echo "set input $id"
    break
  fi
done

if [[ $set = false ]]; then
  NEW_ID=$(echo $NON_DEFAULT_INPUT_IDS | awk '{print $1}')
  echo "set input $NEW_ID"
  wpctl set-default $NEW_ID
fi

$HOME/.config/hypr/scripts/audio/updateInputIcon.sh
