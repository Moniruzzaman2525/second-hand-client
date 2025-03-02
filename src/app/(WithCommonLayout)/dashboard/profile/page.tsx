import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';
import React from 'react';

const ProfilePage = () => {
    return (
         <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    This is profile route
                </SHContainer>
            </div>
        </div>

    );
};

export default ProfilePage;
