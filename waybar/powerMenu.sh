#!/bin/sh

LOCK=""
SLEEP="鈴"
LOGOUT=""
RESTART="菱"
SHUTDOWN=""

list_icons() {
    echo $LOCK
    echo $SLEEP
    echo $LOGOUT
    echo $RESTART
    echo $SHUTDOWN
}

lock() {
  swaylock -i /ssd/home/workspace/Varda-Theme/wallpaper/varda.jpg \
      --indicator-idle-visible --font "JetBrainsMono Patched Glyphs" \
      --indicator-thickness 5 \
      --indicator-radius 100 \
      --key-hl-color 257B76 \
      --inside-color 0C0E11 \
      --inside-ver-color 0C0E11 \
      --inside-wrong-color 0C0E11 \
      --ring-color 52677C \
      --ring-ver-color 257B76 \
      --ring-wrong-color 733447 \
      --separator-color 0C0E11 \
      --text-color D0EBEE \
      --text-ver-color D0EBEE \
      --text-wrong-color D0EBEE \
      -n
}

handle_option() {
    case "$1" in
        "$LOCK")
          swayidle -w \
              timeout 5 'swaymsg "output * dpms off"' \
              resume 'swaymsg "output * dpms on"' \
              > /dev/null 2>&1 &
          lock
          pkill swayidle
            ;;
        "$SLEEP")
          lock > /dev/null 2>&1 &
          systemctl suspend
            ;;
        "$LOGOUT")
          swaymsg exit
            ;;
        "$RESTART")
          reboot
            ;;
        "$SHUTDOWN")
          shutdown now
            ;;
    esac
}

SELECTION="$(list_icons | rofi -dmenu -theme power_options)"
handle_option $SELECTION &
