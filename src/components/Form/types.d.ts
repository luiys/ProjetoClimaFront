export interface FormHeaderContentProps {
    name: string,
}

export interface FormHeaderLinkProps {
    link: string,
    tooltip: string,
    label: string,
}

export interface FormBoxProps {
    title: string,
}

export interface FormBoxSectionProps {
    name: string,
}

export interface FormBoxLabelProps {
    id: string,
    label: string,
}

export interface FormBoxButtonProps {
    type: 'submit' | 'reset' | undefined,
    label: string,
    disabled?: boolean,
}