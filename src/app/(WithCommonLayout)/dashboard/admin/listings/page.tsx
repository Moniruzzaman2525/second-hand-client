import Sidebar from "@/components/modules/dashboard/sidebar";
import SHContainer from "@/components/ui/core/SHContainer";

const ListingsPage = () => {
    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer>
                    ListingsPage
                </SHContainer>
            </div>
        </div>
    );
};

export default ListingsPage;
