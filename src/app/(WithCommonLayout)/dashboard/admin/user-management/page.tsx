import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';
import React from 'react';

const UserManagementPage = () => {
    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer >
                    user management
                </SHContainer>
            </div>
        </div>
    );
};

export default UserManagementPage;
