#!/bin/bash

userPaths=$(ls $HOME/.local/share/applications/*.desktop)
systemPaths=$(ls /usr/share/applications/*.desktop)
paths="$userPaths $systemPaths"
paths=(${paths// / })

listApps() {
  for path in "${paths[@]}"
  do
    echo $(cat $path | grep -m 1 ^Name= | sed 's/Name=//')
  done
}

echo launching rofi
SELECTION="$(listApps | rofi -dmenu -i)"

echo next

for path in "${paths[@]}"
do
  name=$(cat $path | grep -m 1 ^Name= | sed 's/Name=//')
  if [[ $SELECTION == $name ]]; then
    app=$(echo $path | sed 's/.*\///' | sed 's/.desktop//')
    echo $app
    gtk-launch $app
    break
  fi
done
