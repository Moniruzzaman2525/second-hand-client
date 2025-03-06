import { IProduct } from "@/types";
import ProductCard from "@/components/ui/core/ProductCard";

import { Card, CardContent } from "@/components/ui/card";

const FeatureProduct = ({
    products,
}: {
    products: IProduct[];
}) => {
    return (
        <div className="flex flex-col justify-center gap-8 my-10">
            <div className="flex flex-col lg:flex-row justify-between gap-5 items-start mb-6">
                <div className="flex-grow">
                    { products?.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;
