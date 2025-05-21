import { getSuggestProduct } from "@/services/Product";
import SuggestPage from "./SuggestPage";

const SuggestProjects = async ({ product }: { product: string }) => {

    const result = await getSuggestProduct(product);

    return (
        <div>
            <SuggestPage products={result?.data} />
        </div>
    );
};

export default SuggestProjects;
