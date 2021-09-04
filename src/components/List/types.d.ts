export type GroupsProps = {
    id: string,
}

export type SectionProps = {
    type: 'header' | 'main',
}

export type RowProps = {
    color?: string,
}

export type ColumnProps = {
    type: 'default' | 'icon',
    color?: string,
    text: string,
}