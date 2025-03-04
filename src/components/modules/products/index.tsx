import { IMeta, IProduct } from "@/types";
import ProductCard from "@/components/ui/core/ProductCard";
import TablePagination from "@/components/ui/core/SHTable/TablePagination";
import FilterSidebar from "./filterSidebar";
import SearchInput from "./SearchInput";
import { Card, CardContent } from "@/components/ui/card";
import Skeleton from "react-loading-skeleton";

const AllProducts = ({
    products,
    meta,
    isLoading,
}: {
    products: IProduct[];
    meta: IMeta;
    isLoading: boolean;
}) => {
    return (
        <div className="flex flex-col justify-center gap-8 my-10">
            <SearchInput />
            <div className="flex flex-col lg:flex-row justify-between gap-5 items-start mb-6">
                <div className="lg:w-72 w-full mb-4 flex justify-center lg:mb-0">
                    <FilterSidebar />
                </div>
                <div className="flex-grow">
                    {isLoading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, idx) => (
                                <div key={idx}>
                                    <Skeleton height={200} width="100%" />
                                </div>
                            ))}
                        </div>
                    ) : products?.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {products?.map((product: IProduct, idx: number) => (
                                <ProductCard key={idx} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-60">
                            <Card className="w-full max-w-xs mx-auto p-4">
                                <CardContent className="text-center text-gray-500">
                                    <p>No products found</p>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {isLoading ? (
                        <Skeleton height={40} width={200} className="mt-5" />
                    ) : (
                        <div className="flex justify-center mt-5">
                            <TablePagination totalPage={meta?.totalPage} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
