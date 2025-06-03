
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import ProductDetailsPage from "@/components/modules/dashboard/product/ProductDetailsPage";
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
        <DashboardLayout>
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    <div className="flex justify-center items-center">
                        <ProductDetailsPage product={product.product} />
                    </div>
                </SHContainer>
            </div>
        </DashboardLayout>

    );
};

export default ProductDetails;
