import { bind } from "astal"
import Hyprland from "gi://AstalHyprland"

export function Workspaces({ vertical }: { vertical: boolean }) {
    const hypr = Hyprland.get_default()

    return <box
        vertical={vertical}
    >
        {Array.from({length: 6}, (_, i) => (
            <button
                label={
                    bind(hypr, "focusedWorkspace").as(focusedWs =>
                        focusedWs.get_id() == i + 1 ? "" : ""
                    )
                }
                className="iconButton"
                onClicked={() => {
                    hypr.dispatch("workspace", `${i + 1}`)
                }}>

            </button>
        ))}
    </box>
}