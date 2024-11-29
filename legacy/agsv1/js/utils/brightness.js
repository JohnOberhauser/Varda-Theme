export function getBrightnessIcon(brightness) {
    const value = brightness.screen_value

    if (value < 0.33) {
        return "󰃞"
    } else if (value < 0.66) {
        return "󰃝"
    } else {
        return "󰃠"
    }
}