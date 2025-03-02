import { IMeta, IProduct } from "@/types";
import FilterSidebar from "./filterSidebar";
import ProductCard from "@/components/ui/core/ProductCard";
import TablePagination from "@/components/ui/core/SHTable/TablePagination";

const AllProducts = ({
    products,
    meta,
}: {
    products: IProduct[];
    meta: IMeta;
}) => {
    return (
        <div className="flex gap-8 my-10">
            <div>
                <FilterSidebar />
            </div>
            <div className="flex flex-col flex-grow">
                <div className="grid grid-cols-3 gap-8">
                    {products?.map((product: IProduct, idx: number) => (
                        <ProductCard key={idx} product={product} />
                    ))}
                </div>
                <div className="mt-auto flex justify-end">
                    <TablePagination totalPage={meta?.totalPage} />
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
