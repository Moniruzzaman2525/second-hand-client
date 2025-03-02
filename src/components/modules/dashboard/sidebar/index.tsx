import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="w-full h-full py-10 bg-white shadow-sm flex items-end gap-10 justify-start">
            <Link href="/dashboard/listing/add-ads" className="text-gray-700 hover:text-blue-500 text-lg">Add New</Link>
            <Link href="/dashboard/listing" className="text-gray-700 hover:text-blue-500 text-lg">My Ads</Link>
            <Link href="/favorites" className="text-gray-700 hover:text-blue-500 text-lg">Favorites</Link>
            <Link href="/messages" className="text-gray-700 hover:text-blue-500 text-lg">Messages</Link>
            <Link href="/dashboard/profile" className="text-gray-700 hover:text-blue-500 text-lg">Settings</Link>
        </div>
    );
}

export default Sidebar;

