#!/bin/bash

count=$(checkupdates | wc -l)

icon="󰏓"
class="updateNormal"

if [[ $count == "0" ]]; then
  icon="󰏓"
elif [[ $1 == "noCount" ]]; then
  icon="󰏔"
else
  icon="$count 󰏔"
fi

if [[ $count -gt "100" ]]; then
  class="updateUrgent"
else
  class="updateNormal"
fi

eww -c $HOME/.config/hypr/components/eww update packages_update_class="$class"
echo "$icon"