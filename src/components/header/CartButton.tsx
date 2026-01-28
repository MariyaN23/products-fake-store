"use client"
import {Badge, Button, Link} from "@heroui/react";
import {CartIcon} from "@/components/ui/icons/CartIcon";
import {paths} from "@/app/paths";
import {useCart} from "@/hooks/useCart";

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
