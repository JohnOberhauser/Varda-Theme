export function getBatteryIcon(battery) {
    const percent = battery.percent
    if (battery.charging) {
        if (percent <= 10) {
            return "󰢜"
        } else if (percent <= 20) {
            return "󰂆"
        } else if (percent <= 30) {
            return "󰂇"
        } else if (percent <= 40) {
            return "󰂈"
        } else if (percent <= 50) {
            return "󰢝"
        } else if (percent <= 60) {
            return "󰂉"
        } else if (percent <= 70) {
            return "󰢞"
        } else if (percent <= 80) {
            return "󰂊"
        } else if (percent <= 90) {
            return "󰂋"
        } else {
            return "󰂅"
        }
    } else {
        if (percent <= 10) {
            return "󰁺"
        } else if (percent <= 20) {
            return "󰁻"
        } else if (percent <= 30) {
            return "󰁼"
        } else if (percent <= 40) {
            return "󰁽"
        } else if (percent <= 50) {
            return "󰁾"
        } else if (percent <= 60) {
            return "󰁿"
        } else if (percent <= 70) {
            return "󰂀"
        } else if (percent <= 80) {
            return "󰂁"
        } else if (percent <= 90) {
            return "󰂂"
        } else {
            return "󰁹"
        }
    }
}