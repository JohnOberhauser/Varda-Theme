import Brightness from "./connectables/brightness";

export function getBrightnessIcon(brightness: Brightness) {
    const value = brightness.screen

    if (value < 0.33) {
        return "󰃞"
    } else if (value < 0.66) {
        return "󰃝"
    } else {
        return "󰃠"
    }
}