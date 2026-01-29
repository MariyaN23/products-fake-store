import {Button} from "@heroui/react";
import {MoonIcon} from "./icons/MoonIcon";
import {SunIcon} from "./icons/SunIcon";
import {useContext} from "react";
import {DarkThemeContext} from "../../context/DarkThemeContext.tsx";

export function ThemeSwitcher() {
    const { darkTheme, toggleDarkTheme } = useContext(DarkThemeContext)

    return (
        <Button
            isIconOnly
            variant="flat"
            onPress={toggleDarkTheme}
            aria-label="Toggle theme"
        >
            {darkTheme ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
}
