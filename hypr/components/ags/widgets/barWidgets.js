// import {Hyprland} from "../types/service/hyprland";

// export const Workspaces = () => Widget.Box({
//     class_name: 'workspaces',
//     children: Hyprland.bind('workspaces').transform(ws => {
//         return ws.map(({ id }) => Widget.Button({
//             on_clicked: () => Hyprland.sendMessage(`dispatch workspace ${id}`),
//             child: Widget.Label(`${id}`),
//             class_name: Hyprland.active.workspace.bind('id')
//                 .transform(i => `${i === id ? 'focused' : ''}`),
//         }));
//     }),
// });

// export const Workspaces = Widget({
//     setup: self => self
//         .bind('prop', hyprland.workspaces, ws => {
//             return ws.map(({ id }) => Widget.Button({
//                 on_clicked: () => Hyprland.sendMessage(`dispatch workspace ${id}`),
//                 child: Widget.Label(`${id}`),
//                 class_name: Hyprland.active.workspace.bind('id')
//                     .transform(i => `${i === id ? 'focused' : ''}`),
//             }));
//         })
// })

const hyprland = await Service.import('hyprland')

const focusedTitle = Widget.Label({
    label: hyprland.active.client.bind('title'),
    visible: hyprland.active.client.bind('address')
        .transform(addr => !!addr),
})

const dispatch = ws => hyprland.sendMessage(`dispatch workspace ${ws}`);

export const Workspaces = () => Widget.EventBox({
    onScrollUp: () => dispatch('+1'),
    onScrollDown: () => dispatch('-1'),
    child: Widget.Box({
        children: Array.from({ length: 10 }, (_, i) => i + 1).map(i => Widget.Button({
            attribute: i,
            label: `${i}`,
            onClicked: () => dispatch(i),
        })),

        // remove this setup hook if you want fixed number of buttons
        setup: self => self.hook(hyprland, () => self.children.forEach(btn => {
            btn.visible = hyprland.workspaces.some(ws => ws.id === btn.attribute);
        })),
    }),
})