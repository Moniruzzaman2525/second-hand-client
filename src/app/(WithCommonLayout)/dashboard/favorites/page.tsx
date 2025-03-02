import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';
import React from 'react';

const page = () => {
    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer >
                    Favorite Items
                </SHContainer>
            </div>
        </div>
    );
};

export default page;
