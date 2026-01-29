import {Button, Link} from "@heroui/react";
import {paths} from "../../app/paths.ts";

export const CatalogButton = () => {
    return (
        <Button
            as={Link}
            variant="light"
            href={paths.home}
            className={'font-bold text-3xl'}
        >
            Catalog
        </Button>
    )
}
