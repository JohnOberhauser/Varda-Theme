import Wp from "gi://AstalWp"
import {bind, Variable, Binding} from "astal"
import {Gtk, App} from "astal/gtk3"
import {truncateString} from "../utils/strings";
import {SystemMenuWindowName} from "./SystemMenuWindow";

/**
 * An Endpoint is either a speaker or microphone
 *
 * @param defaultEndpoint either [Wp.Audio.default_speaker] or [Wp.Audio.default_microphone]
 * @param getIcon function that takes an Endpoint and returns the proper string icon
 * @param endpointsBinding binding obtained via [bind(Wp.Audio, "speakers")] or [bind(Wp.Audio, "microphones"]
 */
export function EndpointControls(
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
    const {audio} = Wp.get_default()!

    const endpointLabelVar = Variable.derive([
        bind(defaultEndpoint, "description"),
        bind(defaultEndpoint, "volume")
    ])

    setTimeout(() => {
        bind(App.get_window(SystemMenuWindowName)!, "visible").subscribe((visible) => {
            if (!visible) {
                endpointChooserRevealed.set(false)
            }
        })
    }, 1_000)

    let test = bind(audio, "speakers")

    return <box
        vertical={true}>
        <box
            vertical={false}
            className="row">
            <button
                className="systemMenuIconButton"
                label={endpointLabelVar(() => getIcon(defaultEndpoint))}/>
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
            className="audioRevealer"
            revealChild={endpointChooserRevealed()}
            transitionDuration={200}
            transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
            <box
                vertical={true}>
                {endpointsBinding.as((endpoints) => {
                    return endpoints.map((endpoint) => {
                        let endpointName = truncateString(endpoint.description, 25)
                        return <box
                            vertical={false}>
                            <label
                                className="audioSelectionLabel"
                                label={bind(endpoint, "isDefault").as((isDefault) => {
                                    if (isDefault) {
                                        return ""
                                    } else {
                                        return ""
                                    }
                                })}/>
                            <button
                                className="audioSelectionButton"
                                label={endpointName}
                                onClicked={() => {
                                    endpoint.set_is_default(true)
                                }}/>
                        </box>
                    })
                })}
            </box>
        </revealer>
    </box>
}