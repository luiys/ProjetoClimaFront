export type PageRenderProps = {
    pageType: 'default' | 'form' | 'error',
    name: string,
    title: string,
    theme1: 'light-mode' | 'dark-mode',
    theme2?: string,
    component: JSX.Element,
}