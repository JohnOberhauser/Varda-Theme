import {bind, GLib, Variable} from "astal"
import {App} from "astal/gtk3"
import Hyprland from "gi://AstalHyprland"
import {CalendarWindowName} from "../calendar/Calendar"
import Wp from "gi://AstalWp"
import Battery from "gi://AstalBattery"
import {getMicrophoneIcon, getVolumeIcon} from "../utils/audio"
import {getNetworkIconBinding} from "../utils/network"
import {getBatteryIcon} from "../utils/battery"
import {execAsync} from "astal/process"
import {SystemMenuWindowName} from "../systemMenu/SystemMenuWindow";
import Bluetooth from "gi://AstalBluetooth"
import {activeVpnConnections} from "../systemMenu/NetworkControls";
import {isRecording} from "../screenshot/Screenshot";
import Divider from "../common/Divider";

function groupByProperty(
    array: Hyprland.Workspace[],
): Hyprland.Workspace[][] {
    const map = new Map<Hyprland.Monitor, Hyprland.Workspace[]>();

    array.forEach((item) => {
        const key = item.monitor;
        if (key === null) {
            return
        }
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)!.unshift(item);
    });

    return Array.from(map.values()).sort((a, b) => {
        return a[0].monitor.id - b[0].monitor.id
    });
}

export function Workspaces({vertical}: { vertical: boolean }) {
    const hypr = Hyprland.get_default()

    return <box
        vertical={vertical}>
        {bind(hypr, "workspaces").as((workspaces) => {
            const groupedWorkspaces = groupByProperty(workspaces)
            return groupedWorkspaces.map((workspaceGroup, index) => {
                return <box
                    vertical={vertical}>
                    {index > 0 && index < groupedWorkspaces.length && <Divider/>}
                    {workspaceGroup.sort((a, b) => {
                        return a.id - b.id
                    }).map((workspace) => {
                        return <button
                            label={
                                bind(workspace.monitor, "activeWorkspace").as((activeWorkspace) =>
                                    activeWorkspace.id == workspace.id ? "" : ""
                                )
                            }
                            className="iconButton"
                            onClicked={() => {
                                hypr.dispatch("workspace", `${workspace.id}`)
                            }}>
                        </button>
                    })}
                </box>
            })
        })}
    </box>
}

export function ClockButton({css, singleLine}: { css: string, singleLine: boolean }) {
    let format: string

    if (singleLine) {
        format = "%I:%M"
    } else {
        format = "%I\n%M"
    }

    const time = Variable<string>("").poll(1000, () =>
        GLib.DateTime.new_now_local().format(format)!)

    return <button
        className="iconButton"
        css={css}
        label={time()}
        onClicked={() => {
            App.toggle_window(CalendarWindowName)
        }}>

    </button>
}

export function VpnButton({css}: { css: string }) {
    return <label
        className="iconButton"
        css={css}
        label="󰯄"
        visible={activeVpnConnections().as((connections) => {
            return connections.length !== 0
        })}/>
}

export function ScreenRecordingButton({css}: { css: string }) {
    return <button
        className="warningIconButton"
        css={css}
        label=""
        visible={isRecording()}
        onClicked={() => {
            execAsync("pkill wf-recorder")
        }}/>
}

export function VolumeButton({css}: { css: string }) {
    const defaultSpeaker = Wp.get_default()!.audio.default_speaker

    const speakerVar = Variable.derive([
        bind(defaultSpeaker, "description"),
        bind(defaultSpeaker, "volume"),
        bind(defaultSpeaker, "mute")
    ])

    return <label
        css={css}
        className="iconButton"
        label={speakerVar(() => getVolumeIcon(defaultSpeaker))}/>
}

export function MicrophoneButton({css}: { css: string }) {
    const {defaultMicrophone} = Wp.get_default()!.audio

    const micVar = Variable.derive([
        bind(defaultMicrophone, "description"),
        bind(defaultMicrophone, "volume"),
        bind(defaultMicrophone, "mute")
    ])

    return <label
        css={css}
        className="iconButton"
        label={micVar(() => getMicrophoneIcon(defaultMicrophone))}/>
}

export function BluetoothButton({css}: { css: string }) {
    const bluetooth = Bluetooth.get_default()
    return <label
        css={css}
        className="iconButton"
        label="󰂯"
        visible={bind(bluetooth, "isPowered").as((isPowered) => {
            return isPowered
        })}/>
}

export function NetworkButton({css}: { css: string }) {
    return <label
        css={css}
        className="iconButton"
        label={getNetworkIconBinding()}/>
}

export function BatteryButton({css}: { css: string }) {
    const battery = Battery.get_default()

    let batteryWarningInterval: GLib.Source | null = null

    function warningSound() {
        execAsync('bash -c "play $HOME/.config/hypr/assets/sounds/battery-low.ogg"')
    }

    const batteryVar = Variable.derive([
        bind(battery, "percentage"),
        bind(battery, "state")
    ])

    return <label
        css={css}
        className={batteryVar((value) => {
            if (value[0] > 0.04 || battery.state === Battery.State.CHARGING) {
                if (batteryWarningInterval != null) {
                    batteryWarningInterval.destroy()
                    batteryWarningInterval = null
                }
                return "iconButton"
            } else {
                if (batteryWarningInterval === null && battery.isBattery) {
                    batteryWarningInterval = setInterval(() => {
                        warningSound()
                    }, 120_000)
                    warningSound()
                }
                return "warningIconButton"
            }
        })}
        label={batteryVar(() => getBatteryIcon(battery))}
        visible={bind(battery, "isBattery")}/>
}

export function MenuButton({css}: { css: string }) {
    return <button
        css={css}
        className="iconButton"
        label=""
        onClicked={() => {
            App.toggle_window(SystemMenuWindowName)
        }}/>
}