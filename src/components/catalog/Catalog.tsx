import { ProductsSearch } from "@/components/catalog/ProductsSearch";
import { SearchPagination } from "@/components/catalog/SearchPagination";
import { SortSelect } from "./SortSelect";
import { Filters } from "@/components/catalog/Filters";

export const Catalog = () => {
    return (
        <div className={'space-y-4'}>
            <div className={'flex gap-4 items-start justify-end'}>
                <SortSelect/>
            </div>
            <div className={'grid grid-cols-[270px_1fr] gap-4'}>
                <Filters/>
                <div>
                    <ProductsSearch/>
                    <SearchPagination/>
                </div>
            </div>
        </div>
    )
}
