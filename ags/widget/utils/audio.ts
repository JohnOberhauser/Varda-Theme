import Wp from "gi://AstalWp"

const audio = Wp.get_default()?.audio

export function getVolumeIcon(vol?: number, speaker?: Wp.Endpoint): string {
    let output = speaker?.description
    if (vol == null || output == null) return ""

    if ((output.indexOf("Headset") !== -1)) {
        if (vol === 0) {
            return "󰋐"
        } else {
            return "󰋎"
        }
    } else if (output.indexOf("Buds") !== -1 || output.indexOf("Jabra") !== -1) {
        if (vol === 0) {
            return "󰋐"
        } else {
            return "󰥰"
        }
    } else {
        if (vol === 0) {
            return "󰝟"
        } else if (vol < 33) {
            return ""
        } else if (vol < 66) {
            return ""
        } else {
            return "󰕾"
        }
    }
}