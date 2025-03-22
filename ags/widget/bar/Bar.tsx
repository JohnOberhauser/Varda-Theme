import {Variable} from "astal";

export enum Bar {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
}

interface BarProps {
    name: string;
}

export const BarDetails: Record<Bar, BarProps> = {
    [Bar.LEFT]: { name: "left" },
    [Bar.TOP]: { name: "top" },
    [Bar.RIGHT]: { name: "right" },
    [Bar.BOTTOM]: { name: "bottom" },
}

export function getBarFromName(name: string): Bar | null {
    switch (name) {
        case "left":
            return Bar.LEFT
        case "top":
            return Bar.TOP
        case "right":
            return Bar.RIGHT
        case "bottom":
            return Bar.BOTTOM
        default:
            return null
    }
}

export const selectedBar = Variable(Bar.LEFT)