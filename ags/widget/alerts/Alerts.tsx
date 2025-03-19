import {App, Astal, Gtk} from "astal/gtk4"
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
        cssClasses={["window"]}
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
            vertical={true}>

        </box>
        <box
            vertical={false}
            marginBottom={18}
            marginTop={18}
            marginStart={5}
            marginEnd={5}
            halign={Gtk.Align.CENTER}>
            <label
                marginStart={20}
                marginEnd={15}
                cssClasses={["alertIcon"]}
                label={iconLabel}/>
            <box
                vertical={true}
                marginStart={10}
                valign={Gtk.Align.CENTER}>
                <label
                    cssClasses={["labelSmall"]}
                    label={label}
                    halign={Gtk.Align.START}/>
                <slider
                    marginTop={2}
                    marginEnd={20}
                    cssClasses={["alertProgress"]}
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
        if (battery.batteryLevel === 1) {
            return
        }
        if (charging) {
            execAsync('bash -c "play $HOME/.config/hypr/assets/sounds/power-plug.ogg"')
        } else {
            execAsync('bash -c "play $HOME/.config/hypr/assets/sounds/power-unplug.ogg"')
        }
    })
}