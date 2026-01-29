import {HeroUIProvider} from "@heroui/react";
import type {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router";

export function Providers({children}: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <HeroUIProvider>
                    {children}
                </HeroUIProvider>
            </BrowserRouter>
        </Provider>
    )
}
