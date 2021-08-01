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
  echo GIMP
}

selection="$(listApps | rofi -dmenu -i)"
echo selected $selection

# Custom entries
if [[ $selection == "Pamac" ]]; then
  echo launching org.manjaro.pamac.manager
  gtk-launch org.manjaro.pamac.manager
  exit 0
fi
if [[ $selection == "GIMP" ]]; then
  echo launching gimp
  gtk-launch gimp
  exit 0
fi

for path in "${paths[@]}"
do
  name=$(cat $path | grep -m 1 ^Name= | sed 's/Name=//')
  if [[ $selection == $name ]]; then
    app=$(echo $path | sed 's/.*\///' | sed 's/.desktop//')
    echo launching $app
    gtk-launch $app
    break
  fi
done
