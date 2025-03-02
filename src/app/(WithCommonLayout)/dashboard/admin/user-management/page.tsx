import ManageUser from '@/components/modules/dashboard/admin/users';
import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';
import React from 'react';

const UserManagementPage = () => {
    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer >
                    <ManageUser />
                </SHContainer>
            </div>
        </div>
    );
};

export default UserManagementPage;
