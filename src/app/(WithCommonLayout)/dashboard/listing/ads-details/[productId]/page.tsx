
import ProductDetailsPage from "@/components/modules/dashboard/product/ProductDetailsPage";
import Sidebar from "@/components/modules/dashboard/sidebar";
import SHContainer from "@/components/ui/core/SHContainer";
import { getSingleProduct } from "@/services/Product";


const ProductDetails = async ({
    params,
}: {
    params: Promise<{ productId: string }>;
}) => {
    const { productId } = await params;

    const { data: product } = await getSingleProduct(productId);

    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    <div className="flex justify-center items-center">
                        <ProductDetailsPage product={product.product} />
                    </div>
                </SHContainer>
            </div>
        </div>

    );
};

export default ProductDetails;
