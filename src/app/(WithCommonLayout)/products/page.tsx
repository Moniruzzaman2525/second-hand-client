import AllProducts from "@/components/modules/products";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllProducts } from "@/services/Product";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ProductsPage = async ({ searchParams }: {searchParams: SearchParams}) => {
    const query = await searchParams;
    const page = query.page as string | undefined;

    if (query?.category && Array.isArray(query.category)) {
        query.category = query.category.join(",");
    }
    if (query?.price && Array.isArray(query.price)) {
        query.price = query.price.join(",");
    }

    let loading = true;
    let products = [];
    let meta = null;

    try {
        const data = await getAllProducts(page, "6", query);
        products = data.data;
        meta = data.meta;
        loading = false;
    } catch (error) {
        console.error("Error fetching products:", error);
        loading = false;
    }

    return (
        <SHContainer>
           <AllProducts isLoading={loading} meta={meta} products={products} />
        </SHContainer>
    );
};

export default ProductsPage;
