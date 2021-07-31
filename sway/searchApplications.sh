#!/bin/bash

userPaths=$(ls $HOME/.local/share/applications/*.desktop)
systemPaths=$(ls /usr/share/applications/*.desktop)
flatpakPaths=$(find /var/lib/flatpak/app/ | grep "\.desktop$" | grep files/share)
paths="$userPaths $systemPaths $flatpakPaths"
paths=(${paths// / })

listApps() {
  for path in "${paths[@]}"
  do
    echo $(cat $path | grep -m 1 ^Name= | sed 's/Name=//')
  done
  # Custom entries
  echo Pamac
}

selection="$(listApps | rofi -dmenu -i)"

for path in "${paths[@]}"
do
  name=$(cat $path | grep -m 1 ^Name= | sed 's/Name=//')
  if [[ $selection == $name ]]; then
    app=$(echo $path | sed 's/.*\///' | sed 's/.desktop//')
    gtk-launch $app
    break
  fi
  # Custom entries
  if [[ $selection == "Pamac" ]]; then
    gtk-launch org.manjaro.pamac.manager
  fi
done
