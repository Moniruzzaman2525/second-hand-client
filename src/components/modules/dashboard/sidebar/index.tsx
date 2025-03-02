"use client"

import { usePathname } from 'next/navigation';
import SHContainer from '@/components/ui/core/SHContainer';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';

const Sidebar = () => {
    const pathname = usePathname();
    const { user } = useUser();

    const isActive = (path: string) => {
        if (pathname === path) {
            return 'text-blue-500 font-semibold';
        }
        if (pathname.startsWith(`${path}/`) && pathname !== '/dashboard/listing/add-ads') {
            return 'text-blue-500 font-semibold';
        }
        return 'text-gray-700';
    };

    return (
        <div className="w-full h-full bg-[#fdfdfe] shadow-sm">
            <SHContainer className="py-10 flex items-end gap-10 justify-start">
                {user?.role === 'user' && (
                    <>
                        <Link className={`${isActive('/dashboard/listing/add-ads')} text-lg`} href="/dashboard/listing/add-ads">
                            Add New
                        </Link>
                        <Link className={`${isActive('/dashboard/listing')} text-lg`} href="/dashboard/listing">
                            My Ads
                        </Link>
                        <Link className={`${isActive('/dashboard/purchase-history')} text-lg`} href="/dashboard/purchase-history">
                            Purchase History
                        </Link>
                        <Link className={`${isActive('/dashboard/favorites')} text-lg`} href="/dashboard/favorites">
                            Favorites
                        </Link>
                    </>
                )}
                <Link className={`${isActive('/messages')} text-lg`} href="/messages">
                    Messages
                </Link>
                <Link className={`${isActive('/dashboard/profile')} text-lg`} href="/dashboard/profile">
                    Profile
                </Link>
                {user?.role === 'admin' && (
                    <>
                        <Link className={`${isActive('/dashboard/admin/user-management')} text-lg`} href="/dashboard/admin/user-management">
                            User Management
                        </Link>
                        <Link className={`${isActive('/dashboard/admin/listings')} text-lg`} href="/dashboard/admin/listings">
                            Listing Management
                        </Link>
                    </>
                )}
            </SHContainer>
        </div>
    );
};

export default Sidebar;
