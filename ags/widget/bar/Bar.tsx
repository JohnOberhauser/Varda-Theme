import {Variable} from "astal";

export enum Bar {
    SIDE,
    TOP,
}

interface BarProps {
    name: string;
}

export const BarDetails: Record<Bar, BarProps> = {
    [Bar.SIDE]: { name: "sidebar" },
    [Bar.TOP]: { name: "topbar" },
}

export function getBarFromName(name: string): Bar | null {
    switch (name) {
        case "sidebar":
            return Bar.SIDE
        case "topbar":
            return Bar.TOP
        default:
            return null
    }
}

export const selectedBar = Variable(Bar.SIDE)