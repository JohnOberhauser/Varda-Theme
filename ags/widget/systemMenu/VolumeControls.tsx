import Wp from "gi://AstalWp"
import {bind, Variable} from "astal"
import {getVolumeIcon} from "../utils/audio";
import {Gtk, App} from "astal/gtk3"
import {truncateString} from "../utils/strings";
import {SystemMenuWindowName} from "./SystemMenuWindow";

export function SpeakerVolume() {
    const speakerChooserRevealed = Variable(false)
    const {audio} = Wp.get_default()!
    const {defaultSpeaker} = audio

    const speakerLabelVar = Variable.derive([
        bind(defaultSpeaker, "description"),
        bind(defaultSpeaker, "volume")
    ])

    setTimeout(() => {
        bind(App.get_window(SystemMenuWindowName)!, "visible").subscribe((visible) => {
            if (!visible) {
                speakerChooserRevealed.set(false)
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
                label={speakerLabelVar(() => getVolumeIcon(defaultSpeaker))}/>
            <slider
                className="systemMenuVolumeProgress"
                hexpand={true}
                onDragged={({value}) => defaultSpeaker.volume = value}
                value={bind(defaultSpeaker, "volume")}
            />
            <button
                className="iconButton"
                label={speakerChooserRevealed((revealed): string => {
                    if (revealed) {
                        return ""
                    } else {
                        return ""
                    }
                })}
                onClicked={() => {
                    speakerChooserRevealed.set(!speakerChooserRevealed.get())
                }}/>
        </box>
        <revealer
            className="audioRevealer"
            revealChild={speakerChooserRevealed()}
            transitionDuration={200}
            transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}>
            <box
                vertical={true}>
                {bind(audio, "speakers").as((speakers) => {
                    return speakers.map((speaker) => {
                        let speakerName = truncateString(speaker.description, 25)
                        return <box
                            vertical={false}>
                            <label
                                className="audioSelectionLabel"
                                label={bind(speaker, "isDefault").as((isDefault) => {
                                    if (isDefault) {
                                        return ""
                                    } else {
                                        return ""
                                    }
                                })}/>
                            <button
                                className="audioSelectionButton"
                                label={speakerName}
                                onClicked={() => {
                                    speaker.set_is_default(true)
                                }}/>
                        </box>
                    })
                })}
            </box>
        </revealer>
    </box>
}