import ProfileSection from "@/components/modules/dashboard/author/ProfileSection";
import UserAdsSection from "@/components/modules/dashboard/author/UserAdsSection";
import SHContainer from "@/components/ui/core/SHContainer";
import { getUserProducts } from "@/services/Product";


const SingleProductPage = async ({
    params,
}: {
    params: Promise<{ userId: string }>;
}) => {
    const { userId } = await params;
    const { data: product } = await getUserProducts(userId);

    return (
        <main className="min-h-screen">
            <ProfileSection user={product.user} />
            <div className="w-full mx-auto py-20 px-4 mt-32 bg-[#f8fafd]">
                <SHContainer> <UserAdsSection product={product.products} /> </SHContainer>
            </div>
        </main>
    )
}


export default SingleProductPage
