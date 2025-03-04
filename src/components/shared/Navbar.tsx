"use client";

import { useState } from "react";
import { Menu, X, User, PlusIcon, LogOut } from "lucide-react";
import logo from "../../app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { logout } from "@/services/AuthService";
import { protectedRoutes } from "@/constant";
import { usePathname, useRouter } from "next/navigation";

const navbarItem = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Products',
        href: '/products'
    },
    {
        name: 'About',
        href: '/about-us'
    },
    {
        name: 'Contact',
        href: '/contact-us'
    },
    {
        name: 'FAQ',
        href: '/faq'
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");
    const { user, setIsLoading } = useUser();
    const pathname = usePathname();
    const router = useRouter();

    const handleLogOut = () => {
        logout();
        setIsLoading(true);
        if (protectedRoutes.some((route) => pathname.match(route))) {
            router.push("/");
        }
    };

    return (
        <nav className="bg-yellow-400 border-b w-full sticky top-0 z-50">
            <div className="md:container mx-auto px-3 md:px-40 py-3 flex justify-between items-center">

                <div className="md:hidden border rounded-full p-2 flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black text-2xl">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <div className="flex items-center">
                    <Link href='/' className="text-2xl font-bold text-black flex items-center">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={200}
                            height={200}
                            className="mr-2 sm:w-auto sm:h-auto max-w-[150px] md:max-w-[200px]"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex space-x-10">
                    {navbarItem.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`relative text-[#374B5C] font-medium text-lg transition-colors ${active === item.name ? 'text-red-600' : ''}`}
                            onMouseEnter={() => setActive(item.name)}
                            onMouseLeave={() => setActive("")}
                        >
                            <span className={`absolute -left-5 top-1/2 transform -translate-y-1/2 text-blue-500 transition-all duration-300 ease-in-out ${active === item.name ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-2'}`}>•</span>
                            {item.name}
                        </Link>
                    ))}
                </div>
                {user?.email ? (
                    <>
                        <Link href='dashboard/listing'>
                            <Button className="hidden md:flex items-center gap-2 text-white px-6 py-2 rounded-lg font-medium bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] transition-all">
                                Post Your Ad <PlusIcon />
                            </Button>
                        </Link>

                        <div className="relative group">
                            <Avatar>
                                <AvatarImage>
                                    <User className="text-black cursor-pointer" />
                                </AvatarImage>
                                <AvatarFallback>
                                    <User className="text-black cursor-pointer" />
                                </AvatarFallback>
                            </Avatar>
                            <div className="absolute top-[55px] right-[10px] md:right-[-80px] w-[250px] bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:scale-x-100 group-hover:scale-y-100 scale-x-0 scale-y-0">
                                <div className="py-2">
                                    <Link href={`/dashboard/listing/add-ads`} className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]"><span>Post Your Ads</span></Link>
                                    <Link href={`/dashboard/listing`} className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]"><span>My Ads</span></Link>
                                    {user.role === 'admin' && <Link href={`/dashboard/admin/user-management`} className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]"><span>User Management</span></Link>}
                                    {user.role === 'admin' && <Link href={`/dashboard/admin/listings`} className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]"><span>Listings Management</span></Link>}
                                    <Link href={`/messages`} className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]"><span>Message</span></Link>
                                    <Link href={`/dashboard/favorites`} className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]"><span>Favorite</span></Link>
                                    <Link href={`/dashboard/profile`} className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]"><span>Profile</span></Link>
                                    <Link href={`/dashboard/purchase-history`} className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]">Purchase History</Link>
                                    <Link href={`/dashboard/sales-history`} className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]">Sales History</Link>
                                    <div className="border-t border-gray-200">
                                        <Link
                                            href="#"
                                            onClick={handleLogOut}
                                            className="flex gap-5 font-medium px-4 py-3 hover:bg-[#f8fafd]"
                                        >
                                            <LogOut /> <span>Log Out</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                ) : (
                    <Link className="flex gap-4" href='/login'>
                        <Button className="block text-[#374B5C] font-medium text-lg hover:text-[#536C88]">Log In</Button>
                    </Link>
                )}
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4 px-6 space-y-4 z-[999]">
                    {navbarItem.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`block text-[#374B5C] font-medium text-lg transition-colors ${active === item.name ? 'text-red-600' : ''}`}
                            onMouseEnter={() => setActive(item.name)}
                            onMouseLeave={() => setActive("Home")}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
