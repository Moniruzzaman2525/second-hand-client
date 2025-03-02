import ManageProducts from "@/components/modules/dashboard/product";
import Sidebar from "@/components/modules/dashboard/sidebar";
import SHContainer from "@/components/ui/core/SHContainer";


const ListingPage = () => {
    return (
        <SHContainer>
            <Sidebar />
            <ManageProducts />
        </SHContainer>
    );
};

export default ListingPage;
