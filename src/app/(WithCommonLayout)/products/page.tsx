import AllProducts from "@/components/modules/products";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllProducts } from "@/services/Product";

const ProductsPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams
    const { data, meta } = await getAllProducts(page, "1");
    return (
        <SHContainer>
            <AllProducts meta={meta} products={data} />
        </SHContainer>
    );
};

export default ProductsPage;
