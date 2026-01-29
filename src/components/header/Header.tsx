import {ThemeSwitcher} from "../ui/ThemeSwitcher.tsx";
import {CatalogButton} from "./CatalogButton.tsx";
import {CartButton} from "./CartButton.tsx";

export const Header = () => {
    return (
        <div className={'max-w-7xl mx-auto py-4'}>
            <div className={'flex items-center justify-between'}>
                <ThemeSwitcher />
                <CatalogButton />
                <CartButton />
            </div>
        </div>
    )
}
