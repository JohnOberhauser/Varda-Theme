import {bind, GLib, Variable} from "astal"
import {App} from "astal/gtk4"
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
                            cssClasses={["iconButton"]}
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

export function ClockButton({cssClasses, singleLine}: { cssClasses: string[], singleLine: boolean }) {
    let format: string

    if (singleLine) {
        format = "%I:%M"
    } else {
        format = "%I\n%M"
    }

    const time = Variable<string>("").poll(1000, () =>
        GLib.DateTime.new_now_local().format(format)!)

    return <button
        cssClasses={cssClasses.concat(["iconButton"])}
        label={time()}
        onClicked={() => {
            App.toggle_window(CalendarWindowName)
        }}>

    </button>
}

export function VpnButton() {
    return <label
        cssClasses={["iconLabel"]}
        label="󰯄"
        visible={activeVpnConnections().as((connections) => {
            return connections.length !== 0
        })}/>
}

export function ScreenRecordingButton() {
    return <button
        cssClasses={["warningIconButton"]}
        label=""
        visible={isRecording()}
        onClicked={() => {
            execAsync("pkill wf-recorder")
        }}/>
}

export function VolumeButton() {
    const defaultSpeaker = Wp.get_default()!.audio.default_speaker

    const speakerVar = Variable.derive([
        bind(defaultSpeaker, "description"),
        bind(defaultSpeaker, "volume"),
        bind(defaultSpeaker, "mute")
    ])

    return <label
        cssClasses={["iconLabel"]}
        label={speakerVar(() => getVolumeIcon(defaultSpeaker))}/>
}

export function MicrophoneButton() {
    const {defaultMicrophone} = Wp.get_default()!.audio

    const micVar = Variable.derive([
        bind(defaultMicrophone, "description"),
        bind(defaultMicrophone, "volume"),
        bind(defaultMicrophone, "mute")
    ])

    return <label
        cssClasses={["iconLabel"]}
        label={micVar(() => getMicrophoneIcon(defaultMicrophone))}/>
}

export function BluetoothButton() {
    const bluetooth = Bluetooth.get_default()
    return <label
        cssClasses={["iconLabel"]}
        label="󰂯"
        visible={bind(bluetooth, "isPowered").as((isPowered) => {
            return isPowered
        })}/>
}

export function NetworkButton() {
    return <label
        cssClasses={["iconLabel"]}
        label={getNetworkIconBinding()}/>
}

export function BatteryButton() {
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
        cssClasses={batteryVar((value) => {
            if (value[0] > 0.04 || battery.state === Battery.State.CHARGING) {
                if (batteryWarningInterval != null) {
                    batteryWarningInterval.destroy()
                    batteryWarningInterval = null
                }
                return ["iconLabel"]
            } else {
                if (batteryWarningInterval === null && battery.isBattery) {
                    batteryWarningInterval = setInterval(() => {
                        warningSound()
                    }, 120_000)
                    warningSound()
                }
                return ["warningIconLabel"]
            }
        })}
        label={batteryVar(() => getBatteryIcon(battery))}
        visible={bind(battery, "isBattery")}/>
}

export function MenuButton({cssClasses}: { cssClasses: string[] }) {
    return <button
        cssClasses={cssClasses.concat(["iconButton"])}
        label=""
        onClicked={() => {
            App.toggle_window(SystemMenuWindowName)
        }}/>
}