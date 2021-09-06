import { createContext, useContext, useEffect } from "react"

export enum Theme {
    Dark = 'dark-mode',
    Light = 'light-mode',
}

export type ThemeContextProps = {
    theme: Theme,
    setTheme: (Theme: Theme) => void,
}

let prefers = window.matchMedia("(prefers-color-scheme: dark)")
let local:string | null = localStorage.getItem('theme')

export const ThemeContext = createContext<ThemeContextProps>({ 
    theme: local !== null ? (local === 'dark-mode' ? Theme.Dark : Theme.Light) : (prefers.matches ? Theme.Dark : Theme.Light),
    setTheme: () => {},
})

export const useTheme = () => {

    let value = useContext(ThemeContext).theme
    let storage:string | null = localStorage.getItem('theme')

    useEffect(() => {
        storage ? localStorage.setItem('theme', value) : localStorage.setItem('theme', Theme.Light)
    }, [value, storage])  

    return useContext(ThemeContext)

}