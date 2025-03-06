import { IProduct } from "@/types";
import ProductCard from "@/components/ui/core/ProductCard";

import { Card, CardContent } from "@/components/ui/card";
import SHContainer from "@/components/ui/core/SHContainer";

const FeatureProduct = ({
    products,
}: {
    products: IProduct[];
}) => {
    return (
        <SHContainer>
            <div className="text-[2px] md:text-[35px] py-10">Feature Product</div>
            <div className="flex flex-col justify-center gap-8 my-10">
                <div className="flex flex-col lg:flex-row justify-between gap-5 items-start mb-6">
                    <div className="flex-grow">
                        {products?.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                                {products.slice(0, 8).map((product: IProduct, idx: number) => (
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
                    </div>
                </div>
            </div>
        </SHContainer>
    );
};

export default FeatureProduct;
