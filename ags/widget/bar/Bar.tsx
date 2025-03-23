import {Variable} from "astal";
import {execAsync} from "astal/process";

export enum Bar {
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom",
}

export enum MenuPosition {
    DEFAULT = "default",
    ALTERNATE = "alternate",
}

export enum ClockPosition {
    DEFAULT= "default",
    ALTERNATE = "alternate",
}

export function unpackBarDetails(details: string): boolean {
    if (details.trim() === "") {
        return false
    }
    const values = details.split(",")
    switch (values[0]) {
        case Bar.LEFT:
            selectedBar.set(Bar.LEFT)
            break;
        case Bar.TOP:
            selectedBar.set(Bar.TOP)
            break;
        case Bar.RIGHT:
            selectedBar.set(Bar.RIGHT)
            break;
        case Bar.BOTTOM:
            selectedBar.set(Bar.BOTTOM)
            break;
    }
    switch (values[1]) {
        case MenuPosition.DEFAULT:
            menuPosition.set(MenuPosition.DEFAULT)
            break;
        case MenuPosition.ALTERNATE:
            menuPosition.set(MenuPosition.ALTERNATE)
            break;
    }
    switch (values[2]) {
        case ClockPosition.DEFAULT:
            clockPosition.set(ClockPosition.DEFAULT)
            break;
        case ClockPosition.ALTERNATE:
            clockPosition.set(ClockPosition.ALTERNATE)
            break;
    }
    return true
}

export const selectedBar = Variable(Bar.LEFT)
export const menuPosition = Variable(MenuPosition.DEFAULT)
export const clockPosition = Variable(ClockPosition.DEFAULT)

export function setBarType(bar: Bar) {
    selectedBar.set(bar)
    execAsync(["bash", "-c", `echo "${bar},${menuPosition.get()},${clockPosition.get()}" > ./savedBar`])
        .catch((error) => {
            print(error)
        })
}

export function setMenuPosition(position: MenuPosition) {
    print(`setting menu position to: ${position}`)
    menuPosition.set(position)
    execAsync(["bash", "-c", `echo "${selectedBar.get()},${position},${clockPosition.get()}" > ./savedBar`])
        .catch((error) => {
            print(error)
        })
}

export function setClockPosition(position: ClockPosition) {
    print(`setting clock position to: ${position}`)
    clockPosition.set(position)
    execAsync(["bash", "-c", `echo "${selectedBar.get()},${menuPosition.get()},${position}" > ./savedBar`])
        .catch((error) => {
            print(error)
        })
}