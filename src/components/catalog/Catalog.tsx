import { ProductsSearchResults } from "@/components/catalog/ProductsSearchResults";
import { SearchPagination } from "@/components/catalog/SearchPagination";
import { SortSelect } from "./SortSelect";
import { Filters } from "@/components/catalog/Filters";
import { ProductsSearch } from "@/components/catalog/ProductsSearch";

export const Catalog = () => {
    return (
        <div className={'space-y-4'}>
            <div className={'flex gap-4 items-start justify-between'}>
                <ProductsSearch />
                <SortSelect />
            </div>
            <div className={'grid xl:grid-cols-[1fr_4fr] gap-4'}>
                <Filters />
                <div>
                    <ProductsSearchResults />
                    <SearchPagination />
                </div>
            </div>
        </div>
    )
}
