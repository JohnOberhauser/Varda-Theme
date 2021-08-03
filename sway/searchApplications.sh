#!/bin/bash

userPaths=$(ls $HOME/.local/share/applications/*.desktop)
systemPaths=$(ls /usr/share/applications/*.desktop)
flatpakPaths=$(find /var/lib/flatpak/app/ | grep "\.desktop$" | grep files/share)
paths="$userPaths $systemPaths $flatpakPaths"
paths=(${paths// / })

declare -a ignoreList=("URI-steamvr" "URI-vrmonitor" "hh" "Wine Internet Explorer" "winhlp32" "winebrowser" "notepad" "Wine Installer" "wordpad" "A Wine application" "rundll32" "wscript" "Qt Assistant" "Avahi Zeroconf Browser" "Bluetooth Transfer" "Avahi SSH Server Browser" "Avahi VNC Server Browser" "CMake" "Manage Printing" "dconf Editor" "Electron 9" "Evolution Calendar" "ICC Profile Installer" "Color Picker" "Access Prompt" "View file" "Geoclue Demo agent" "Where am I?" "GNU Image Manipulation Program" "Keyboard Layout" "Applications" "Background" "Camera" "Settings" "Date & Time" "Default Applications" "Diagnostics" "Disk Image Mounter" "Disk Image Writer" "Displays" "About" "Location Services" "Screen Lock" "Microphone" "Mouse & Touchpad" "Network" "Notifications" "Online Accounts" "Power" "Printers" "Region & Language" "Removable Media" "Search" "Sharing" "Sound" "System Monitor" "GNOME System Monitor" "Thunderbolt" "Accessibility" "File History & Trash" "Users" "File Sharing" "Wacom Tablet" "Wi-Fi" "Snapd User Session Agent" "OpenJDK Java 16 Runtime" "OpenJDK Java 16 Console" "OpenJDK Java 16 Shell" "Hardware Locality lstopo" "Customize Look and Feel" "Mutter" "Run Software" "Advanced Network Configuration" "Characters" "GNOME Shell integration" "Color Profile Viewer" "Image Viewer" "Document Viewer" "Print Preview" "Evolution Alarm Notify" "Extensions" "Archive Manager" "Fonts" "Logs" "Photos" "Screenshot" "Passwords and Keys" "Network Login" "Videos" "Tweaks" "Network Login" "Weather" "Add/Remove Software" "Software Installer" "PolicyKit Authentication Agent" "Qt QDBusViewer" "QEMU" "Qt V4L2 test Utility" "Qt V4L2 video capture utility" "Rygel" "Rygel Preferences" "Handler for snap:// URIs" "Desktop Sharing" "Wine Windows Program Loader" "Portal")

listApps() {
  for path in "${paths[@]}"
  do
    name=$(cat $path | grep -m 1 ^Name= | sed 's/Name=//')
    if [[ ! "${ignoreList[@]}" =~ "$name" ]]; then
        echo $name
    fi
  done
  # Custom entries
  echo Pamac
  echo GIMP
  echo LX Appearance
  echo Seahorse
}

# show menu, get selection
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
if [[ $selection == "LX Appearance" ]]; then
  echo launching lxappearance
  /usr/bin/lxappearance
  exit 0
fi
if [[ $selection == "Seahorse" ]]; then
  echo launching seahorse
  /usr/bin/seahorse
  exit 0
fi

# Special rules
# fixing issue with java programs https://github.com/swaywm/sway/issues/595
declare -a intellijList=("Android Studio" "IntelliJ IDEA Community")
if [[ "${intellijList[@]}" =~ $selection ]]; then
  export _JAVA_AWT_WM_NONREPARENTING=1
fi

# Launch from regular path
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
