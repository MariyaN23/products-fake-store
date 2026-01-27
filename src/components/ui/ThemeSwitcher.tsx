"use client";
import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    if (!mounted) return null

    return (
        <Button
            isIconOnly
            variant="flat"
            onPress={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
}
