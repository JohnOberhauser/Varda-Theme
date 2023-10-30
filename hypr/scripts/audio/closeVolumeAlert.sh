#!/bin/sh

# works in conjunction with showVolumeAlert.sh and the volumeAlertLastUpdateTimeStamp variable in eww

echo attempting close process
LOCK_FILE="$HOME/.cache/eww-volume-alert.lock"

if [[ -f "$LOCK_FILE" ]]; then
    exit
fi

echo starting close process

touch "$LOCK_FILE"

timeoutInMilliseconds=1300

echo "timeout $timeoutInMilliseconds"

sleep 1.2

while [ true ]
do
    sleep 0.1

    alertTimeStamp=$(eww -c $HOME/.config/hypr/components/eww get volumeAlertLastUpdateTimeStamp)

    currentTime=$(($(date +%s%N)/1000000))

#    echo $alertTimeStamp
#    echo $currentTime
#    echo $(eww -c $HOME/.config/hypr/components/eww get volumeAlertPercent)

    if [[ $alertTimeStamp -le $(expr $currentTime - $timeoutInMilliseconds) ]]; then
        eww -c $HOME/.config/hypr/components/eww close volumeAlertWindow
        rm "$LOCK_FILE"
        exit
    fi

done
