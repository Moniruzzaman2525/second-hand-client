import ViewWishlist from "@/components/modules/dashboard/favorites";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllProducts } from "@/services/Product";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ProductsPage = async ({ searchParams }: { searchParams: SearchParams }) => {
    const query = await searchParams;
    const page = query.page as string | undefined;
    const {data:products, meta} = await getAllProducts(page, "6", query);

    console.log(products)
    return (
        <SHContainer>
            <ViewWishlist  meta={meta} products={products} />
        </SHContainer>
    );
};

export default ProductsPage;
