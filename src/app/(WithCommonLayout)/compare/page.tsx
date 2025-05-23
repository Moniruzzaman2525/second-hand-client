import ViewCompare from "@/components/modules/compare";
import SHContainer from "@/components/ui/core/SHContainer";
import { getUserCompare } from "@/services/Compare";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ComparePage = async ({ searchParams }: { searchParams: SearchParams }) => {
    const query = await searchParams;
    const page = query.page as string | undefined;
    const { data: products } = await await getUserCompare()
    console.log(page)

    return (
        <div>
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    <ViewCompare meta={products.meta} products={products?.result} />
                </SHContainer>
            </div>
        </div>

    );
};

export default ComparePage;
