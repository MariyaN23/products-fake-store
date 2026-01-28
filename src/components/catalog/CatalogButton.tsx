"use client"
import { Button, Link } from "@heroui/react";
import { paths } from "@/app/paths";

export const CatalogButton = () => {
    return (
        <Button
            as={Link}
            variant="light"
            href={paths.home}
        >
            Catalog
        </Button>
    )
}
