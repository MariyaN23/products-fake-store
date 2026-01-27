"use client"
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { ReactNode } from "react";

export function Providers({children}: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <HeroUIProvider>
                <NextThemesProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </NextThemesProvider>
            </HeroUIProvider>
        </Provider>
    )
}
