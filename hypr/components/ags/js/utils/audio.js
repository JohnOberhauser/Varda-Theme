export function getVolumeIcon(audio) {
    const sink = audio.control.get_default_sink()
    let output
    if (sink != null) {
        output = sink.description
    } else {
        output = ""
    }
    const vol = audio.speaker.volume * 100

    if (output != null && (output.indexOf("Headset") !== -1 || output.indexOf("Buds") !== -1)) {
        if (vol === 0) {
            return "󰋐"
        } else {
            return "󰋎"
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