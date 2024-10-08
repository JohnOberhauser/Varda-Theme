export function getVolumeIcon(audio) {
    const sink = audio.control.get_default_sink()
    let output
    if (sink != null) {
        output = sink.description
    } else {
        output = ""
    }
    const vol = audio.speaker.volume * 100

    if (output != null && (output.indexOf("Headset") !== -1)) {
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

export function getMicrophoneIcon(audio) {
    const source = audio.control.get_default_source()
    let input
    if (source != null) {
        input = source.description
    } else {
        input = ""
    }

    if (input != null && input.indexOf("Yeti") !== -1) {
        return ""
    } else if (input != null && (input.indexOf("Buds") !== -1 || input.indexOf("Jabra") !== -1)) {
        return "󰥰"
    } else {
        return "󰋎"
    }
}

export function swapOutput(audio) {
    const currentSink = audio.control.get_default_sink()
    const sinks = audio.control.get_sinks().sort(
        function (a, b) {
            return a.id < b.id
        }
    )

    let set = false
    sinks.forEach((sink) => {
        if (sink.id < currentSink.id && !set) {
            audio.control.set_default_sink(sink)
            set = true
        }
    })

    if (!set) {
        audio.control.set_default_sink(sinks[0])
    }
}

export function swapInput(audio) {
    const currentSource = audio.control.get_default_source()
    const sources = audio.control.get_sources().sort(
        function (a, b) {
            return a.id < b.id
        }
    )

    let set = false
    sources.forEach((source) => {
        if (source.id < currentSource.id && !set) {
            audio.control.set_default_source(source)
            set = true
        }
    })

    if (!set) {
        audio.control.set_default_source(sources[0])
    }
}

export function setSpeaker(audio, stream) {
    audio.control.get_sinks().forEach((sink) => {
        if (sink.id === stream.id) {
            audio.control.set_default_sink(sink)
        }
    })
}

export function setMic(audio, stream) {
    audio.control.get_sources().forEach((source) => {
        if (source.id === stream.id) {
            audio.control.set_default_source(source)
        }
    })
}