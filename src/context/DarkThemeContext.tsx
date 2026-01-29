import {createContext, type ReactNode, useLayoutEffect, useState} from "react";

type DarkThemeContextType = {
    darkTheme: boolean
    toggleDarkTheme: () => void
}

const DarkThemeContext = createContext<DarkThemeContextType>({
    darkTheme: false,
    toggleDarkTheme: () => {}
})

const THEME = 'theme'

const THEMES = {
    light: 'light',
    dark: 'dark',
}

function DarkThemeProvider({children}: { children: ReactNode }) {
    const getThemeFromLocalStorage = () => {
        const theme = localStorage.getItem(THEME)

        return theme === THEMES.dark
    }

    const [darkTheme, setDarkTheme] = useState(getThemeFromLocalStorage())
    const toggleDarkTheme = () => {
        const newTheme = !darkTheme
        setDarkTheme(newTheme)
        localStorage.setItem(THEME, newTheme ? THEMES.dark : THEMES.light)
        document.body.classList.toggle(THEMES.dark, newTheme)
    }

    useLayoutEffect(() => {
        document.body.classList.toggle(THEMES.dark, darkTheme)
    }, [darkTheme])

    return (
        <DarkThemeContext.Provider value={{darkTheme, toggleDarkTheme}}>
            {children}
        </DarkThemeContext.Provider>
    )
}

export {DarkThemeContext, DarkThemeProvider}
