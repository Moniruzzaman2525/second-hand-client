import ManageProducts from "@/components/modules/dashboard/product";
import Sidebar from "@/components/modules/dashboard/sidebar";
import SHContainer from "@/components/ui/core/SHContainer";


const ListingPage = () => {
    return (
         <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer >
                    <ManageProducts />
                </SHContainer>
            </div>
        </div>
    );
};

export default ListingPage;
