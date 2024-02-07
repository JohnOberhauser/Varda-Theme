
const hyprland = await Service.import('hyprland')

const dispatchWorkspace = ws => hyprland.sendMessage(`dispatch workspace ${ws}`);

export const Workspaces = (vertical = true) => Widget.EventBox({
    onScrollDown: () => dispatchWorkspace('+1'),
    onScrollUp: () => dispatchWorkspace('-1'),
    class_name: "workspace_button",
    child: Widget.Box({
        vertical: vertical,
        children: Array.from(
            { length: 5 },
            (_, i) => i + 1
        ).map(i =>
            Widget.Button({
                attribute: i,
                label: '',
                class_name: "workspace_button",
                onClicked: () => dispatchWorkspace(i),
            })
        ),

        // set icon
        setup: self => self.hook(
            hyprland,
            () => self.children.forEach(
                btn => {
                    if (hyprland.monitors[0].activeWorkspace.id === btn.attribute) {
                        btn.label = ""
                    } else {
                        btn.label = ""
                    }
                }
            )
        ),
    }),
})