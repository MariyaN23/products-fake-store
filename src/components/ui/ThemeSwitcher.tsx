import {Button} from "@heroui/react";
import {MoonIcon} from "./icons/MoonIcon";
import {SunIcon} from "./icons/SunIcon";

export function ThemeSwitcher() {
    const theme = 'dark'

    return (
        <Button
            isIconOnly
            variant="flat"
            //onPress={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
}
