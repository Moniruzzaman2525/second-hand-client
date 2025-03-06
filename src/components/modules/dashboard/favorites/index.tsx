import { IMeta, IProduct } from "@/types";
import ProductCard from "@/components/ui/core/ProductCard";
import TablePagination from "@/components/ui/core/SHTable/TablePagination";
import { Card, CardContent } from "@/components/ui/card";

const ViewWishlist = ({
    products,
    meta,
}: {
    products: IProduct[];
    meta: IMeta;
    }) => {
    return (
        <div>
            <div className="">
                <h2 className="text-[24px] font-bold md:text-[36px] text-[#374b5c] my-10">Favorites</h2>
                <h2 className="text-[24px] font-semibold text-[#374b5c] my-5">{meta.total} Results</h2>
            </div>
            <div className="flex flex-col justify-center gap-8 my-10">
                <div className="flex flex-col lg:flex-row justify-between gap-5 items-start mb-6">
                    <div className="flex-grow">
                        {products?.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                                {products.map((product: IProduct, idx: number) => (
                                    <ProductCard key={idx} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex justify-center items-center h-60">
                                <Card className="w-full max-w-xs mx-auto p-4">
                                    <CardContent className="text-center text-gray-500">
                                        <p>You do not have favorite ads yet</p>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        <div className="flex justify-center mt-5">
                            <TablePagination totalPage={meta?.totalPage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewWishlist;
