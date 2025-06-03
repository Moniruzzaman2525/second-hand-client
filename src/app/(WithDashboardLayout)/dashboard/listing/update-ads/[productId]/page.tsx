
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import UpdateProductForm from "@/components/modules/dashboard/product/UpdateProductForm";
import SHContainer from "@/components/ui/core/SHContainer";
import { getSingleProduct } from "@/services/Product";


const UpdateProductPage = async ({
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
                        <UpdateProductForm product={product.product} />
                    </div>
                </SHContainer>
            </div>
        </DashboardLayout>

    );
};

export default UpdateProductPage;
