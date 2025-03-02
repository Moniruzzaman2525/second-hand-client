import ProfileSection from '@/components/modules/dashboard/profile';
import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';
import React from 'react';

const ProfilePage = () => {
    return (
         <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    <ProfileSection />
                </SHContainer>
            </div>
        </div>

    );
};

export default ProfilePage;
