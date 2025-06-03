import { DashboardLayout } from '@/components/layout/dashboard-layout';
import ProfileSection from '@/components/modules/dashboard/profile';
import SHContainer from '@/components/ui/core/SHContainer';
import { getUserDetails } from '@/services/Users';
import React from 'react';

const ProfilePage = async () => {
    const { data: profile } = await getUserDetails();

    return (
        <DashboardLayout>
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer>
                    <ProfileSection profile={profile} />
                </SHContainer>
            </div>
        </DashboardLayout>

    );
};

export default ProfilePage;
