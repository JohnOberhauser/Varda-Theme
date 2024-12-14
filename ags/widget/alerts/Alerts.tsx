import {App, Astal, Gtk} from "astal/gtk3"
import Wp from "gi://AstalWp"
import {bind, Variable, Binding, GLib} from "astal"
import {getVolumeIcon} from "../utils/audio";
import Brightness from "../utils/connectables/brightness";
import {getBrightnessIcon} from "../utils/brightness";
import Battery from "gi://AstalBattery"
import {execAsync} from "astal/process"

const VolumeAlertName = "volumeAlert"
const BrightnessAlertName = "brightnessAlert"

export function AlertWindow(
    {
        iconLabel,
        label,
        sliderValue,
        windowName
    }: {
        iconLabel: Binding<string>,
        label: string,
        sliderValue: Binding<number>,
        windowName: string
    }
) {
    let windowVisibilityTimeout: GLib.Source | null = null

    return <window
        monitor={0}
        name={windowName}
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
            sliderValue.subscribe(() => {
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
        <box
            vertical={false}
            halign={Gtk.Align.CENTER}
            css={"padding: 18px 5px;"}>
            <label
                css={"margin-right: 15px;"}
                className="alertIcon"
                label={iconLabel}/>
            <box
                vertical={true}
                css={"margin-left: 10px;"}
                valign={Gtk.Align.CENTER}>
                <label
                    className="labelSmall"
                    label={label}
                    halign={Gtk.Align.START}/>
                <slider
                    css="padding-top: 2px;"
                    className="alertProgress"
                    hexpand={true}
                    value={sliderValue}/>
            </box>
        </box>
    </window>
}

export function VolumeAlert() {
    const defaultSpeaker = Wp.get_default()!.audio.default_speaker

    const speakerVar = Variable.derive([
        bind(defaultSpeaker, "description"),
        bind(defaultSpeaker, "volume"),
        bind(defaultSpeaker, "mute")
    ])

    return <AlertWindow
        iconLabel={speakerVar(() => getVolumeIcon(defaultSpeaker))}
        label="Volume"
        sliderValue={bind(defaultSpeaker, "volume")}
        windowName={VolumeAlertName}/>
}

export function BrightnessAlert() {
    const brightness = Brightness.get_default()
    
    return <AlertWindow
        iconLabel={bind(brightness, "screen").as(() => {
            return getBrightnessIcon(brightness)
        })}
        label="Brightness"
        sliderValue={bind(brightness, "screen")}
        windowName={BrightnessAlertName}/>
}

export function ChargingAlertSound() {
    const battery = Battery.get_default()
    bind(battery, "charging").subscribe((charging) => {
        if (charging) {
            execAsync('bash -c "play $HOME/.config/hypr/assets/sounds/power-plug.ogg"')
        } else {
            execAsync('bash -c "play $HOME/.config/hypr/assets/sounds/power-unplug.ogg"')
        }
    })
}