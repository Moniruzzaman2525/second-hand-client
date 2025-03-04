import ProfileSection from '@/components/modules/dashboard/profile';
import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';
import { getUserDetails } from '@/services/Users';
import React from 'react';

const ProfilePage = async() => {
    const { data: profile } = await getUserDetails();

    return (
         <div>
            <Sidebar />
            <div className='bg-[#f8fafd]'>
                <SHContainer>
                    <ProfileSection profile={profile} />
                </SHContainer>
            </div>
        </div>

    );
};

export default ProfilePage;
