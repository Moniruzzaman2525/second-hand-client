import ManageProducts from "@/components/modules/dashboard/product";
import Sidebar from "@/components/modules/dashboard/sidebar";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllUserProducts } from "@/services/Product";


const ListingPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams
    const { data, meta } = await getAllUserProducts(page, "1");
    return (
         <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer >
                    <ManageProducts meta={meta} products={data} />
                </SHContainer>
            </div>
        </div>
    );
};

export default ListingPage;
