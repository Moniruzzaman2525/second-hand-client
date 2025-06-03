import ViewWishlist from "@/components/modules/dashboard/favorites";
import Sidebar from "@/components/modules/dashboard/sidebar";
import SHContainer from "@/components/ui/core/SHContainer";
import { getUserWishlist } from "@/services/Wishlist";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ProductsPage = async ({ searchParams }: { searchParams: SearchParams }) => {
    const query = await searchParams;
    const page = query.page as string | undefined;
    const { data: products } = await getUserWishlist(page, "6",);

    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    <ViewWishlist meta={products.meta} products={products?.result} />
                </SHContainer>
            </div>
        </div>

    );
};

export default ProductsPage;
