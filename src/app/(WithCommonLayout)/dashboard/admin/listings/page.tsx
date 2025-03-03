import ManageProductsByAdmin from "@/components/modules/dashboard/admin/product";
import Sidebar from "@/components/modules/dashboard/sidebar";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllProducts } from "@/services/Product";

const ListingsPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams;
    const { data, meta } = await getAllProducts(page, "1");

    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer>
                    <ManageProductsByAdmin meta={meta} products={data} />
                </SHContainer>
            </div>
        </div>
    );
};

export default ListingsPage;
