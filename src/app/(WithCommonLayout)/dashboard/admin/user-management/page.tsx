import ManageUser from '@/components/modules/dashboard/admin/users';
import Sidebar from '@/components/modules/dashboard/sidebar';
import SHContainer from '@/components/ui/core/SHContainer';
import { getAllUsers } from '@/services/Users';
import React from 'react';

const UserManagementPage = async ({ searchParams }: { searchParams: Promise<{ page: string }> }) => {
     const { page } = await searchParams;
        const { data, meta } = await getAllUsers(page, "5");
    return (
        <div>
            <Sidebar />
            <div className='bg-[#f8fafd] h-screen'>
                <SHContainer >
                    <ManageUser users={data} meta={meta} />
                </SHContainer>
            </div>
        </div>
    );
};

export default UserManagementPage;
