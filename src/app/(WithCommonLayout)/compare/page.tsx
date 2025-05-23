import ViewCompare from "@/components/modules/compare";
import SHContainer from "@/components/ui/core/SHContainer";
import { getUserCompare } from "@/services/Compare";


const ComparePage = async () => {

    const { data: products } = await await getUserCompare()


    return (
        <div>
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    <ViewCompare meta={products?.meta} products={products?.result} />
                </SHContainer>
            </div>
        </div>

    );
};

export default ComparePage;
