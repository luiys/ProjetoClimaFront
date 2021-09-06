import { LegacyRef } from "react"

export type HeaderBarProps = {
    searchRef: LegacyRef,
    searchFunction: Function,
    userLogout: Function,
}

export type ContainerProps = {
    theme: string,
}

export type ContentProps = {
    name: string,
}

export type IconProps = {
    tooltip: string,
    icon: JSX,
    size: string,
    onClick?: Function | null | void;
}