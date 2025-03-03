"use client"

import { usePathname } from 'next/navigation';
import SHContainer from '@/components/ui/core/SHContainer';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
    const pathname = usePathname();
    const { user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => {
        if (pathname === path) {
            return 'text-[#6d90df] font-semibold';
        }
        if (pathname.startsWith(`${path}/`) && pathname !== '/dashboard/listing/add-ads') {
            return 'text-[#6d90df] font-semibold';
        }
        return 'text-gray-700';
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className="w-full h-full bg-[#fdfdfe] shadow-sm">
            <SHContainer>
                <div className="py-10 md:flex items-end gap-2 md:gap-10 justify-between">
                    <div className="md:hidden">
                        <Menu
                            className="text-gray-700 cursor-pointer"
                            size={24}
                            onClick={handleMenuToggle}
                        />
                    </div>

                    <div className={`md:flex md:flex-row flex-col items-start gap-5 justify-start ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <div>
                            <Link className={`${isActive('/dashboard/listing/add-ads')} text-[14px] md:text-lg`} href="/dashboard/listing/add-ads">
                                Add New
                            </Link>
                        </div>
                        <div>
                            <Link className={`${isActive('/dashboard/listing')} text-[14px] md:text-lg`} href="/dashboard/listing">
                                My Ads
                            </Link>
                        </div>
                        {user?.role === 'user' && (
                            <>
                                <div>
                                    <Link className={`${isActive('/dashboard/purchase-history')} text-[14px] md:text-lg`} href="/dashboard/purchase-history">
                                        Purchase History
                                    </Link>
                                </div>
                                <div>
                                    <Link className={`${isActive('/dashboard/sales-history')} text-[14px] md:text-lg`} href="/dashboard/sales-history">
                                        Sales History
                                    </Link>
                                </div>
                                <div>
                                    <Link className={`${isActive('/dashboard/favorites')} text-[14px] md:text-lg`} href="/dashboard/favorites">
                                        Favorites
                                    </Link>
                                </div>
                            </>
                        )}
                        <div>
                            <Link className={`${isActive('/messages')} text-[14px] md:text-lg`} href="/messages">
                                Messages
                            </Link>
                        </div>
                        <div>
                            <Link className={`${isActive('/dashboard/profile')} text-[14px] md:text-lg`} href="/dashboard/profile">
                                Profile
                            </Link>
                        </div>
                        {user?.role === 'admin' && (
                            <>
                                <div>
                                    <Link className={`${isActive('/dashboard/admin/user-management')} text-[14px] md:text-lg`} href="/dashboard/admin/user-management">
                                        User Management
                                    </Link>
                                </div>
                                <div>
                                    <Link className={`${isActive('/dashboard/admin/listings')} text-[14px] md:text-lg`} href="/dashboard/admin/listings">
                                        Listing Management
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </SHContainer>
        </div>
    );
};

export default Sidebar;
