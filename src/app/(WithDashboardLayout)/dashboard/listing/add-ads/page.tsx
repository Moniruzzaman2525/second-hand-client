import { DashboardLayout } from '@/components/layout/dashboard-layout';
import AddProductsForm from '@/components/modules/dashboard/product/AddProductForm';
import SHContainer from '@/components/ui/core/SHContainer';


const AddListing = () => {
    return (
        <DashboardLayout>
            <div className='bg-[#f8fafd]'>
                <SHContainer >
                    <h1 className='text-[35px] font-bold text-[#374b5c] py-5'>Post Your Ad</h1>
                    <AddProductsForm />
                </SHContainer>
            </div>
        </DashboardLayout>
    );
};

export default AddListing;
