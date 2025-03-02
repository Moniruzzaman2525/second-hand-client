"use client";

import { useState } from "react";
import { Menu, X, User, PlusIcon, LogOut } from "lucide-react";
import logo from "../../app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { logout } from "@/services/AuthService";

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
const navbarItemPhone = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Products',
        href: '/products'
    },
    {
        name: 'Post Your Ad',
        href: '/'
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

    const handleLogOut = () => {
        logout()
        setIsLoading(true);
    };

    return (
        <nav className="bg-yellow-400 border-b w-full sticky top-0 z-50">
            <div className="container mx-auto px-5 py-3 flex justify-between items-center">

                <div className="md:hidden border rounded-full p-2 flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black text-2xl">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <div className="flex items-center">
                    <Link href='/' className="text-2xl font-bold text-black flex items-center">
                        <Image src={logo} alt="Logo" width={200} height={200} className="mr-2" />
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

                {/* <div className="flex items-center space-x-4">
                    <Link href='/dashboard/profile' className="border rounded-full p-2">
                        <User className="text-black " />
                    </Link>
                </div> */}
                {user?.email ? (
                    <>
                        <button className="hidden md:flex items-center gap-2 text-white px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] transition-all">
                            Post Your Ad <PlusIcon />
                        </button>

                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarImage> <User className="text-black " /></AvatarImage>
                                    <AvatarFallback><User className="text-black " /></AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href={`/dashboard/profile`}>Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={`/dashboard/purchase-history`}>Dashboard</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="bg-red-500 cursor-pointer"
                                    onClick={handleLogOut}
                                >
                                    <LogOut />
                                    <span>Log Out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                ) : (
                            <Link className="flex gap-4" href='/login'>
                                <Button className="block text-[#374B5C] font-medium text-lg hover:text-[#536C88]">Log In</Button>
                            </Link>
                )}
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4 px-6 space-y-4 z-[999]">
                    {navbarItemPhone.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`block text-[#374B5C] font-medium text-lg transition-colors ${active === item.name ? 'text-red-600' : ''}`}
                            onMouseEnter={() => setActive(item.name)}
                            onMouseLeave={() => setActive("Home")}
                        >
                            <span className={`mr-2 text-blue-500 transition-all duration-300 ease-in-out ${active === item.name ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-2'}`}>•</span>
                            {item.name}
                        </Link>
                    ))}
                    <div className="border-t border-gray-200 pt-4">
                        <p className="text-yellow-500 font-semibold">Call Support</p>
                        <p className="text-gray-700">+880 1925-716395</p>
                        <p className="text-yellow-500 font-semibold mt-2">Email Address</p>
                        <p className="text-gray-700">web.moniruzzaman1@gmail.com</p>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="text-xl text-[#374B5C] hover:text-[#536C88]"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-xl text-[#374B5C] hover:text-[#536C88]"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-xl text-[#374B5C] hover:text-[#536C88]"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
