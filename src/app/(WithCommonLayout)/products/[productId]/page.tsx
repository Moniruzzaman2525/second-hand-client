import SingleProductView from "@/components/modules/dashboard/product/SingleProductView";
import { getSingleProduct } from "@/services/Product";

const SingleProductPage = async ({
    params,
}: {
    params: Promise<{ productId: string }>;
}) => {
    const { productId } = await params;

    const { data: product } = await getSingleProduct(productId);
    return (
        <div>
            <SingleProductView product={product.product} />
        </div>
    );
};

export default SingleProductPage;
