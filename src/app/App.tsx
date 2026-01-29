import {Catalog} from "../components/catalog/Catalog.tsx";
import {Header} from "../components/header/Header.tsx";
import {Route, Routes} from "react-router";
import {paths} from "./paths.ts";
import {Cart} from "../components/cart/Cart.tsx";
import {PageNotFound} from "../components/ui/PageNotFound.tsx";

function App() {
    return (
        <div className={'mx-auto max-w-7xl py-4 px-4 min-h-screen'}>
            <Header/>
            <Routes>
                <Route path={paths.home} element={<Catalog/>}/>
                <Route path={paths.cart} element={<Cart/>}/>
                <Route path={'/*'} element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}

export default App
