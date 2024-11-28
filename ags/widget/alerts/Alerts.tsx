import {App, Astal, Gtk} from "astal/gtk3"
import Wp from "gi://AstalWp"
import {bind, Variable, Binding, GLib} from "astal"
import {getVolumeIcon} from "../utils/audio";

const VolumeAlertName = "volumeAlert"

function AlertContent(
    {iconLabel, label, sliderValue}: {iconLabel: Binding<string>, label: string, sliderValue: Binding<number>}
) {
    return <box
        vertical={false}
        halign={Gtk.Align.CENTER}
        css={"padding: 18px 5px;"}>
        <label
            css={"margin-right: 10px;"}
            className="alertIcon"
            label={iconLabel}/>
        <box
            vertical={true}
            css={"margin-left: 10px;"}
            valign={Gtk.Align.CENTER}>
            <label
                className="alertText"
                label={label}
                halign={Gtk.Align.START}/>
            <slider
                css="padding-top: 2px;"
                className="alertProgress"
                hexpand={true}
                value={sliderValue}/>
        </box>
    </box>
}

export function VolumeAlert() {
    const defaultSpeaker = Wp.get_default()!.audio.default_speaker

    const speakerVar = Variable.derive([
        bind(defaultSpeaker, "description"),
        bind(defaultSpeaker, "volume")
    ])

    let windowVisibilityTimeout: GLib.Source | null = null

    return <window
        monitor={0}
        name={VolumeAlertName}
        application={App}
        anchor={Astal.WindowAnchor.BOTTOM}
        exclusivity={Astal.Exclusivity.NORMAL}
        layer={Astal.Layer.OVERLAY}
        className="window"
        margin_bottom={100}
        visible={false}
        setup={(self) => {
            let canShow = false
            setTimeout(() => {
                canShow = true
            }, 3_000)
            bind(defaultSpeaker, "volume").subscribe((volume) => {
                if (!canShow) {
                    return
                }
                if (windowVisibilityTimeout != null) {
                    windowVisibilityTimeout.destroy()
                }
                self.visible = true
                windowVisibilityTimeout = setTimeout(() => {
                    self.visible = false
                    windowVisibilityTimeout?.destroy()
                    windowVisibilityTimeout = null
                }, 1_000)
            })
        }}>
        <AlertContent
            iconLabel={speakerVar(() => getVolumeIcon(defaultSpeaker))}
            label="Volume"
            sliderValue={bind(defaultSpeaker, "volume").as((volume) => {
                return volume
            })}/>
    </window>
}