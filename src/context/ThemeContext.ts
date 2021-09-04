import { createContext, useContext, useEffect } from "react"

export enum Theme {
    Dark = 'dark-mode',
    Light = 'light-mode',
}

export type ThemeContextProps = {
    theme: Theme,
    setTheme: (Theme: Theme) => void,
}

let local:string | null = localStorage.getItem('theme')

export const ThemeContext = createContext<ThemeContextProps>({ 
    theme: local === 'dark-mode' ? Theme.Dark : Theme.Light,
    setTheme: () => {},
})

export const useTheme = () => {

    let value = useContext(ThemeContext).theme
    let storage:string | null = localStorage.getItem('theme')

    useEffect(() => {
        //window.matchMedia("(prefers-color-scheme: dark)").matches
        storage ? localStorage.setItem('theme', value) : localStorage.setItem('theme', Theme.Light)
    }, [value, storage])  

    return useContext(ThemeContext)

}