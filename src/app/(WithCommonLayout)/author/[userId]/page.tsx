import ProfileSection from "@/components/modules/dashboard/author/ProfileSection";
import UserAdsSection from "@/components/modules/dashboard/author/UserAdsSection";
import SHContainer from "@/components/ui/core/SHContainer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <ProfileSection />
            <div className="w-full mx-auto py-20 px-4 mt-32 bg-[#f8fafd]">
                <SHContainer> <UserAdsSection /> </SHContainer>

            </div>
        </main>
    )
}
