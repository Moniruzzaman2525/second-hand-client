import AddProductsForm from '@/components/modules/dashboard/product/AddProductForm';
import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';


const AddListing = () => {
    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer >
                    <h1 className='text-[35px] font-bold text-[#374b5c] py-5'>Post Your Ad</h1>
                    <AddProductsForm />
                </SHContainer>
            </div>
        </div>
    );
};

export default AddListing;
