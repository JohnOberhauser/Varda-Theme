#!/bin/bash

handle() {
    case "$1" in
        button/power)
            case "$2" in
                PBTN|PWRF)
                    echo 'PowerButton pressed'
                    ;;
                *)
                    echo "ACPI action undefined: $2"
                    ;;
            esac
            ;;
        button/sleep)
            case "$2" in
                SLPB|SBTN)
                    echo 'SleepButton pressed'
                    ;;
                *)
                    echo "ACPI action undefined: $2"
                    ;;
            esac
            ;;
        ac_adapter)
            case "$2" in
                AC|ACAD|ADP0|ACPI*)
                    case "$4" in
                        00000000)
                            sh $HOME/.config/hypr/scripts/battery/updateBatteryIcon.sh
                            echo 'AC unpluged'
                            ;;
                        00000001)
                            sh $HOME/.config/hypr/scripts/battery/updateBatteryIcon.sh
                            echo 'AC pluged'
                            ;;
                    esac
                    ;;
                *)
                    echo "ACPI action undefined: $2"
                    ;;
            esac
            ;;
        battery)
            case "$2" in
                BAT0)
                    case "$4" in
                        00000000)
                            echo 'Battery online'
                            ;;
                        00000001)
                            echo 'Battery offline'
                            ;;
                    esac
                    ;;
                CPU0)
                    ;;
                *)  echo "ACPI action undefined: $2" ;;
            esac
            ;;
        button/lid)
            case "$3" in
                close)
                    echo 'LID closed'
                    ;;
                open)
                    echo 'LID opened'
                    ;;
                *)
                    echo "ACPI action undefined: $3"
                    ;;
        esac
        ;;
        *)
            echo "ACPI group/action undefined: $1 / $2"
            ;;
    esac
}

acpi_listen | while read -r line; do handle $line; done
