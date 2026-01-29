import {HeroUIProvider, ToastProvider} from "@heroui/react";
import type {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router";
import {DarkThemeProvider} from "../context/DarkThemeContext.tsx";

export function Providers({children}: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <HeroUIProvider>
                    <ToastProvider placement={'bottom-left'}/>
                    <DarkThemeProvider>
                        {children}
                    </DarkThemeProvider>
                </HeroUIProvider>
            </BrowserRouter>
        </Provider>
    )
}
