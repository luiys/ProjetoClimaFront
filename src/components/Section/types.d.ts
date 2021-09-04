export type SectionProps = {
    type: 'default' | 'form',
    name: string,
    title?: string | null,
    titleComplement?: string | null,
    subTitle?: string | null,
    goBack?: boolean,
}

export type SectionContainerProps = {
    title?: string | null,
    titleComplement?: string | null,
    subTitle?: string | null,
    goBack?: boolean,
}