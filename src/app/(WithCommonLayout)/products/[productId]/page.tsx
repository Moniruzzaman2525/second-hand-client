import SingleProductView from "@/components/modules/dashboard/product/SingleProductView";
import SuggestProjects from "@/components/modules/products/suggestProduct";
import SHContainer from "@/components/ui/core/SHContainer";
import { getSingleProduct } from "@/services/Product";

const SingleProductPage = async ({
    params,
}: {
    params: Promise<{ productId: string }>;
}) => {
    const { productId } = await params;

    const { data: product } = await getSingleProduct(productId);

    return (
        <SHContainer>
            <SingleProductView product={product?.product} />
            <SuggestProjects product={product?.product._id} />
        </SHContainer>
    );
};

export default SingleProductPage;
