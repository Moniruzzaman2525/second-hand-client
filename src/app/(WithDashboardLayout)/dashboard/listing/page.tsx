import Image from "next/image";
import ManageProducts from "@/components/modules/dashboard/product";
import SHContainer from "@/components/ui/core/SHContainer";
import { getAllUserProducts } from "@/services/Product";
import emptyCart from '../../../assets/empty-product.png'
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import Link from "next/link";


const ListingPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
    const { page } = await searchParams;
    const { data, meta } = await getAllUserProducts(page, "5");

    if (data?.length === 0) {
        return (
            <DashboardLayout>
                <div className="bg-[#f8fafd] h-screen">
                    <SHContainer>
                        <div className='bg-[#fdfdfe] h-[500px] flex justify-center items-center flex-col'>
                            <p className="text-[24px] font-semibold text-[#374b5c]">You do not have any ads yet.</p>
                            <Image src={emptyCart} alt="No Ads" width={300} height={300} className="mb-4" />
                            <Link href='/dashboard/listing/add-ads' className="mt-4 px-6 py-2 bg-primary rounded-md transition">
                                Post Your Ad
                            </Link>
                        </div>
                    </SHContainer>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className='bg-[#f8fafd]'>
                <SHContainer >
                    <ManageProducts meta={meta} products={data} />
                </SHContainer>
            </div>
        </DashboardLayout>
    );
};

export default ListingPage;
