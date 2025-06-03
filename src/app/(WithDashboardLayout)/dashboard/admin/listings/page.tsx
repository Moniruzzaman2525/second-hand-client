import { DashboardLayout } from "@/components/layout/dashboard-layout";
import ManageProductsByAdmin from "@/components/modules/dashboard/admin/product";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllProductsByAdmin } from "@/services/Admin";

const ListingsPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams;
    const { data, meta } = await getAllProductsByAdmin(page, "5");

    return (
        <DashboardLayout>
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer>
                    <ManageProductsByAdmin meta={meta} products={data} />
                </SHContainer>
            </div>
        </DashboardLayout>
    );
};

export default ListingsPage;
