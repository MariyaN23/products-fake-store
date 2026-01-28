"use client"
import { Button, Link } from "@heroui/react";
import { CartIcon } from "@/components/ui/icons/CartIcon";
import { paths } from "@/app/paths";

export const CartButton = () => {
    return (
        <Button
            as={Link}
            isIconOnly
            variant="flat"
            href={paths.cart}
            aria-label={'Go to cart page'}>
            <CartIcon />
        </Button>
    )
}
