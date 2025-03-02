import AllProducts from "@/components/modules/products";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllProducts } from "@/services/Product";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ProductsPage = async ({
    searchParams,
}: {
    searchParams: SearchParams;
}) => {
    const query = await searchParams;
    const page = query.page as string | undefined;


    if (query?.category && Array.isArray(query.category)) {
        query.category = query.category.join(',');
    }
    if (query?.price && Array.isArray(query.price)) {
        query.price = query.price.join(',');
    }


    const { data: products, meta } = await getAllProducts(page, '3', query);

    return (
        <SHContainer>
            <AllProducts meta={meta} products={products} />
        </SHContainer>
    );
};

export default ProductsPage;
