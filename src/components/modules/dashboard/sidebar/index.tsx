"use client"
import { usePathname } from 'next/navigation';
import SHContainer from '@/components/ui/core/SHContainer';
import Link from 'next/link';

const Sidebar = () => {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? 'text-blue-500 font-semibold' : 'text-gray-700';
    };

    return (
        <div className="w-full h-full bg-[#fdfdfe] shadow-sm">
            <SHContainer className="py-10 flex items-end gap-10 justify-start">
                <Link className={`${isActive('/dashboard/listing/add-ads')} text-lg`} href="/dashboard/listing/add-ads">
                    Add New
                </Link>
                <Link className={`${isActive('/dashboard/listing')} text-lg`} href="/dashboard/listing">
                    My Ads
                </Link>
                <Link className={`${isActive('/favorites')} text-lg`} href="/favorites">
                    Favorites
                </Link>
                <Link className={`${isActive('/messages')} text-lg`} href="/messages">
                    Messages
                </Link>
                <Link className={`${isActive('/dashboard/profile')} text-lg`} href="/dashboard/profile">
                    Settings
                </Link>
            </SHContainer>
        </div>
    );
}

export default Sidebar;
