interface ThemeProps {
    name: string;
    icon: string;
    pixelAdjustment: number;
}

export enum Theme {
    BLOOD_RUST,
    EVER_FOREST,
    NORD,
    ROSE_PINE,
    VARDA,
}

export const ThemeDetails: Record<Theme, ThemeProps> = {
    [Theme.BLOOD_RUST]: { name: "bloodrust", icon: "󰚌", pixelAdjustment: 2 },
    [Theme.EVER_FOREST]: { name: "everforest", icon: "󰌪", pixelAdjustment: 1 },
    [Theme.NORD]: { name: "nord", icon: "", pixelAdjustment: 2 },
    [Theme.ROSE_PINE]: { name: "rosepine", icon: "", pixelAdjustment: 5 },
    [Theme.VARDA]: { name: "varda", icon: "", pixelAdjustment: 3 },
};

export function getThemeFromName(themeName: string): Theme {
    switch (themeName) {
        case "bloodrust":
            return Theme.BLOOD_RUST
        case "everforest":
            return Theme.EVER_FOREST
        case "nord":
            return Theme.NORD
        case "rosepine":
            return Theme.ROSE_PINE
        case "varda":
            return Theme.VARDA
        default:
            return Theme.VARDA
    }
}