import Wp from "gi://AstalWp"

export function getVolumeIcon(speaker?: Wp.Endpoint) {
    let volume = speaker?.volume
    let muted = speaker?.mute
    let speakerDescription = speaker?.description
    if (volume == null || speakerDescription == null) return ""

    if ((speakerDescription.indexOf("Headset") !== -1)) {
        if (volume === 0 || muted) {
            return "󰟎"
        } else {
            return "󰋋"
        }
    } else if (speakerDescription.indexOf("Buds") !== -1 || speakerDescription.indexOf("Jabra") !== -1) {
        if (volume === 0 || muted) {
            return "󰟎"
        } else {
            return "󰥰"
        }
    } else {
        if (volume === 0 || muted) {
            return "󰝟"
        } else if (volume < 0.33) {
            return ""
        } else if (volume < 0.66) {
            return ""
        } else {
            return "󰕾"
        }
    }
}

export function getMicrophoneIcon(mic?: Wp.Endpoint): string {
    let micDescription = mic?.description
    let volume = mic?.volume
    let muted = mic?.mute

    if (micDescription != null && (micDescription.indexOf("Buds") !== -1 || micDescription.indexOf("Jabra") !== -1)) {
        if (volume === 0 || muted) {
            return "󰟎"
        } else {
            return "󰥰"
        }
    } else {
        if (volume === 0 || muted) {
            return "󰍭"
        } else {
            return ""
        }
    }
}

export function toggleMuteEndpoint(endpoint?: Wp.Endpoint) {
    endpoint?.set_mute(!endpoint?.mute)
}