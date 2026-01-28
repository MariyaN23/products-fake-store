import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { CartButton } from "@/components/cart/CartButton";
import { CatalogButton } from "@/components/catalog/CatalogButton";

export const Header = () => {
    return (
        <div className={'max-w-7xl mx-auto p-4'}>
            <div className={'flex items-center justify-between'}>
                <ThemeSwitcher />
                <CatalogButton />
                <CartButton />
            </div>
        </div>
    )
}
