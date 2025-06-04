import { getAllUsers } from '@/services/Users';
import React from 'react';
import { AdminUserStats } from './user-stats';

const UserPage = async () => {
     const { data } = await getAllUsers();
    return (
        <div>
            <AdminUserStats data={data} />
        </div>
    );
};

export default UserPage;

