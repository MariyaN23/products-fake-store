import {useCart} from "../../hooks/useCart.tsx";
import {Badge, Button, Link} from "@heroui/react";
import {paths} from "../../app/paths.ts";
import {CartIcon} from "../ui/icons/CartIcon.tsx";

export const CartButton = () => {
    const {
        items
    } = useCart()

    return (
        <Badge
            color="primary"
            content={items.length}
            isInvisible={items.length === 0}
        >
            <Button
                as={Link}
                isIconOnly
                variant="flat"
                href={paths.cart}
                aria-label={'Go to cart page'}
            >
                <CartIcon/>
            </Button>
        </Badge>
    )
}
