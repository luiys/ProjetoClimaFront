export type BoxGroupProps = {
    columns: number,    
}

export type BoxProps = {
    key?: string | number,
    link?: string,
    title?: string,
    statusTitle?: string | number,
    theme?: string,
    tooltip?: string,
    padding?: string,
}

export type BoxLinkLabelProps = {
    link?: string,
    route?: string,
    label: string,
}

export type BoxImgProps = {
    imgUrl: string,
}

export type BoxIconProps = {
    icon: JSX,
    size?: string,
    title?: string,
}