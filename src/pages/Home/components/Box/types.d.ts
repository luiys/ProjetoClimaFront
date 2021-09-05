export interface BoxItemProps {
    background?: boolean,
    theme?: string,
}

export interface BoxClimaProps {
    current: number,
    max: number,
    min: number,
    feels: number,
}

export interface BoxClimaTextsProps {
    title: string,
    text: string | number,
}

export interface BoxErrorProps {}