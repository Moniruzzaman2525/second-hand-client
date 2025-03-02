import { IMeta, IProduct } from "@/types";
import ProductCard from "@/components/ui/core/ProductCard";
import TablePagination from "@/components/ui/core/SHTable/TablePagination";
import FilterSidebar from "./filterSidebar";
import SearchInput from "./SearchInput";

const SearchPage = ({
    products,
    meta,
}: {
    products: IProduct[];
    meta: IMeta;
}) => {
    return (
        <div className="flex flex-col gap-8 my-10">
            <SearchInput />
            <div className="flex justify-between gap-5 items-start mb-6">
                <div className="w-72">
                    <FilterSidebar />
                </div>
                <div className="flex-grow">
                    <div className="grid grid-cols-3 gap-8">
                        {products?.map((product: IProduct, idx: number) => (
                            <ProductCard key={idx} product={product} />
                        ))}
                    </div>
                    <TablePagination totalPage={meta?.totalPage} />
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
