import Wp from "gi://AstalWp"
import {bind, Binding, Variable} from "astal"
import {App, Gtk} from "astal/gtk3"
import {SystemMenuWindowName} from "./SystemMenuWindow";
import {toggleMuteEndpoint} from "../utils/audio";

/**
 * An Endpoint is either a speaker or microphone
 *
 * @param defaultEndpoint either [Wp.Audio.default_speaker] or [Wp.Audio.default_microphone]
 * @param getIcon function that takes an Endpoint and returns the proper string icon
 * @param endpointsBinding binding obtained via [bind(Wp.Audio, "speakers")] or [bind(Wp.Audio, "microphones"]
 */
export default function (
    {
        defaultEndpoint,
        getIcon,
        endpointsBinding
    }: {
        defaultEndpoint: Wp.Endpoint,
        getIcon: (endpoint: Wp.Endpoint) => string,
        endpointsBinding: Binding<Wp.Endpoint[]>
    }
) {
    const endpointChooserRevealed = Variable(false)

    const endpointLabelVar = Variable.derive([
        bind(defaultEndpoint, "description"),
        bind(defaultEndpoint, "volume"),
        bind(defaultEndpoint, "mute")
    ])

    setTimeout(() => {
        bind(App.get_window(SystemMenuWindowName)!, "visible").subscribe((visible) => {
            if (!visible) {
                endpointChooserRevealed.set(false)
            }
        })
    }, 1_000)

    return <box
        vertical={true}>
        <box
            vertical={false}
            className="row">
            <button
                className="systemMenuIconButton"
                label={endpointLabelVar(() => getIcon(defaultEndpoint))}
                onClicked={() => {
                    toggleMuteEndpoint(defaultEndpoint)
                }}/>
            <slider
                className="systemMenuVolumeProgress"
                hexpand={true}
                onDragged={({value}) => defaultEndpoint.volume = value}
                value={bind(defaultEndpoint, "volume")}
            />
            <button
                className="iconButton"
                label={endpointChooserRevealed((revealed): string => {
                    if (revealed) {
                        return ""
                    } else {
                        return ""
                    }
                })}
                onClicked={() => {
                    endpointChooserRevealed.set(!endpointChooserRevealed.get())
                }}/>
        </box>
        <revealer
            className="rowRevealer"
            revealChild={endpointChooserRevealed()}
            transitionDuration={200}
            transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
            <box
                vertical={true}>
                {endpointsBinding.as((endpoints) => {
                    return endpoints.map((endpoint) => {
                        return <button
                            hexpand={true}
                            className="transparentButton"
                            onClicked={() => {
                                endpoint.set_is_default(true)
                            }}>
                            <label
                                halign={Gtk.Align.START}
                                className="labelSmall"
                                truncate={true}
                                label={bind(endpoint, "isDefault").as((isDefault) => {
                                    if (isDefault) {
                                        return `  ${endpoint.description}`
                                    } else {
                                        return `   ${endpoint.description}`
                                    }
                                })}/>
                        </button>
                    })
                })}
            </box>
        </revealer>
    </box>
}